import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './PackagesPage.css'; // Create this next

const PackagesPage: React.FC = () => {
  return (
    <div className="packages-page content-section">
      <Helmet>
        <title>Packages & Pricing | Me & Mrs Jones | Event Entertainment</title>
        <meta name="description" content="View standard packages and pricing for Me & Mrs Jones event entertainment. Options for live vocals, DJ sets, and combined performances. Custom quotes available." />
      </Helmet>

      <h2>Packages & Pricing</h2>
      
      <div className="packages-intro">
        <p>
          We offer several packages designed to suit different event styles and durations. We're also happy to create a custom quote based on your unique requirements. All packages feature the signature Me & Mrs Jones blend of live vocals and vinyl DJing.
        </p>
      </div>

      <div className="packages-grid">
        {/* Package 1 */}
        <div className="package-item">
          <h3>The "Sparkle" Set</h3>
          <p className="package-description">Ideal for cocktail hours, shorter events, or feature moments.</p>
          <ul>
            <li>Duration: Approx. 1.5 hours</li>
            <li>Content: Blend of live vocal highlights + curated DJ background music</li>
            {/* Add more specifics here */}
          </ul>
          <p className="package-pricing">Starting from $XXX</p>
          <Link to="/booking?package=sparkle" className="btn btn-secondary">Inquire About This Package</Link>
        </div>

        {/* Package 2 */}
        <div className="package-item main-package">
          <span className="popular-badge">Most Popular</span>
          <h3>The "Main Event" Groove</h3>
          <p className="package-description">Our core offering for standard receptions and parties.</p>
          <ul>
            <li>Duration: Approx. 4 hours</li>
            <li>Content: 1 Hour Live Vocal Set (Dinner/Cocktail) + 3 Hours High-Energy DJ Set</li>
            <li>Includes: Standard Sound System</li>
          </ul>
          <p className="package-pricing">Starting from $YYY</p>
          <Link to="/booking?package=mainevent" className="btn btn-primary">Inquire About This Package</Link>
        </div>

        {/* Package 3 */}
        <div className="package-item">
          <h3>The "Decades" Experience</h3>
          <p className="package-description">Comprehensive entertainment for full evenings and larger events.</p>
          <ul>
            <li>Duration: Approx. 5-6 hours</li>
            <li>Content: Bespoke blend of multiple live vocal sets & seamless DJing</li>
            <li>Includes: Premium Sound, Basic Lighting</li>
            <li>MC Services: Optional Add-on</li>
          </ul>
          <p className="package-pricing">Starting from $ZZZ</p>
          <Link to="/booking?package=decades" className="btn btn-secondary">Inquire About This Package</Link>
        </div>
      </div>
      
      <div className="add-ons-section">
          <h3>Available Add-Ons</h3>
          <ul>
              <li>Custom Song Learning (for first dance, etc.)</li>
              <li>Specific Lighting Packages (uplighting, dance floor effects)</li>
              <li>Extended Performance Hours</li>
              <li>MC Services (if not included in package)</li>
              <li>Travel Outside [Specify Radius/Area]</li>
          </ul>
      </div>

      <div className="custom-quote-cta">
          <h3>Need Something Different?</h3>
          <p>Contact us for a personalized quote tailored to your exact needs.</p>
          <Link to="/booking" className="btn btn-primary">Request a Custom Quote</Link>
      </div>

    </div>
  );
};

export default PackagesPage; 