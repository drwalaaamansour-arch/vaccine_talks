'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';

export default function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedImageIndex !== null) {
        setSelectedImageIndex(null);
      }
    };

    if (selectedImageIndex !== null) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImageIndex]);
  // List of all media files from the posts folder
  const mediaFiles = [
    '0620 (1).mov',
    '0622.mov',
    '299D9454-3354-423A-A71C-F16516C2627Esegment_video_2.mp4',
    'acefd4a3-5d24-4e58-b709-c22bbec61c1e.jpg',
    'All what you have to k.png',
    'Beige and Brown Cartoon Illustrated Question Answer Psychological Instagram Post Portrait - 1.png',
    'Beige Minimalist Ask Question Instagram Post.png',
    'd2f1555e-82de-46fe-b942-8d3bc4152dab.jpg',
    'feeca638-e0b3-491c-b344-9237bb349823.jpg',
    'Grey Beauty Is All Around Us Instagram Story.png.png',
    'Image 10.jpg',
    'Image 6.jpg',
    'IMG_5363.jpeg',
    'IMG_5427.jpeg',
    'IMG_5471.PNG',
    'IMG_5559.PNG',
    'IMG_5563.PNG',
    'IMG_5564.PNG',
    'IMG_5566.PNG',
    'IMG_5567.PNG',
    'IMG_5576.PNG',
    'IMG_5577.PNG',
    'IMG_5632.PNG',
    'IMG_5634.PNG',
    'IMG_6090.PNG',
    'IMG_6232.jpeg',
    'IMG_6308 2.PNG',
    'IMG_6384.PNG',
    'IMG_6512.jpeg',
    'IMG_6575.jpeg',
    'IMG_6576.jpeg',
    'IMG_6618.jpeg',
    'IMG_6695.PNG',
    'IMG_6842.jpeg',
    'IMG_6899.jpeg',
    'Peach Aesthetic Background Flyer.png',
    'Purple And White Modern WeΓÇÖre Open Announcement Invitation.png',
    'Ramadan Kareem.png.png',
    'Tan Neutral Customer Testimonial Facebook Post.png',
    'White Minimalist Business Marketing Agency Flyer.png',
    'Yellow and Green Gradient Qr Code Flyer.png',
    'Yellow Retro Grateful for The Blessing Portrait Poster.png',
    '╪º╪╣╪º╪»╪⌐ ╪º┘ä╪¬╪╖╪╣┘è┘à ╪╡┘ê╪¬.mov',
    '╪º┘ä╪▒┘ê╪¬╪º.mov',
    '╪º┘ä┘é╪º┘ç╪▒╪⌐ ┘ä╪«╪¿╪▒╪º╪í ╪º┘ä┘à┘ê╪╢╪⌐.png',
    '╪¿╪╡┘ê╪¬ ┘å┘ç╪º┘è┘ö┘è.mov',
    '╪¬╪╖╪╣┘è┘à ╪º┘ä╪º┘ò┘å┘ü┘ä┘ê┘å╪▓╪º.png',
    '╪¬╪╖╪╣┘è┘à ╪º┘ä╪¡┘à┘ë ╪º┘ä╪┤┘ê┘â┘è╪⌐.png',
    '╪¬╪╖╪╣┘è┘à ╪º┘ä╪│╪╣╪º╪▒.png',
    '╪«╪» ╪¿╪º┘ä┘â ┘ó.mov',
    '┘ä╪º ╪¬╪╣╪º╪▒╪╢ ╪¿┘è┘å ╪¬╪╖╪╣┘è┘à ╪º┘ä╪º┘ò┘å┘ü┘ä┘ê┘å╪▓╪º ┘ê╪¬╪╖╪╣┘è┘à ╪º┘ä┘à╪»╪º╪▒╪│.png',
    'vaccine-antibiotic-info.png',
    'vaccine-protection-virus.png',
    'info-rasmovic-mov.png',
    'facebook-post-company.png',
    '┘ç┘å╪╣┘è╪».mp4',
    '┘ç┘ê ┘è┘å┘ü╪╣ ╪º╪╖╪╣┘à ╪º╪¿┘å┘ë ╪¬╪º┘å┘è ┘ä┘ê ┘à╪┤ ┘ü╪º┘â╪▒┘ç ╪º╪¬╪╖╪╣┘à ┘ê┘ä╪º ┘ä╪º.mp4',
    '┘ê╪│╪º┘ö┘ä┘ê┘â ┘ç┘ê ┘è┘å┘ü╪╣ ╪º╪«╪» ╪º┘ä╪¬╪╖╪╣┘è┘à╪º╪¬ ┘ê ╪º┘å╪º ╪¿╪º╪«╪» ┘â┘ê╪▒╪¬┘è╪▓┘ê┘å .mp4',
    'suicide-prevention-day.png'
  ];

  const isVideo = (filename: string) => {
    return filename.toLowerCase().endsWith('.mov') || filename.toLowerCase().endsWith('.mp4');
  };

  const isImage = (filename: string) => {
    return filename.toLowerCase().endsWith('.jpg') || 
           filename.toLowerCase().endsWith('.jpeg') || 
           filename.toLowerCase().endsWith('.png');
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <main className="hero">
        <h1 className="hero-title animate-fade-in-up">
          Vaccine
          <br />
          Talk
          </h1>
        
        <p className="hero-subtitle animate-fade-in-up animate-delay-1">
          (Egyptian Edition)
        </p>
        
        <div className="hero-quote animate-fade-in-up animate-delay-2">
          <p>"Everything you need to know about</p>
          <p>vaccines in Egypt"</p>
        </div>
      </main>

      {/* Gallery Section */}
      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="gallery-container">
            <h2 className="gallery-title">
              Gallery / المعرض
            </h2>
            
            <div className="gallery-grid">
              {mediaFiles.map((file, index) => {
                const filePath = `/posts/${encodeURIComponent(file)}`;
                
                if (isVideo(file)) {
                  return (
                    <div 
                      key={index} 
                      onClick={() => setSelectedImageIndex(index)}
                      style={{
                        position: 'relative',
                        width: '100%',
                        aspectRatio: '1',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        background: '#f5f5f5',
                        cursor: 'pointer'
                      }}
                    >
                      <video
                        src={filePath}
                        controls
                        onClick={(e) => e.stopPropagation()}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease'
                        }}
                        preload="metadata"
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.05)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                        }}
                      >
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  );
                } else if (isImage(file)) {
                  return (
                    <div key={index} style={{
                      position: 'relative',
                      width: '100%',
                      aspectRatio: '1',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                      cursor: 'pointer'
                    }}>
                      <img
                        src={filePath}
                        alt={file}
                        onClick={() => setSelectedImageIndex(index)}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease'
                        }}
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.style.display = 'none';
                          }
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.05)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                        }}
                      />
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImageIndex !== null && isImage(mediaFiles[selectedImageIndex]) && (
        <div
          onClick={() => setSelectedImageIndex(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            cursor: 'pointer',
            padding: '2rem'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '90vw',
              maxHeight: '90vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <button
              onClick={() => setSelectedImageIndex(null)}
              className="modal-close-btn"
              aria-label="Close"
            >
              ×
            </button>
            <img
              src={`/posts/${encodeURIComponent(mediaFiles[selectedImageIndex])}`}
              alt={mediaFiles[selectedImageIndex]}
              style={{
                maxWidth: '100%',
                maxHeight: '90vh',
                borderRadius: '8px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
                objectFit: 'contain'
              }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/question-mark.jpg';
                target.alt = 'Image not found';
              }}
            />
          </div>
        </div>
      )}

      {/* Video Modal */}
      {selectedImageIndex !== null && isVideo(mediaFiles[selectedImageIndex]) && (
        <div
          onClick={() => setSelectedImageIndex(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            cursor: 'pointer',
            padding: '2rem'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              maxWidth: '100vw',
              maxHeight: '100vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <button
              onClick={() => setSelectedImageIndex(null)}
              className="modal-close-btn video-close-btn"
              aria-label="Close"
            >
              ×
            </button>
            <video
              src={`/posts/${encodeURIComponent(mediaFiles[selectedImageIndex])}`}
              controls
              autoPlay
              style={{
                width: '100%',
                height: '100%',
                maxWidth: '100vw',
                maxHeight: '100vh',
                objectFit: 'contain',
                borderRadius: '8px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)'
              }}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-content">
            {/* Contact Section */}
            <div className="footer-section">
              <h3 className="footer-title">Contact</h3>
              <p className="footer-text">
                I'm always looking for new and exciting opportunities. Let's connect.
              </p>
              
              {/* Social Links */}
              <div className="footer-social">
                <a href="https://www.facebook.com/profile.php?id=100064747760120" className="social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/talkvaccine?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com/@VaccineTalk" className="social-link" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Disclaimer Button */}
            <div className="footer-section">
              <a href="/disclaimer" className="disclaimer-btn" style={{textDecoration: "none", display: "inline-block"}}>Disclaimer</a>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p className="copyright-text">
              © 2025 Vaccine Talk – All rights reserved.
            </p>
            <p className="copyright-text">
              Content is original and may not be copied without permission.
            </p>
          </div>
          <div className="footer-policy">
            <a href="/copy" className="policy-link">Copyright & Content Policy</a>
            <span className="separator">|</span>
            <a href="/copy" className="policy-link arabic">حقوق النشر والاستخدام</a>
          </div>
        </div>
      </footer>
    </div>
  );
}