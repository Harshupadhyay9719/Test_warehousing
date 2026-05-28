import '../styles/landing.css';

export default function Landing({ onGetStarted }) {
  return (
    <main className="landing-page">
      {/* Simplified background without extra decorative blobs */}



      <section className="landing-hero">
        <video autoPlay muted loop className="landing-hero-video">
          <source src="https://res.cloudinary.com/dz01d7fue/video/upload/v1779867571/warehouses_jazflb.mp4" type="video/mp4" />
        </video>
        <button className="login-cta top-right" onClick={onGetStarted}>Login / Sign Up</button>
        <div className="landing-hero-overlay"></div>
        <div className="landing-hero-content">
          <h1>Shape the Future of <span className="gradient-text">Indian Warehousing</span></h1>
          <p className="landing-subtitle">
            Your insights matter. Help shape policy and industry strategy through our comprehensive survey.
          </p>
          <button className="landing-cta" onClick={onGetStarted}>
            Get Started →
          </button>
        </div>
      </section>

      <section className="landing-info">
        <div className="landing-container">
          <h2>Why Your Input Matters</h2>
          <p className="landing-description">
            The India Warehousing Ecosystem Survey 2026 is a structured research initiative designed to capture stakeholder insights across the warehousing and logistics sector.
          </p>

          <div className="landing-grid">
            <div className="landing-card glass-effect">
              <div className="landing-card-icon icon-comprehensive">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M2 12h20M7 7l10 10M17 7l-10 10"></path>
                </svg>
              </div>
              <h3>Comprehensive Coverage</h3>
              <p>75 carefully crafted questions across 15 focused sections covering everything from current state to future outlook.</p>
            </div>

            <div className="landing-card glass-effect">
              <div className="landing-card-icon icon-quick">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3>Quick to Complete</h3>
              <p>Estimated time: 10-15 minutes. Save your progress anytime and continue later from where you left off.</p>
            </div>

            <div className="landing-card glass-effect">
              <div className="landing-card-icon icon-secure">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <path d="M9 12l2 2 4-4"></path>
                </svg>
              </div>
              <h3>Confidential & Secure</h3>
              <p>Your responses are strictly confidential. Data is secure and used only for this research initiative.</p>
            </div>

            <div className="landing-card glass-effect">
              <div className="landing-card-icon icon-rolebase">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3>Role-Based Experience</h3>
              <p>Answer questions relevant to your role: Warehouse Operators, FMCG, E-commerce, Logistics, Government, and more.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="landing-topics">
        <div className="landing-container">
          <h2>What We're Exploring</h2>
          <div className="landing-topics-grid">
            <div className="landing-topic glass-effect">
              <div className="landing-topic-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 12h18M3 6h18M3 18h18"></path>
                  <rect x="1" y="1" width="22" height="22" rx="2"></rect>
                </svg>
              </div>
              <span className="landing-topic-number">01</span>
              <h4>Current State & Operations</h4>
            </div>
            <div className="landing-topic glass-effect">
              <div className="landing-topic-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 17"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
              </div>
              <span className="landing-topic-number">02</span>
              <h4>Business Scale & Growth</h4>
            </div>
            <div className="landing-topic glass-effect">
              <div className="landing-topic-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="1"></circle>
                  <path d="M12 1v6m6.66.34l-4.24 4.24M23 12h-6m-.34 6.66l-4.24-4.24M12 23v-6m-6.66-.34l4.24-4.24M1 12h6m.34-6.66l4.24 4.24"></path>
                </svg>
              </div>
              <span className="landing-topic-number">03</span>
              <h4>Technology Adoption</h4>
            </div>
            <div className="landing-topic glass-effect">
              <div className="landing-topic-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"></path>
                </svg>
              </div>
              <span className="landing-topic-number">04</span>
              <h4>Challenges & Bottlenecks</h4>
            </div>
            <div className="landing-topic glass-effect">
              <div className="landing-topic-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <span className="landing-topic-number">05</span>
              <h4>Sustainability & Green</h4>
            </div>
            <div className="landing-topic glass-effect">
              <div className="landing-topic-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                  <polyline points="13 2 13 9 20 9"></polyline>
                  <line x1="9" y1="15" x2="15" y2="15"></line>
                  <line x1="9" y1="11" x2="15" y2="11"></line>
                </svg>
              </div>
              <span className="landing-topic-number">06</span>
              <h4>Future Outlook</h4>
            </div>
          </div>
        </div>
      </section>

      <footer className="landing-footer glass-effect">
        <div className="landing-container">
          <p>&copy; 2026 India Warehousing Ecosystem Survey. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
