#!/usr/bin/env python3
"""Generate src/data/vaccine-articles.ts from vaccine page.tsx sources."""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
APP = ROOT / "src/app"
OUT = ROOT / "src/data/vaccine-articles.ts"

SLUGS: list[tuple[str, str, str]] = [
    ("polio", "polio", "💧"),
    ("tuberculosis", "tuberculosis", "💉"),
    ("zero-dose", "zeroDose", "💉"),
    ("mmr", "mmr", "💉"),
    ("hepatitis-a", "hepatitisA", "💉"),
    ("hepatitis-b", "hepatitisB", "💉"),
    ("rotavirus", "rotavirus", "💧"),
    ("chickenpox", "chickenpox", "💉"),
    ("influenza", "influenza", "💉"),
    ("pertussis", "pertussis", "💉"),
    ("tetanus", "tetanus", "💉"),
    ("diphtheria", "diphtheria", "💉"),
    ("hib", "hib", "💉"),
    ("pcv", "pcv", "💉"),
    ("hepatitis-a-b", "hepatitisAB", "💉"),
    ("herpes-zoster", "herpesZoster", "💉"),
    ("meningitis", "meningitis", "💉"),
    ("ppsv", "ppsv", "💉"),
    ("rabies", "rabies", "💉"),
    ("hpv", "hpv", "💉"),
    ("rsv", "rsv", "💉"),
]

MENINGITIS_FAQ = [
    {
        "href": "/non-hcp/common-questions/men-acwy",
        "labelAr": "للأسئلة الشائعة (MenACWY) اضغط هنا",
        "labelEn": "For MenACWY common questions, click here",
    },
    {
        "href": "/non-hcp/common-questions/men-b",
        "labelAr": "للأسئلة الشائعة (MenB) اضغط هنا",
        "labelEn": "For MenB common questions, click here",
    },
]

MULTI_PARA_INTRO = {"meningitis", "hpv"}


def ts_str(value: str) -> str:
    return json.dumps(value, ensure_ascii=False)


def ts_block(value: str | list[str], indent: str = "    ") -> str:
    if isinstance(value, list):
        if len(value) == 1:
            return ts_str(value[0])
        lines = ["["]
        for item in value:
            lines.append(f"{indent}  {ts_str(item)},")
        lines.append(f"{indent}]")
        return "\n".join(lines)
    return ts_str(value)


def clean_jsx_inline(text: str) -> str:
    text = re.sub(r"\{'\s*'\s*\}", " ", text)
    text = text.replace("&quot;", '"')
    text = text.replace("&apos;", "'")
    text = text.replace("&amp;", "&")
    text = re.sub(r"[\r\n\t]+", " ", text)
    text = re.sub(r"  +", " ", text)
    return text.strip()


def extract_p_inner(html: str) -> str:
    return clean_jsx_inline(html)


def extract_p_tags(block: str) -> list[str]:
    return [extract_p_inner(m.group(1)) for m in re.finditer(r"<p[^>]*>(.*?)</p>", block, re.DOTALL)]


def extract_lang_section(content: str, arabic: bool) -> str:
    bilingual_m = re.search(r'<div className="about-bilingual">(.*?)</div>\s*</div>\s*</section>', content, re.DOTALL)
    if not bilingual_m:
        return ""
    bilingual = bilingual_m.group(1)

    if arabic:
        m = re.search(r'<div className="about-lang arabic">(.*)', bilingual, re.DOTALL)
        if not m:
            return ""
        chunk = m.group(1)
        for marker in (
            '<div className="lang-divider">',
            '{/* English Content */}',
            '<div className="about-lang">',
        ):
            idx = chunk.find(marker)
            if idx != -1:
                return chunk[:idx]
        return chunk

    # English: after lang-divider or English comment, first non-arabic about-lang
    tail = bilingual
    for marker in ('<div className="lang-divider">', '{/* English Content */}'):
        idx = tail.find(marker)
        if idx != -1:
            tail = tail[idx + len(marker) :]
            break
    m = re.search(r'<div className="about-lang">(.*?)(?=</div>\s*(?:</div>\s*</div>|</div>\s*<CdcArabicPdfSection))', tail, re.DOTALL)
    if m:
        return m.group(1)
    m = re.search(r'<div className="about-lang">(.*)', tail, re.DOTALL)
    return m.group(1) if m else ""


