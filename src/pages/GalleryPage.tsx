import React from 'react';
import { Helmet } from 'react-helmet-async';
import './GalleryPage.css'; // Create this next

// Import images (adjust alt text as needed)
import galleryImg1 from '../assets/istockphoto-2205358562-612x612.jpg';
import galleryImg2 from '../assets/istockphoto-546197492-612x612.jpg';
import galleryImg3 from '../assets/istockphoto-1125687449-612x612.jpg';
import galleryImg4 from '../assets/istockphoto-638650658-612x612.jpg';
import galleryImg5 from '../assets/istockphoto-1806011581-612x612.jpg';
import galleryImg6 from '../assets/istockphoto-972154888-612x612.jpg';
import galleryImg7 from '../assets/istockphoto-2157713728-612x612.jpg';

const galleryImages = [
  { id: 1, src: galleryImg1, alt: 'DJ turntable closeup' },
  { id: 2, src: galleryImg2, alt: 'Live music performance silhouette' },
  { id: 3, src: galleryImg3, alt: 'Retro microphone stage lighting' },
  { id: 4, src: galleryImg4, alt: 'People dancing at a party' },
  { id: 5, src: galleryImg5, alt: 'Event lighting atmosphere' },
  { id: 6, src: galleryImg6, alt: 'Wedding celebration moment' },
  { id: 7, src: galleryImg7, alt: 'Vinyl record collection' },
];

// Placeholder for future media
const placeholderAudio = [
  // { id: 'a1', title: 'Soul Vocal Sample', src: 'path/to/audio1.mp3' },
  // { id: 'a2', title: 'Disco DJ Mix Snippet', src: 'path/to/audio2.mp3' },
];

const placeholderVideos = [
  // { id: 'v1', title: 'Live Performance Highlight Reel', embedUrl: 'youtube/vimeo_embed_url' },
];

const GalleryPage: React.FC = () => {
  return (
    <div className="gallery-page content-section">
      <Helmet>
        <title>Gallery & Media | Me & Mrs Jones | Photos & Videos</title>
        <meta name="description" content="See photos and media from Me & Mrs Jones. Get a feel for our live vocal and vinyl DJ performances at events." />
      </Helmet>

      <h2>Gallery & Media</h2>
      
      <div className="gallery-intro">
        <p>
          Get a feel for the Me & Mrs Jones experience. Initially featuring curated imagery reflecting our vibe, this section will soon showcase photos, audio clips, and videos from our performances.
        </p>
      </div>

      {/* Initial Image Gallery */}
      <div className="image-gallery">
        <h3>Visual Vibe</h3>
        <div className="gallery-grid">
          {galleryImages.map(image => (
            <div key={image.id} className="gallery-item">
              {/* Replace placeholder div with img */}
              <img src={image.src} alt={image.alt} loading="lazy" />
              {/* <div className="img-placeholder" style={{height: '200px'}}>
                 {image.alt} (Placeholder for: {image.src})
              </div> */}
            </div>
          ))}
        </div>
      </div>

      {/* Future Audio Section - Placeholder Structure */}
      {placeholderAudio.length > 0 && (
        <div className="audio-gallery">
          <h3>Listen In</h3>
          {/* Add audio player components here later */}
          <p>(Audio samples coming soon)</p>
        </div>
      )}

      {/* Future Video Section - Placeholder Structure */}
      {placeholderVideos.length > 0 && (
        <div className="video-gallery">
          <h3>See Us In Action</h3>
          {/* Add video embed components here later */}
          <p>(Video highlights coming soon)</p>
        </div>
      )}

    </div>
  );
};

export default GalleryPage; 