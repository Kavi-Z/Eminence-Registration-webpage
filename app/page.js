"use client";
//aug 9  aug 23   sep13

import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { FaFacebook, FaLinkedin } from 'react-icons/fa';

export function FadeInSection({ children }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}


export default function HomePage() {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isWhyOpen, setIsWhyOpen] = useState(false);
  const contentRef = useRef(null);
 
const questions = [
  {
    id: 'why',
    title: 'Why Eminence?',
    content: 'Eminence 5.0 is an engaging event designed to expand students knowledge across diverse domains such as Telecommunication Engineering, Electrical Engineering, Artificial Intelligence, and more. It provides a vibrant platform for exploring emerging technologies, sharing ideas, and deepening understanding through interactive sessions and activities.'
  },
 
  {
    id: 'who',
    title: 'Who can participate?',
    content: 'Students from all universities and colleges are welcome to participate. Whether you\'re a beginner or an expert, there\'s something for everyone at Eminence 5.0.'
  },
   {
    id: 'what',
    title: 'What is the context of Eminence 5.0?',
    content: 'Eminence 5.0 is a multi-phase event where participants attend three curated webinars and then apply their insights to complete a dedicated task. The final event showcases these outcomes, giving participants a platform to present their ideas and creativity.'
  },
  {
    id: 'when',
    title: 'When is the event?',
    content: 'Eminence 5.0 will be held on 4th week of September. Specific dates and schedule will be announced soon.'
  }
];


const [openQuestions, setOpenQuestions] = useState({});
const toggleQuestion = (questionId) => {
  setOpenQuestions(prev => ({
    ...prev,
    [questionId]: !prev[questionId]
  }));
};

  useEffect(() => {
    if (contentRef.current) {
      if (isWhyOpen) {
        contentRef.current.style.maxHeight = contentRef.current.scrollHeight + "px";
        contentRef.current.style.opacity = "1";
      } else {
        contentRef.current.style.maxHeight = "0px";
        contentRef.current.style.opacity = "0";
      }
    }
  }, [isWhyOpen]);

  useEffect(() => {
    window.scrollTo(0, 0);

     
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const targetDate = new Date("2025-08-20T09:00:00");
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
    return () => {
      clearInterval(timer);
      clearTimeout(loadingTimer);
    };
  }, []);
 
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);
const handleRegister = () => {
  window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSdYg7dxU2CpqEHDX826S8LRb_GYwRIFwLBnTlJEYE8Ge-PvjA/viewform?usp=dialog";
};

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-content">
          <div className="loading-logo">
            <img src="/sources/logo.png" alt="Eminence Logo" className="loading-logo-img" />
          </div>
          <div className="loading-spinner">
            <div className="spinner"></div>
          </div>
          <p className="loading-text">Loading Eminence 5.0...</p>
        </div>
        
        <style jsx>{`
          .loading-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
          }

          .loading-content {
          font-family: 'Inter', sans-serif;
            text-align: center;
            color: white;
          }

          .loading-logo {
            margin-bottom: 32px;
          }

          .loading-logo-img {
            width: 120px;
            height: 120px;
            filter: brightness(0) invert(1);
          }

          .loading-spinner {
            margin-bottom: 24px;
          }

          .spinner {
            width: 40px;
            height: 40px;
            border: 4px solid rgba(255, 255, 255, 0.3);
            border-top: 4px solid white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto;
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          .loading-text {
            font-size: 18px;
            font-weight: 500;
            opacity: 0.9;
            margin: 0;
          }
        `}</style>
      </div>
    );
  }

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
                  <a href="#timeline" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Timeline</a>
                  <a href="#history" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>History</a>
                  <a href="#contact" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Contact</a>
                  <button onClick={handleRegister} className="mobile-register-btn">
                    Register
                  </button>
                </div>
              </nav>
            )}
          </div>
        </header>

        <div className="main-content">

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
                    <p className="description_head">
                      Join us for an extraordinary experience that will ignite innovation and transform ideas into reality.
                    </p>
                  </div>
                  
                  <button onClick={handleRegister} className="hero-cta-btn">
                    Register Now
                  </button>
                </div>

                <div className="hero-image">
                 <img src="/sources/pet.png" alt="Eminence 5.0" className="pet-image" />

                  
                </div>
              </div>
            </div>
          </section>

