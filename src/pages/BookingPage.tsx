import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import { Helmet } from 'react-helmet-async';

import "react-datepicker/dist/react-datepicker.css"; // Import the CSS
import './BookingPage.css';

const BookingPage: React.FC = () => {
  // Basic state placeholders - replace with more robust handling (e.g., react-hook-form)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: null as Date | null,
    eventType: 'Wedding', // Default value
    venue: '',
    startTime: '',
    endTime: '',
    guests: '',
    packageInterest: '', // Default empty
    details: '',
    heardAbout: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Update handler for DatePicker
  const handleDateChange = (date: Date | null) => {
    setFormData(prev => ({ ...prev, eventDate: date }));
  };

  // General handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Basic submit handler (replace later - needs validation and actual submission logic)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Convert Date object to a string format if needed before submission
    const submissionData = {
      ...formData,
      eventDate: formData.eventDate ? formData.eventDate.toISOString().split('T')[0] : '' // Example: YYYY-MM-DD
    };
    console.log("Form Data Submitted:", submissionData);
    setIsSubmitted(true); 
  };

  return (
    <div className="booking-page content-section">
      <Helmet>
        <title>Booking & Contact | Me & Mrs Jones | Get a Quote</title>
        <meta name="description" content="Contact Me & Mrs Jones to book live vocal and vinyl DJ entertainment for your UK event. Fill out the inquiry form to get a personalized quote." />
      </Helmet>

      <h2>Booking & Contact</h2>
      
      <div className="booking-content">
        <div className="contact-info">
          <h3>Get In Touch</h3>
          <p>We'd love to hear about your event! Fill out the form below, or contact us directly:</p>
          <ul>
            <li><strong>Phone:</strong> <a href="tel:+44XXXXXXXXXX">+44 [Your Phone Number]</a></li> {/* TODO: Add phone */} 
            <li><strong>Email:</strong> <a href="mailto:hello@meandmrsjones.example">hello@meandmrsjones.example</a></li> {/* TODO: Add email */} 
          </ul>
          <p className="availability-note">
            Please submit your event details, and we will contact you promptly regarding availability and next steps!
          </p>
        </div>

        <div className="booking-form-container">
          <h3>Event Inquiry Form</h3>
          {isSubmitted ? (
            <div className="submission-success">
              <h4>Thank You!</h4>
              <p>Your inquiry has been received. We'll be in touch soon!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="booking-form">
              
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>

              <div className="form-group-split">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
              </div>

              <div className="form-group-split">
                <div className="form-group">
                  <label htmlFor="eventDate">Date of Event *</label>
                  <DatePicker 
                    id="eventDate" 
                    selected={formData.eventDate}
                    onChange={handleDateChange}
                    dateFormat="yyyy-MM-dd" 
                    placeholderText="YYYY-MM-DD"
                    className="form-control"
                    wrapperClassName="date-picker-wrapper"
                    minDate={new Date()}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="eventType">Event Type *</label>
                  <select id="eventType" name="eventType" value={formData.eventType} onChange={handleChange} required>
                    <option value="Wedding">Wedding</option>
                    <option value="Birthday Party">Birthday Party</option>
                    <option value="Corporate Event">Corporate Event</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="venue">Event Venue / Location *</label>
                <input type="text" id="venue" name="venue" value={formData.venue} onChange={handleChange} required />
              </div>

              <div className="form-group-split">
                 <div className="form-group">
                  <label htmlFor="startTime">Estimated Start Time</label>
                  <input type="time" id="startTime" name="startTime" value={formData.startTime} onChange={handleChange} />
                </div>
                 <div className="form-group">
                  <label htmlFor="endTime">Estimated End Time</label>
                  <input type="time" id="endTime" name="endTime" value={formData.endTime} onChange={handleChange} />
                </div>
                 <div className="form-group">
                  <label htmlFor="guests">Estimated Number of Guests</label>
                  <input type="number" id="guests" name="guests" min="1" value={formData.guests} onChange={handleChange} />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="packageInterest">Which Package Are You Interested In?</label>
                <select id="packageInterest" name="packageInterest" value={formData.packageInterest} onChange={handleChange}>
                  <option value="">-- Select a Package (Optional) --</option>
                  <option value="Sparkle">The "Sparkle" Set</option>
                  <option value="Main Event">The "Main Event" Groove</option>
                  <option value="Decades">The "Decades" Experience</option>
                  <option value="Custom/Unsure">Custom / Unsure</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="details">Tell Us More About Your Event & Music Preferences</label>
                <textarea id="details" name="details" rows={5} value={formData.details} onChange={handleChange}></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="heardAbout">How Did You Hear About Us? (Optional)</label>
                <input type="text" id="heardAbout" name="heardAbout" value={formData.heardAbout} onChange={handleChange} />
              </div>

              <button type="submit" className="btn btn-primary">Submit Inquiry</button>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingPage; 