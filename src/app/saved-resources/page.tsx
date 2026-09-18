'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import { listSavedResources, removeSavedResource, type SavedResource } from '@/lib/native/saved-resources';

export default function SavedResourcesPage() {
  const [items, setItems] = useState<SavedResource[]>([]);

  useEffect(() => {
    void listSavedResources().then(setItems);
  }, []);

  const handleRemove = async (id: string) => {
    await removeSavedResource(id);
    setItems((current) => current.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="about-section home-section" style={{ maxWidth: '42rem', margin: '0 auto' }}>
        <h1 className="about-lang-title">Saved resources</h1>
        <p className="about-lang-intro">
          Bookmarks stored on this device only (page title and public link). No child health data is
          saved here.
        </p>
        {items.length === 0 ? (
          <p className="about-lang-intro">No saved resources yet. Use the star control in the app header.</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {items.map((item) => (
              <li
                key={item.id}
                style={{
                  border: '1px solid rgba(64,96,109,0.2)',
                  borderRadius: '12px',
                  padding: '0.85rem 1rem',
                }}
              >
                <Link href={item.url} style={{ fontWeight: 600, display: 'block', marginBottom: '0.35rem' }}>
                  {item.title}
                </Link>
                <p style={{ fontSize: '0.85rem', margin: '0 0 0.5rem', wordBreak: 'break-all' }}>{item.url}</p>
                <button type="button" className="header-auth-signout" onClick={() => void handleRemove(item.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
