"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Head from 'next/head';

export default function HomePage() {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const targetDate = new Date("2025-08-01T09:00:00");
    const timer = setInterval(() => {
      const now = new Date();
      const distance = targetDate - now;

      if (distance < 0) {
        setTimeLeft("⏰ It's time!");
        clearInterval(timer);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / (1000 * 60)) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      setTimeLeft(`${days.toString().padStart(2, '0')}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleRegister = () => {
    router.push("/register");
  };

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="page-container">
      
        <header className="header">
          <div className="header-content">
            <div className="header-inner">
              <div className="logo-container">
                <img 
                  src="/sources/logo.png" 
                  alt="Eminence Logo" 
                  className="logo"
                />
              </div>

           
              <nav className="desktop-nav">
                <a href="#timeline" className="nav-link">Timeline</a>
                <a href="#history" className="nav-link">History</a>
                <a href="#contact" className="nav-link">Contact</a>
                <button onClick={handleRegister} className="register-btn">
                  Register
                </button>
              </nav>
 
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="mobile-menu-btn"
              >
                {isMenuOpen ? (
                  <svg className="menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>

 
            {isMenuOpen && (
              <nav className="mobile-nav">
                <div className="mobile-nav-content">
                  <a href="#timeline" className="mobile-nav-link">Timeline</a>
                  <a href="#history" className="mobile-nav-link">History</a>
                  <a href="#contact" className="mobile-nav-link">Contact</a>
                  <button onClick={handleRegister} className="mobile-register-btn">
                    Register
                  </button>
                </div>
              </nav>
            )}
          </div>
        </header>

  
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-grid">
              <div className="hero-text">
                <div className="text-content">
                  <h1 className="main-title">
                    Be the spark of
                    <span className="gradient-text">change!</span>
                  </h1>
                  <p className="subtitle">Get ready to</p>
                  <p className="description">
                    Join us for an extraordinary experience that will ignite innovation and transform ideas into reality.
                  </p>
                </div>
                
                <button onClick={handleRegister} className="hero-cta-btn">
                  Register Now
                </button>
              </div>

              <div className="hero-image">
                <img 
                  src="/sources/pet.png" 
                  alt="Eminence 5.0" 
                  className="pet-image"
                />
              </div>
            </div>
          </div>
        </section>

       
        <section className="countdown-section">
          <div className="countdown-content">
            <h2 className="section-title">Event Countdown</h2>
            <div className="countdown-card">
              <div className="countdown-display">{timeLeft}</div>
              <div className="countdown-labels">
                <div>D</div>
                <div>H</div>
                <div>M</div>
                <div>S</div>
              </div>
            </div>
          </div>
        </section>

       
        <section id="timeline" className="timeline-section">
          <div className="timeline-content">
            <h2 className="section-title">Timeline</h2>
            <div className="timeline-card">
              <img 
                src="/sources/timeline.png" 
                alt="Event Timeline" 
                className="timeline-image"
              />
            </div>
          </div>
        </section>

 
        <section className="download-section">
          <div className="download-content">
            <h2 className="section-title-alt">Get the Details</h2>
            <p className="download-description">
              Download our comprehensive event booklet for complete information.
            </p>
            <a 
              href="/booklet.pdf" 
              target="_blank" 
              rel="noreferrer" 
              className="download-btn"
            >
              <svg className="download-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Booklet
            </a>
          </div>
        </section>

        {/* Past Events Section */}
        <section id="history" className="events-section">
          <div className="events-content">
            <h2 className="section-title">Past Events</h2>
            <div className="events-grid">
              <div className="event-card">
                <div className="event-image-container">
                  <img 
                    src="/sources/champ.jpg" 
                    alt="Championship Event" 
                    className="event-image"
                  />
                </div>
                <div className="event-info">
                  <h3 className="event-title">Championship Event</h3>
                </div>
              </div>
              
              <div className="event-card">
                <div className="event-image-container">
                  <img 
                    src="/sources/b_in.jpg" 
                    alt="Innovation Workshop" 
                    className="event-image"
                  />
                </div>
                <div className="event-info">
                  <h3 className="event-title">Innovation Workshop</h3>
                </div>
              </div>
              
              <div className="event-card">
                <div className="event-image-container">
                  <img 
                    src="/sources/cr.jpg" 
                    alt="Creative Session" 
                    className="event-image"
                  />
                </div>
                <div className="event-info">
                  <h3 className="event-title">Creative Session</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="footer-cta">
          <div className="footer-content">
            <h2 className="footer-title">Ready to Join Us?</h2>
            <p className="footer-description">
              Don't miss out on this incredible opportunity to be part of Eminence 5.0
            </p>
            <button onClick={handleRegister} className="footer-cta-btn">
              Register Now
            </button>
          </div>
        </section>
      </div>

      <style jsx>{`
        .page-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f1f5f9 100%);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(229, 231, 235, 0.5);
        }

        .header-content {
          max-width: 1280px;
          height: 140px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0px;
        }

        .logo {
          height: 150px;
          width: 150px;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .nav-link {
          font-size:20px;
          color: #374151;
          font-weight: 500;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .nav-link:hover {
          color: #7c3aed;
        }

        .register-btn {
        font-size:20px;
          background: #7c3aed;
          color: white;
          padding: 8px 24px;
          border: none;
          border-radius: 9999px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
        }

        .register-btn:hover {
          background: #5b21b6;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          transform: translateY(-1px);
        }

        .mobile-menu-btn {
          display: none;
          padding: 8px;
          color: #374151;
          background: none;
          border: none;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .menu-icon {
          width: 24px;
          height: 24px;
        }

        .mobile-nav {
          border-top: 1px solid rgba(229, 231, 235, 0.5);
          padding: 16px 0;
        }

        .mobile-nav-content {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .mobile-nav-link {
          color: #374151;
          font-weight: 500;
          text-decoration: none;
          padding: 8px 0;
          transition: color 0.2s ease;
        }

        .mobile-nav-link:hover {
          color: #7c3aed;
        }

        .mobile-register-btn {
          background: #7c3aed;
          color: white;
          padding: 12px 24px;
          border: none;
          border-radius: 9999px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: left;
        }

        
        .hero-section {
          padding: 128px 24px 80px;
        }

        .hero-content {
          max-width: 1280px;
          margin: 0 auto;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }

        .text-content {
          margin-bottom: 32px;
        }

        .main-title {
          font-size: 60px;
          font-weight: 700;
          color: #111827;
          line-height: 1.3;
          margin-bottom: 16px;
        }

        .gradient-text {
          background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: block;
          
        }

        .subtitle {
          font-size: 32px;
          font-weight: 600;
          color: #7c3aed;
          margin-bottom: 16px;
        }

        .description {
          font-size: 18px;
          color: #6b7280;
          max-width: 480px;
          line-height: 1.6;
        }

        .hero-cta-btn {
          background: #7c3aed;
          color: white;
          padding: 16px 32px;
          border: none;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 18px;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);
        }

        .hero-cta-btn:hover {
          background: #5b21b6;
          box-shadow: 0 8px 24px rgba(124, 58, 237, 0.4);
          transform: translateY(-2px);
        }

        .hero-image {
          display: flex;
          justify-content: center;
        }

        .pet-image {
          width: 100%;
          max-width: 480px;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.1));
        }
 
        .countdown-section {
          padding: 80px 24px;
          background: rgba(255, 255, 255, 0.5);
        }

        .countdown-content {
          max-width: 1024px;
          margin: 0 auto;
          text-align: center;
        }

        .section-title {
          font-size: 48px;
          font-weight: 700;
          color: #111827;
          margin-bottom: 48px;
        }

        .countdown-card {
          background: white;
          border-radius: 16px;
          padding: 48px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .countdown-display {
          font-family: 'JetBrains Mono', monospace;
          font-size: 64px;
          font-weight: 700;
          color: #7c3aed;
          letter-spacing: 40px;
        }

        .countdown-labels {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0px;
          margin-top: 24px;
          font-size: 20px;
          font-weight: 500;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 8px;
        }
 
        .timeline-section {
          padding: 80px 24px;
        }

        .timeline-content {
          max-width: 1152px;
          margin: 0 auto;
          text-align: center;
        }

        .timeline-card {
          background: white;
          border-radius: 16px;
          padding: 48px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .timeline-image {
          width: 100%;
          height: auto;
          object-fit: contain;
          max-width: 1024px;
        }
 
        .download-section {
          padding: 80px 24px;
          background: rgba(255, 255, 255, 0.5);
        }

        .download-content {
          max-width: 1024px;
          margin: 0 auto;
          text-align: center;
        }

        .section-title-alt {
          font-size: 48px;
          font-weight: 700;
          color: #111827;
          margin-bottom: 32px;
        }

        .download-description {
          font-size: 18px;
          color: #6b7280;
          margin-bottom: 32px;
          line-height: 1.6;
        }

        .download-btn {
          display: inline-flex;
          align-items: center;
          background: #7c3aed;
          color: white;
          padding: 16px 32px;
          border-radius: 9999px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);
        }

        .download-btn:hover {
          background: #5b21b6;
          box-shadow: 0 8px 24px rgba(124, 58, 237, 0.4);
          transform: translateY(-2px);
        }

        .download-icon {
          width: 20px;
          height: 20px;
          margin-right: 8px;
        }

        /* Events Section */
        .events-section {
          padding: 80px 24px;
        }

        .events-content {
          max-width: 1152px;
          margin: 0 auto;
        }

        .events-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
        }

        .event-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .event-card:hover {
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
          transform: translateY(-4px);
        }

        .event-image-container {
          overflow: hidden;
        }

        .event-image {
          width: 100%;
          height: 256px;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .event-card:hover .event-image {
          transform: scale(1.05);
        }

        .event-info {
          padding: 24px;
        }

        .event-title {
          font-weight: 600;
          color: #111827;
          margin: 0;
        }
 
        .footer-cta {
          height:380px;
          padding: 80px 24px;
          background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%);
        }

        .footer-content {
          max-width: 1024px;
          height: 160px;
          margin: 0 auto;
          text-align: center;
          color: white;
        }

        .footer-title {
          font-size: 64px;
          font-weight: 700;
          margin-bottom: 24px;
           
        }

        .footer-description {
          font-size: 20px;
          margin-bottom: 32px;
          opacity: 0.9;
          line-height: 1.6;
        }

        .footer-cta-btn {
          background: white;
          color: #7c3aed;
          padding: 16px 32px;
          border: none;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 18px;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .footer-cta-btn:hover {
          background: #f9fafb;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
          transform: translateY(-2px);
        }
 
        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }
        .logo
        {
          width: 120px;
          height: 120px;
        }
          .mobile-menu-btn {
            display: block;
          }
            header
            {
            height:110px;
            }

          .hero-grid {
            grid-template-columns: 1fr;
            gap: 32px;
            text-align: center;
          }

          .main-title {
            font-size: 40px;
          }

          .subtitle {
            font-size: 24px;
          }

          .section-title,
          .section-title-alt {
            font-size: 32px;
          }

          .footer-title {
            font-size: 40px;
          }

          .countdown-display {
            font-size: 40px;
          }

          .countdown-card {
            padding: 32px 16px;
          }

          .timeline-card {
            padding: 24px;
          }
        }

        @media (max-width: 480px) {
          .main-title {
            font-size: 32px;
          }

          .countdown-display {
            font-size: 32px;
            letter-spacing: 10px;
          }

          .events-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        
        html, body {
          margin: 0;
          padding: 0;
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
}