<section className="about-eminence">
  <div className="about-container">
    <div className="about-left">
      <h2 className="left-title">What is Eminence?</h2>
    </div>


    <div className="about-right">
       
      <p className="description">
        Eminence 5.0 is a premier event organized by the&nbsp;
        <span className="gradient-text">WIE Affinity Group of IEEE Student Branch University of Ruhuna. </span> 
        <span className="mid-text">
          &nbsp;This event brings together innovators, engineers, and tech enthusiasts to celebrate technology, creativity, and excellence.
        </span>
      </p>
    </div>
  </div>
</section>

<section className="faq-section">
  {questions.map((question) => {
    const isOpen = openQuestions[question.id];
    
    return (
      <div key={question.id} className="faq-container">
        <div
          className="question-header"
          onClick={() => toggleQuestion(question.id)}
        >
          <h2 className="question-title">
            {question.title}
          </h2>
          <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>
            ▼
          </span>
        </div>

        <div className={`dropdown-content ${isOpen ? 'open' : 'closed'}`}>
          <p className={`question-description ${isOpen ? 'open' : 'closed'}`}>
            {question.content}
          </p>
        </div>
      </div>
    );
  })}
</section>






          <section className="countdown-section">
            <div className="countdown-content">
              <h2 className="section-title">Event Countdown</h2>
              <div className="countdown-card">
              <div className="countdown-timer-wrapper">
  <div className="countdown-display">{timeLeft}</div>
  <div className="countdown-labels">
    <div>D</div>
    <div>H</div>
    <div>M</div>
    <div>S</div>
  </div>
</div>
            </div>
            </div>
          </section>

    <section id="timeline" className="timeline-section">
  <div className="timeline-content">
    <h2 className="section-title2">Timeline</h2>
    <div className="timeline-grid">
      {[
        { title: '01.Awareness Session', date: 'Aug 09' },
        {},
        {},
        { title: '02.Registration Opens', date: 'Aug 12' },
        { title: '03.Webinar 1 (Packet Tracer)', date: 'Aug 23' },
        {},
        {},
        { title: '04.Webinar 2 (MATLAB)', date: 'Sep 13' },
        { title: '05.Webinar 3 (AI)', date: 'Sep 3rd week' },
        {},
        {},
        { title: '06.Registration (Competition)', date: 'Sep 3rd week' },
        { title: '07.Proposals Submissions', date: 'Sep 3rd week' },
        {},
        {},
        { title: '08.Main Event', date: 'Sep 4th week' }
      ].map((event, index) => {
        const isVisible = event.title && event.title.trim() !== '';
        return (
          <div
            key={index}
            className={`timeline-box ${index % 2 === 0 ? 'col-1' : 'col-2'} ${
              !isVisible ? 'invisible-box' : ''
            }`}
          >
            {isVisible && (
              <>
                <div className="event-title">{event.title}</div>
                {event.date && <div className="event-date">{event.date}</div>}
              </>
            )}
          </div>
        );
      })}
    </div>
  </div>
</section>





          <section className="download-section">
            <div className="download-content">
              <h2 className="section-title-alt">Get the Details</h2>
              <p className="download-description">
                Download the comprehensive delegate booklet for complete information.
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

          <section id="history" className="events-section">
            <div className="events-content">
              <h2 className="section-title">Eminence 4.0</h2>
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
                    <h3 className="event-title2">Champions</h3>
                  </div>
                </div>
                
                <div className="event-card">
                  <div className="event-image-container">
                    <img 
                      src="/sources/1str.jpg" 
                      alt="Innovation Workshop" 
                      className="event-image"
                    />
                  </div>
                  <div className="event-info">
                    <h3 className="event-title2">1ˢᵗ Runner Up</h3>
                  </div>
                </div>
                
                <div className="event-card">
                  <div className="event-image-container">
                    <img 
                      src="/sources/2ndr.jpg" 
                      alt="Creative Session" 
                      className="event-image"
                    />
                  </div>
                  <div className="event-info">
                    <h3 className="event-title2">2ⁿᵈ Runner Up</h3>
                  </div>
                </div>
                
                 <div className="event-card">
                  <div className="event-image-container">
                    <img 
                      src="/sources/b_in.jpg" 
                      alt="Creative Session" 
                      className="event-image"
                    />
                  </div>
                  <div className="event-info">
                    <h3 className="event-title2">Best Innovation</h3>
                  </div>

                

                </div>

                  <div className="event-card">
                  <div className="event-image-container">
                    <img 
                      src="/sources/award.jpg" 
                      alt="Creative Session" 
                      className="event-image"
                    />
                  </div>
                  <div className="event-info">
                    <h3 className="event-title2">Best Affinity Group Project Award</h3>
                  </div>

                

                </div>
                
                 <div className="event-card">
                  <div className="event-image-container">
                    <img 
                      src="/sources/emi23.jpg" 
                      alt="Creative Session" 
                      className="event-image"
                    />
                  </div>
                  <div className="event-info">
                    <h3 className="event-title2">The DARREL CHONG Student Activity Bronze Award</h3>
                  </div>

                

                </div>
              </div>
            </div>
          </section>