def extract_title(section: str) -> str:
    m = re.search(r"<VaccineLangTitle[^>]*>(.*?)</VaccineLangTitle>", section, re.DOTALL)
    return clean_jsx_inline(m.group(1)) if m else ""


def extract_image(section: str) -> dict[str, str] | None:
    m = re.search(r'src="([^"]+)"\s*\n?\s*alt="([^"]+)"', section)
    if not m:
        m = re.search(r"alt=\"([^\"]+)\"[^>]*src=\"([^\"]+)\"", section)
        if m:
            return {"src": m.group(2), "alt": m.group(1)}
        return None
    return {"src": m.group(1), "alt": m.group(2)}


def extract_features(section: str) -> list[dict[str, str | None]]:
    features: list[dict[str, str | None]] = []
    chunks = re.split(r'<div className="feature-item">\s*', section)[1:]
    for chunk in chunks:
        end = re.search(r"\n\s*</div>\s*(?:\n\s*<div|\n\s*</div>)", chunk)
        item = chunk[: end.start()] if end else chunk.split("</div>")[0]
        emoji = None
        em = re.search(r'className="feature-emoji"[^>]*>\s*([^\s<]+)', item)
        if em:
            emoji = em.group(1)
        pm = re.search(r"<p>(.*?)</p>", item, re.DOTALL)
        if pm:
            features.append({"emoji": emoji, "text": extract_p_inner(pm.group(1))})
    return features


def extract_faq_links(section: str, slug: str) -> list[dict[str, str]]:
    if slug == "meningitis":
        return MENINGITIS_FAQ
    links: list[dict[str, str]] = []
    for m in re.finditer(
        r'<Link\s+[^>]*href="(/non-hcp/common-questions/[^"]+)"',
        section,
    ):
        links.append({"href": m.group(1)})
    return links


def extract_cdc_pdfs(content: str) -> list[dict[str, str]]:
    pdfs: list[dict[str, str]] = []
    for m in re.finditer(r"<CdcArabicPdfSection\s+(.*?)\s*/>", content, re.DOTALL):
        block = m.group(1)
        entry: dict[str, str] = {}
        for prop in ("fileName", "titleAr", "titleEn", "introAr"):
            pm = re.search(rf'{prop}="([^"]*)"', block)
            if pm:
                entry[prop] = pm.group(1)
        if entry.get("fileName"):
            pdfs.append(entry)
    return pdfs


def parse_schedule_const(content: str, name: str) -> list[dict[str, str]]:
    m = re.search(rf"const {name} = \[(.*?)\];", content, re.DOTALL)
    if not m:
        return []
    chips: list[dict[str, str]] = []
    for cm in re.finditer(r"ar:\s*'([^']*)',\s*en:\s*'([^']*)'", m.group(1)):
        chips.append({"ar": cm.group(1), "en": cm.group(2)})
    return chips


