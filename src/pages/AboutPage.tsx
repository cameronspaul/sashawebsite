import React from 'react';
import { Helmet } from 'react-helmet-async';
import './AboutPage.css'; // Create this next

// Import actual images
import aboutPic1 from '../assets/istockphoto-1279483477-612x612.jpg';
import aboutPic2 from '../assets/istockphoto-2156503499-612x612.jpg';

const AboutPage: React.FC = () => {
  return (
    <div className="about-page content-section"> {/* Reuse content-section for padding/max-width */} 
      <Helmet>
        <title>About Us | Me & Mrs Jones | Vocals & Vinyl Duo</title>
        <meta name="description" content="Learn more about Me & Mrs Jones, the professional female duo combining live vocals and vinyl DJ sets for unique and memorable event entertainment." />
      </Helmet>

      <h2>About Me & Mrs Jones</h2>
      
      <div className="about-content">
        <div className="about-text">
          <h3>Our Story</h3>
          <p>
            Founded from a shared passion for music that moves you, Me & Mrs Jones started with a simple idea: combine the raw energy of live vocals with the infectious groove of expertly curated vinyl sets. We saw a gap for event entertainment that was both professional and packed with personality.
          </p>
          <h3>Experience & Passion</h3>
          <p>
            With years of experience performing at weddings, parties, and corporate events, we pride ourselves on our versatility and ability to read the room. From soulful melodies during dinner to high-energy dance anthems that fill the floor, our mission is to create the perfect soundtrack for your most memorable moments. We love connecting with audiences and bringing that unique "Me & Mrs Jones" vibe to every celebration.
          </p>
          <h3>More Than Just Music</h3>
          <p>
            We believe in reliability, clear communication, and working closely with you to understand your vision. Let's make your event truly special!
          </p>
        </div>
        
        <div className="about-images">
          {/* Use imported images */}
          <img src={aboutPic1} alt="Me & Mrs Jones performing at an event" />
          <img src={aboutPic2} alt="Me & Mrs Jones DJ setup with vinyl" />
          {/* <div className="img-placeholder">Image Placeholder 1</div>
          <div className="img-placeholder">Image Placeholder 2</div> */}
        </div>
      </div>

    </div>
  );
};

export default AboutPage; 