<section id="contact"  className="More-detais">
  <div className="more-details-content">
    <h2 className="section-title">More Details</h2>
    <p className="description">
      For more information about Eminence 5.0, please contact 
    </p>

    <div className="contacts-grid">
       <div className="contact-item">
        <h3 className="gradient-text">Samudyani Dilakshika</h3>
           <p>(Vice Chair)</p>
        <h2>071 994 9884</h2>
      </div>
      <div className="contact-item">
        <h3 className="gradient-text">Subhani Harshani</h3> 
        <p>(CO-Chair)</p>
        <h2>077 930 7650</h2>
      </div>
      <div className="contact-item">
        <h3 className="gradient-text">Punsara Sewwandi</h3>
           <p>(CO-Chair)</p>
        <h2>076 296 5008</h2>
      </div>
      <div className="contact-item">
        <h3 className="gradient-text">Thanujaya Thennakoon</h3>
           <p>(Program Team Lead)</p>
        <h2>076 325 3332</h2>
      </div>
     
    </div>
  </div>
</section>


        <section className="footer-cta">
        
  <div className="footer-content">
    <h2 className="footer-title">Ready to Join With Us?</h2>
    <p className="footer-description">
      Don't miss out on this incredible opportunity to be part of Eminence 5.0
    </p>
    <button onClick={handleRegister} className="footer-cta-btn">
      Register Now
    </button>

   
<div className="footer-social-icons">
  <a href="https://www.facebook.com/share/16bEm9hVGp/" target="_blank" rel="noopener noreferrer">
    <FaFacebook className="footer-icon" />
  </a>
  <a href="https://www.linkedin.com/showcase/ieee-women-in-engineering-society-university-of-ruhuna/" target="_blank" rel="noopener noreferrer">
    <FaLinkedin className="footer-icon" />
  </a>
</div>


  </div>