def parse_polio(content: str) -> dict:
    tag_m = re.search(r'className="vax-article-hero-tag">([^<]+)</span>', content)
    tag_parts = [p.strip() for p in tag_m.group(1).split("·")] if tag_m else ["", ""]

    title_ar_m = re.search(r'className="vax-article-hero-title">([^<]+)</h2>', content)
    title_en_m = re.search(r'className="vax-article-hero-subtitle[^"]*"[^>]*>\s*([^<]+)\s*</p>', content)
    lead_ar_m = re.search(r'className="vax-article-hero-lead">\s*(.*?)\s*</p>', content, re.DOTALL)
    lead_en_m = re.search(
        r'className="vax-article-hero-lead-en[^"]*"[^>]*>\s*(.*?)\s*</p>',
        content,
        re.DOTALL,
    )

    intro_ar_m = re.search(r'className="vax-article-intro-ar">\s*(.*?)\s*</p>', content, re.DOTALL)
    intro_en_m = re.search(
        r'className="vax-article-intro-en[^"]*"[^>]*>\s*(.*?)\s*</p>',
        content,
        re.DOTALL,
    )

    drop_chips = parse_schedule_const(content, "DROP_SCHEDULE")
    inject_chips = parse_schedule_const(content, "INJECTION_SCHEDULE")
    highlights = parse_schedule_const(content, "HIGHLIGHTS")
    # HIGHLIGHTS uses emoji/ar/en — re-parse
    highlights = []
    hm = re.search(r"const HIGHLIGHTS = \[(.*?)\];", content, re.DOTALL)
    if hm:
        for item in re.finditer(
            r"emoji:\s*'([^']*)',\s*ar:\s*'([^']*)',\s*en:\s*'([^']*)'",
            hm.group(1),
        ):
            highlights.append({"emoji": item.group(1), "ar": item.group(2), "en": item.group(3)})

    summary_ar_m = re.search(r'className="vax-article-summary-ar">\s*(.*?)\s*</p>', content, re.DOTALL)
    summary_en_matches = re.findall(
        r'className="vax-article-summary-en[^"]*"[^>]*>\s*(.*?)\s*</p>',
        content,
        re.DOTALL,
    )
    summary_en_m = summary_en_matches[-1] if summary_en_matches else None

    return {
        "metaKey": "polio",
        "emoji": "💧",
        "heroAccent": "polio",
        "tagAr": tag_parts[0],
        "tagEn": tag_parts[1] if len(tag_parts) > 1 else "",
        "titleAr": title_ar_m.group(1).strip() if title_ar_m else "",
        "titleEn": title_en_m.group(1).strip() if title_en_m else "",
        "heroLeadAr": extract_p_inner(lead_ar_m.group(1)) if lead_ar_m else "",
        "heroLeadEn": extract_p_inner(lead_en_m.group(1)) if lead_en_m else "",
        "image": {"src": "/polio.jpeg", "alt": "شلل الأطفال — Polio"},
        "introAr": extract_p_inner(intro_ar_m.group(1)) if intro_ar_m else "",
        "introEn": extract_p_inner(intro_en_m.group(1)) if intro_en_m else "",
        "schedules": [
            {
                "variant": "drops",
                "icon": "💧",
                "titleAr": "مواعيد النقط",
                "titleEn": "Oral drops schedule",
                "noteAr": "النقط مش بس في الشهر 2 و4 و6 — كمان في الشهر 9، وسنة، وسنة ونصف، وعند الولادة.",
                "noteEn": "Drops are not only at 2, 4, and 6 months — also at 9 months, 1 year, 1.5 years, and at birth.",
                "chips": drop_chips,
            },
            {
                "variant": "inject",
                "icon": "💉",
                "titleAr": "مواعيد الحقن",
                "titleEn": "Injection schedule",
                "noteAr": "الحقن بتكون عند شهر 2 و4 و6.",
                "noteEn": "Injections are given at 2, 4, and 6 months.",
                "chips": inject_chips,
            },
        ],
        "features": highlights,
        "summary": {
            "titleAr": "خلاصة سريعة",
            "titleEn": "Quick summary",
            "ar": extract_p_inner(summary_ar_m.group(1)) if summary_ar_m else "",
            "en": extract_p_inner(summary_en_m) if summary_en_m else "",
        },
    }


