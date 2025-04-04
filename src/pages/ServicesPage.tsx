import React from 'react';
import './ServicesPage.css'; // Create this next
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// Potential icons (example - could use FontAwesome or SVGs)
// const MicIcon = () => <span>🎤</span>; 
// const VinylIcon = () => <span>🎧</span>; 
// const CalendarIcon = () => <span>📅</span>; 
// const MusicNoteIcon = () => <span>🎵</span>; 

const ServicesPage: React.FC = () => {
  return (
    <div className="services-page content-section">
      <Helmet>
        <title>Our Services | Me & Mrs Jones | Live Vocals & DJ Packages</title>
        <meta name="description" content="Explore the services offered by Me & Mrs Jones: captivating live vocal performances, expert vinyl DJ sets, and the unique synergy perfect for weddings, parties, and events." />
      </Helmet>

      <h2>Our Services</h2>
      
      <div className="service-intro">
        <p>
          Me & Mrs Jones offer a unique fusion of live vocal artistry and expert vinyl DJing, designed to create the perfect atmosphere for any celebration. We tailor our performance to your event, ensuring a seamless flow of music that resonates with you and your guests.
        </p>
      </div>

      <div className="service-details">
        <div className="service-item">
          {/* <MicIcon /> */}<h3>Live Vocal Performances</h3>
          <p>
            Experience the energy and emotion of live music. Our vocal sets cover a wide range of genres, from soulful classics perfect for dinner or cocktail hours to upbeat anthems that get the party started. We pride ourselves on powerful vocals and engaging stage presence.
          </p>
        </div>
        
        <div className="service-item">
          {/* <VinylIcon /> */}<h3>Expert Vinyl DJ Sets</h3>
          <p>
            Keep the energy high with curated DJ sets spun on vinyl. We specialize in reading the crowd and mixing tracks across decades – Rock, Soul, Disco, 80s Rare Groove, Rave classics, and more. Expect seamless transitions and a packed dance floor.
          </p>
        </div>

        <div className="service-item">
          {/* <MusicNoteIcon /> */}<h3>Unforgettable Synergy</h3>
          <p>
            The real magic happens when live vocals meet the DJ booth. We can weave live vocal highlights into DJ sets or structure the evening with distinct performance blocks, creating a dynamic and varied entertainment experience unlike any other.
          </p>
        </div>
      </div>

      <div className="event-types">
        <h3>Perfect For Any Occasion</h3>
        <ul>
          <li>Weddings</li>
          <li>Milestone Birthdays</li>
          <li>Anniversaries</li>
          <li>Corporate Parties</li>
          <li>Festivals & Public Events</li>
          <li>...and any celebration needing a special touch!</li>
        </ul>
      </div>
      
      <div className="cta-section">
          <p>Ready to discuss how Me & Mrs Jones can elevate your event?</p>
          <Link to="/booking" className="btn btn-primary">Request a Quote</Link>
      </div>

    </div>
  );
};

export default ServicesPage; 