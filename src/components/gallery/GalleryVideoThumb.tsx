'use client';

import { useEffect, useRef, useState } from 'react';

type GalleryVideoThumbProps = {
  src: string;
  className?: string;
};

export default function GalleryVideoThumb({ src, className }: GalleryVideoThumbProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [posterUrl, setPosterUrl] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let cancelled = false;

    const captureFrame = () => {
      if (cancelled || !video.videoWidth || !video.videoHeight) return;

      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        setFailed(true);
        return;
      }

      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      setPosterUrl(canvas.toDataURL('image/jpeg', 0.82));
    };

    const onError = () => {
      if (!cancelled) setFailed(true);
    };

    const onLoadedMetadata = () => {
      const seekTime =
        Number.isFinite(video.duration) && video.duration > 0.25 ? 0.1 : 0;
      const onSeeked = () => {
        video.removeEventListener('seeked', onSeeked);
        captureFrame();
      };

      video.addEventListener('seeked', onSeeked);
      try {
        video.currentTime = seekTime;
      } catch {
        captureFrame();
      }
    };

    video.addEventListener('error', onError);
    video.addEventListener('loadedmetadata', onLoadedMetadata, { once: true });
    video.preload = 'metadata';
    video.load();

    return () => {
      cancelled = true;
      video.removeEventListener('error', onError);
    };
  }, [src]);

  return (
    <>
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        preload="metadata"
        tabIndex={-1}
        aria-hidden
        className="gallery-video-thumb-source"
      />
      {posterUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img className={className} src={posterUrl} alt="" />
      ) : failed ? (
        <span className={`${className ?? ''} gallery-card-video-fallback`.trim()} aria-hidden />
      ) : (
        <span className={`${className ?? ''} gallery-card-video-loading`.trim()} aria-hidden />
      )}
    </>
  );
}
