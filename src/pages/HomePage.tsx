import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './HomePage.css'; // We will create this next

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <Helmet>
        <title>Me & Mrs Jones | Live Vocals & Vinyl DJ | UK Event Entertainment</title>
        <meta name="description" content="Book Me & Mrs Jones, the dynamic female duo offering live vocals and expert vinyl DJ sets for weddings, parties, and events across the UK. Rock, Soul, Disco, 80s & more!" />
      </Helmet>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Your Celebration, Elevated: Soulful Vocals, Killer Tracks.</h1>
          <p className="hero-intro">
            Me & Mrs Jones bring a unique blend of live performance and expert DJ sets to make your special event unforgettable.
          </p>
          <Link to="/booking" className="btn btn-primary hero-cta">
            Book Your Date
          </Link>
        </div>
      </section>

      {/* Other Sections */}
      <section className="content-section about-snippet">
        <h2>Who Are Me & Mrs Jones?</h2>
        <p>
A dynamic duo bringing soulful vocals and killer vinyl DJ sets to celebrations across the UK. We're not just performers; we're curators of unforgettable party atmospheres.
        </p>
        <Link to="/about" className="btn btn-secondary">Learn Our Story</Link>
      </section>

      <section className="content-section services-overview">
        <h2>What We Do</h2>
        <div className="service-items"> {/* Use flex/grid later */} 
          <div>
            <h3>Live Vocal Sets</h3>
            <p>Captivating live performances covering soul, disco, rock, and more.</p>
          </div>
          <div>
            <h3>Expert Vinyl DJing</h3>
            <p>Seamless mixes spanning decades, keeping the dance floor alive.</p>
          </div>
          <div>
            <h3>The Perfect Blend</h3>
            <p>Unique synergy of live energy and curated playlists for any event.</p>
          </div>
        </div>
        <Link to="/services" className="btn btn-secondary">Explore Services</Link>
      </section>

      <section className="content-section genre-highlights">
        <h2>Music For Every Mood</h2>
        {/* Visually appealing showcase - Placeholder text for now */}
        <p>Rock | Soul | Disco | 80s Rare Groove | Rave Anthems & More</p>
        {/* Add icons or small images later? */}
      </section>

      <section className="content-section testimonials">
        <h2>What Our Clients Say</h2>
        {/* Placeholder - Client to provide content */}
        <div className="testimonial-item">
          <p>"Absolutely fantastic! Made our wedding night truly special."</p>
          <span>- Happy Couple</span> 
        </div>
         <div className="testimonial-item">
          <p>"Professional, fun, and the music selection was spot on!"</p>
          <span>- Event Planner</span> 
        </div>
      </section>

      <section className="content-section final-cta">
        <h2>Ready to Elevate Your Event?</h2>
        <p>Let Me & Mrs Jones provide the ultimate soundtrack for your celebration.</p>
        <Link to="/booking" className="btn btn-primary">Get Your Quote Today</Link>
      </section>

    </div>
  );
};

export default HomePage; 