def parse_standard_page(content: str, slug: str, meta_key: str, emoji: str) -> dict:
    ar_section = extract_lang_section(content, arabic=True)
    en_section = extract_lang_section(content, arabic=False)

    title_ar = extract_title(ar_section)
    title_en = extract_title(en_section)
    intro_ar_block = re.search(r'className="about-lang-intro">(.*?)</div>', ar_section, re.DOTALL)
    intro_en_block = re.search(r'className="about-lang-intro">(.*?)</div>', en_section, re.DOTALL)
    intro_ar = extract_p_tags(intro_ar_block.group(1)) if intro_ar_block else []
    intro_en = extract_p_tags(intro_en_block.group(1)) if intro_en_block else []

    ar_features = extract_features(ar_section)
    en_features = extract_features(en_section)
    features = []
    for i, ar_f in enumerate(ar_features):
        en_f = en_features[i] if i < len(en_features) else {"emoji": None, "text": ""}
        feat: dict[str, str | None] = {"ar": ar_f["text"], "en": en_f["text"]}
        if ar_f.get("emoji"):
            feat["emoji"] = ar_f["emoji"]
        features.append(feat)

    if slug in MULTI_PARA_INTRO:
        hero_lead_ar: str | list[str] = intro_ar
        hero_lead_en: str | list[str] = intro_en
    else:
        hero_lead_ar = intro_ar[0] if len(intro_ar) == 1 else (intro_ar if intro_ar else "")
        hero_lead_en = intro_en[0] if len(intro_en) == 1 else (intro_en if intro_en else "")

    article: dict = {
        "metaKey": meta_key,
        "emoji": emoji,
        "tagAr": f"لقاح {title_ar}",
        "tagEn": f"{title_en} vaccine",
        "titleAr": title_ar,
        "titleEn": title_en,
        "heroLeadAr": hero_lead_ar,
        "heroLeadEn": hero_lead_en,
        "features": features,
    }

    image = extract_image(ar_section)
    if image:
        article["image"] = image

    faq = extract_faq_links(ar_section, slug)
    if faq:
        article["faqLinks"] = faq

    cdc = extract_cdc_pdfs(content)
    if cdc:
        article["cdcPdfs"] = cdc

    return article


def emit_feature(feat: dict, indent: str) -> str:
    parts = []
    if feat.get("emoji"):
        parts.append(f"emoji: {ts_str(feat['emoji'])}")
    parts.append(f"ar: {ts_str(feat['ar'])}")
    parts.append(f"en: {ts_str(feat['en'])}")
    return f"{indent}{{ {', '.join(parts)} }}"


def ts_key(slug: str) -> str:
    return slug if slug.isidentifier() else ts_str(slug)


