'use client';

import { useMemo, useState } from 'react';
import Header from '@/components/Header';
import {
  allRegressionScenarios,
  regressionScenarioStats,
} from '@/lib/vaccine-checker/regression-lab/scenarios/all-scenarios';
import { runAllRegressionScenarios } from '@/lib/vaccine-checker/regression-lab/run-scenario';

/**
 * Internal QA page (not linked from parent-facing nav).
 * Runs the same scenario catalog as automated regression-lab tests in the browser.
 */
export default function CheckerRegressionLabPage() {
  const [ran, setRan] = useState(false);

  const results = useMemo(() => {
    if (!ran) return [];
    return runAllRegressionScenarios(allRegressionScenarios);
  }, [ran]);

  const passCount = results.filter((r) => r.ok).length;

  return (
    <div className="min-h-screen">
      <Header />
      <main className="about-section home-section" style={{ maxWidth: '48rem', margin: '0 auto' }}>
        <h1 className="about-lang-title">Vaccine Checker regression lab</h1>
        <p className="about-lang-intro">
          Developer-only checklist of canonical scheduling scenarios. This page does not change medical
          rules — it re-runs the production calculation engine and compares results to saved expectations.
          Not for parents.
        </p>
        <button
          type="button"
          className="start-button vaccine-checker-primary-action"
          onClick={() => setRan(true)}
        >
          Run all scenarios
        </button>
        {ran && (
          <p className="vaccine-checker-share-feedback" role="status" style={{ marginTop: '1rem' }}>
            {passCount} / {results.length} passed · catalog: {regressionScenarioStats().total} scenarios
          </p>
        )}
        <ul style={{ listStyle: 'none', padding: 0, marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {allRegressionScenarios.filter((s) => s.category === 'canonical-historical').map((scenario) => {
            const result = results.find((r) => r.scenarioId === scenario.id);
            const status = !ran ? 'pending' : result?.ok ? 'pass' : 'fail';
            return (
              <li
                key={scenario.id}
                style={{
                  border: '1px solid rgba(64,96,109,0.22)',
                  borderRadius: '12px',
                  padding: '0.85rem 1rem',
                }}
              >
                <p style={{ fontWeight: 600, margin: '0 0 0.35rem' }}>
                  {status === 'pass' ? '✓' : status === 'fail' ? '✗' : '○'} {scenario.title}
                </p>
                <p style={{ fontSize: '0.85rem', margin: '0 0 0.35rem', opacity: 0.85 }}>
                  DOB {scenario.dobLabel} · As-of {scenario.asOfLabel} · <code>{scenario.id}</code>
                </p>
                <p style={{ fontSize: '0.9rem', margin: 0 }}>{scenario.description}</p>
                {result && !result.ok && (
                  <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.1rem', fontSize: '0.85rem' }}>
                    {result.failures.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}