</section>
        </div>
      </div>
    
      <style jsx>{`
      
        .page-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f1f5f9 100%);
          // font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
             font-family: 'Lemonmilk', sans-serif;
        }

        .main-content {
          transition: filter 0.3s ease;
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
          font-size: 20px;
          color: #374151;
          font-weight: 500;
          text-decoration: none;
          transition: color 0.2s ease;
        }
         
        .nav-link:hover {
          color: #7c3aed;
        }

        .register-btn {
          font-size: 20px;
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
          position: relative;
          z-index: 60;
        }

        .menu-icon {
          width: 24px;
          height: 24px;
        }
        :root {
  --bg-light: #f9fafb;
  --text-main: #1f2937;
  --text-sub: #374151;
  --gradient-start: #6366f1;
  --gradient-end: #a855f7;
  --max-width: 800px;
  --padding-section: 4rem 1.5rem;
  --font-main: 'Inter', 'Segoe UI', sans-serif;
}

.about-eminence {
  background-color: var(--bg-light);

  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  font-family: var(--font-main);
  padding: var(--padding-section);
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
  .description_head
  {
    font-size: 15px;
    color: #6b7280;
    max-width: 800px;
  }

.about-container {
  display: flex;
  flex-direction: row;
  padding: 0 1.5rem;
  gap: 5rem;
  width: 100%;
  max-width: 1200px;
  
  align-items: center;
  justify-content: space-between;
  
}

.about-left,
.about-right {
  flex: 1;
 
}


.left-title {
   font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--text-main);
}
  

.section-title {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 1rem;
  
}




.gradient-text {
  background: linear-gradient(to right, var(--gradient-start), var(--gradient-end));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
}



.section-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  color: var(--text-main);
}

.description {
font-size: 20px;
          color: #6b7280;
          max-width: 2048px;
          margin-bottom: 32px;
          line-height: 1.6;
          padding-left: 2px;
          left: 10px;
          text-align: center;
}

.gradient-text {
  background: linear-gradient(to right, var(--gradient-start), var(--gradient-end));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
}
 
.faq-section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 2rem 1rem;
}

.faq-container {
  margin-bottom: 1rem;
  max-width: 600px;
  width: 100%;
}

.question-header {
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 10px;
  justify-content: center;
  padding: 1rem;
  background-color: transparent;
  border-radius: 8px;
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
  
}

 
.question-title {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
}

.dropdown-arrow {
  transition: transform 0.3s ease;
  font-size: 20px;
  color: #666;
}

.dropdown-arrow.open {
  transform: rotate(180deg);
}

.dropdown-content {
  overflow: hidden;
  transition: max-height 0.4s ease-in-out, opacity 0.3s ease;
}

.dropdown-content.closed {
  max-height: 0;
  opacity: 0;
}

.dropdown-content.open {
  max-height: 200px;
  opacity: 1;
}

.question-description {
  margin: 1rem 0 0 0;
  padding: 0.5rem 1rem;
  transition: transform 0.3s ease;
  text-align: center;
  color: #555;
  line-height: 1.6;
}

.question-description.closed {
  transform: translateY(-10px);
}

.question-description.open {
  transform: translateY(0);
}
 
@media (max-width: 768px) {
  .faq-section {
    padding: 1rem 0.5rem;
  }
  
  .question-header {
    padding: 0.8rem;
  }
  
  .question-title {
    font-size: 1.1rem;
  }
  
  .faq-container {
    max-width: 100%;
  }
}
 
.question-header:active {
  transform: translateY(1px);
}

.dropdown-content.open {
  animation: slideDown 0.4s ease-in-out;
}

@keyframes slideDown {
  from {
    max-height: 0;
    opacity: 0;
  }
  to {
    max-height: 200px;
    opacity: 1;
  }
}
        .mobile-nav {
          position: fixed;
          top: 110px;
          left: 0;
          width: 100%;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(229, 231, 235, 0.5);
          z-index: 55;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          animation: slideDown 0.3s ease;
        }
          

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .mobile-nav-content {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 24px;
        }

        .mobile-nav-link {
          color: #374151;
          font-weight: 500;
          font-size: 18px;
          text-decoration: none;
          padding: 12px 0;
          transition: color 0.2s ease;
          border-bottom: 1px solid rgba(229, 231, 235, 0.3);
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
          font-size: 16px;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 2px 8px rgba(124, 58, 237, 0.3);
          margin-top: 8px;
        }

        .mobile-register-btn:hover {
          background: #5b21b6;
          box-shadow: 0 4px 16px rgba(124, 58, 237, 0.4);
          transform: translateY(-1px);
        }
          .Question-section {
  margin-top: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
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

        .description1 {
          font-size: 18px;
          color: #6b7280;
          max-width: 610px;
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
  opacity: 0;
  transform: translateY(30px);
  animation: imageEntrance 0.8s ease-out forwards;
}

@keyframes imageEntrance {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

  }
}
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
  display: grid;
  grid-template-columns: repeat(1, minmax(60px, 1fr));
  justify-content: center;
  text-align: center;
  row-gap: 8px;
  column-gap: 0px; 
  padding: 48px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.countdown-timer-wrapper {
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, auto);
  justify-content: center;
  gap: 60px;
  font-family: 'Lemonmilk', sans-serif;
}
     .countdown-display {
  grid-column: 1 / 5;
  font-size: 64px;
  font-weight: 700;
  color: #7c3aed;
  letter-spacing: 10px;  
  text-align: center;
}

.countdown-labels {
  display: contents;  
  position: relative; 
  margin-top: 8px;
}
.countdown-labels > div {
  grid-column: auto;
  justify-self: center;
  font-size: 20px;
  font-weight: 500;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0px;
  
}

 .timeline-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 40px;
  column-gap: 20px;
  padding-inline: 40px;  
  margin-top: 2rem;
  
}
  .invisible-box {
  background: transparent;
  box-shadow: none;
  pointer-events: none;
  visibility: hidden;
}
  .section-title2{
  font-size: 36px;
  text-align: center;
  padding: 40px;
  font-weight: 700;
  color: #111827;
  }
 
.timeline-box {
  background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%);
  padding: 20px;
  border-radius: 16px;
  height: auto; /* allow content to grow */
  width: 80%;
  display: flex;
  flex-direction: column; /* stack title and date */
  align-items: flex-start; /* align to left or use center if preferred */
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
  color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
}



.timeline-box:hover {
  transform: translateY(-4px);
}

.col-1 {
  grid-column: 1;
  justify-self: start;
}

.col-2 {
  grid-column: 2;
  justify-self: end;
}

.event-title {
  color: white !important;
  font-size: 1.5rem;
  align-self: center;
  margin-bottom: 8px;
}
.event-title2{
  color: #6b7280;
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 8px;
}

.event-date {
  color: white !important;
  align-self: center;
  padding: 10px 8px;
  gap: 8px;
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
          text-align: center;
          color: #111827;
          margin: 0;
        }

        .More-detais {
  padding: 40px 20px;
  max-width: 900px;
  margin: 0 auto;
}

.more-details-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 12px;
}

.description {
  font-size: 1rem;
  color: #6b7280;
  max-width: 600px;
  line-height: 1.6;
  margin-bottom: 24px;
}
 
.contacts-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  width: 100%;
  max-width: 1000px;
}
 
@media (max-width: 768px) {
  .timeline-grid {
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding-inline: 20px;
  }

  .col-1,
  .col-2 {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .timeline-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 16px;
    box-sizing: border-box;
  }
    .invisible-box {
    display: none !important;
  }

  .event-title {
    font-size: 1.25rem;
    text-align: center;
  
  }

  .event-date {
    font-size: 0.95rem;
    text-align: center;
  }

  .section-title2 {
    font-size: 28px;
    padding: 24px;
    text-align: center;
    width: 100%;
  }
 
  .timeline-line,
  .timeline-dot,
  .timeline-connector {
    display: none !important;
    position: absolute;
    width: 0;
    height: 0;
    overflow: hidden;
    pointer-events: none;
  }
}

@media (max-width: 600px) {
  .contacts-grid {
    grid-template-columns: 1fr;
  }
}

 
.contact-item h2 {
  font-size: 1.5rem;
  margin-top: 4px;
  font-weight: 500;
  color: #374151;
}
  

          

        .footer-cta {
          height: 500px;
          padding: 80px 24px;
          background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%);
        }

        .footer-content {
          max-width: 1024px;
          height: 200px;
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
        .footer-social-icons a {
  color: white;  
  margin: 0 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;  
  width: 48px;
  height: 78px;
  font-size: 1.9rem;
  text-decoration: none;  
  transition: transform 0.3s ease-in-out;
}



.footer-icon {
  font-size: 2.8rem;
  transition: transform 0.3s ease-in-out;
  animation: iconAppear 0.6s ease-in-out;
}

.footer-social-icons a:hover {
  transform: scale(1.2);
}


        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }
            .about-container {
    flex-direction: column;
    text-align: center;
  }
  
  .about-left,
  .about-right {
    width: 100%;
    
  }

          .logo {
            width: 120px;
            height: 120px;
          }

          .mobile-menu-btn {
            display: block;
          }

          .header {
            height: 110px;
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
 .footer-content {
          max-width: 1024px;
          height: 0px;
          margin: 0 auto;
          text-align: center;
          color: white;
        }
            .countdown-display {
  grid-column: 1 / 5;
  font-size: 30px;
  font-weight: 700;
  color: #7c3aed;
  letter-spacing: 8px;  
  text-align: center;
}
           

          .countdown-card {
            padding: 32px 16px;

          }
         
 
         .countdown-card {
   grid-column: 1 / 5;
  font-size: 64px;
  font-weight: 700;
  color: #7c3aed;
  letter-spacing: 10px;  
  text-align: center;
}
     
          .timeline-card {
            padding: 24px;
          }
        }

        @media (max-width: 480px) {
          .main-title {
            font-size: 32px;
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