def emit_article(slug: str, article: dict) -> str:
    lines: list[str] = [f"  {ts_key(slug)}: {{"]
    lines.append(f"    metaKey: '{article['metaKey']}',")
    lines.append(f"    emoji: {ts_str(article['emoji'])},")

    if article.get("heroAccent"):
        lines.append(f"    heroAccent: '{article['heroAccent']}',")

    lines.append(f"    tagAr: {ts_str(article['tagAr'])},")
    lines.append(f"    tagEn: {ts_str(article['tagEn'])},")
    lines.append(f"    titleAr: {ts_str(article['titleAr'])},")
    lines.append(f"    titleEn: {ts_str(article['titleEn'])},")

    lead_ar = article["heroLeadAr"]
    lead_en = article["heroLeadEn"]
    if isinstance(lead_ar, list):
        lines.append(f"    heroLeadAr: {ts_block(lead_ar, '    ')},")
    else:
        lines.append(f"    heroLeadAr: {ts_str(lead_ar)},")
    if isinstance(lead_en, list):
        lines.append(f"    heroLeadEn: {ts_block(lead_en, '    ')},")
    else:
        lines.append(f"    heroLeadEn: {ts_str(lead_en)},")

    if article.get("image"):
        img = article["image"]
        lines.append(f"    image: {{ src: {ts_str(img['src'])}, alt: {ts_str(img['alt'])} }},")

    if article.get("introAr"):
        lines.append(f"    introAr: {ts_str(article['introAr'])},")
    if article.get("introEn"):
        lines.append(f"    introEn: {ts_str(article['introEn'])},")

    if article.get("schedules"):
        lines.append("    schedules: [")
        for sched in article["schedules"]:
            lines.append("      {")
            lines.append(f"        variant: '{sched['variant']}',")
            lines.append(f"        icon: {ts_str(sched['icon'])},")
            lines.append(f"        titleAr: {ts_str(sched['titleAr'])},")
            lines.append(f"        titleEn: {ts_str(sched['titleEn'])},")
            lines.append(f"        noteAr: {ts_str(sched['noteAr'])},")
            lines.append(f"        noteEn: {ts_str(sched['noteEn'])},")
            lines.append("        chips: [")
            for chip in sched["chips"]:
                lines.append(f"          {{ ar: {ts_str(chip['ar'])}, en: {ts_str(chip['en'])} }},")
            lines.append("        ],")
            lines.append("      },")
        lines.append("    ],")

    lines.append("    features: [")
    for feat in article["features"]:
        lines.append(f"      {emit_feature(feat, '      ')},")
    lines.append("    ],")

    if article.get("summary"):
        s = article["summary"]
        lines.append("    summary: {")
        lines.append(f"      titleAr: {ts_str(s['titleAr'])},")
        lines.append(f"      titleEn: {ts_str(s['titleEn'])},")
        lines.append(f"      ar: {ts_str(s['ar'])},")
        lines.append(f"      en: {ts_str(s['en'])},")
        lines.append("    },")

    if article.get("faqLinks"):
        lines.append("    faqLinks: [")
        for link in article["faqLinks"]:
            parts = [f"href: {ts_str(link['href'])}"]
            if link.get("labelAr"):
                parts.append(f"labelAr: {ts_str(link['labelAr'])}")
            if link.get("labelEn"):
                parts.append(f"labelEn: {ts_str(link['labelEn'])}")
            lines.append(f"      {{ {', '.join(parts)} }},")
        lines.append("    ],")

    if article.get("cdcPdfs"):
        lines.append("    cdcPdfs: [")
        for pdf in article["cdcPdfs"]:
            parts = [
                f"fileName: {ts_str(pdf['fileName'])}",
                f"titleAr: {ts_str(pdf['titleAr'])}",
                f"titleEn: {ts_str(pdf['titleEn'])}",
            ]
            if pdf.get("introAr"):
                parts.append(f"introAr: {ts_str(pdf['introAr'])}")
            lines.append(f"      {{ {', '.join(parts)} }},")
        lines.append("    ],")

    lines.append("  },")
    return "\n".join(lines)


def parse_page(slug: str, meta_key: str, emoji: str) -> dict:
    path = APP / slug / "page.tsx"
    content = path.read_text(encoding="utf-8")
    if slug == "polio" or "vax-article-hero" in content:
        return parse_polio(content)
    return parse_standard_page(content, slug, meta_key, emoji)


def main() -> None:
    articles: list[str] = []
    for slug, meta_key, emoji in SLUGS:
        article = parse_page(slug, meta_key, emoji)
        articles.append(emit_article(slug, article))

    output = "\n".join(
        [
            "import type { VaccineArticle } from '@/components/vaccine-article/types';",
            "",
            "export const VACCINE_ARTICLES = {",
            *articles,
            "} as const satisfies Record<string, VaccineArticle>;",
            "",
            "export function getVaccineArticle(slug: keyof typeof VACCINE_ARTICLES): VaccineArticle {",
            "  return VACCINE_ARTICLES[slug];",
            "}",
            "",
        ]
    )

    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(output, encoding="utf-8")
    print(f"Wrote {OUT} ({len(SLUGS)} articles)")


if __name__ == "__main__":
    main()
