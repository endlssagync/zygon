import React, { useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Button } from '../atoms/Button';
import { GeometricBackground } from '../ui/geometric-background';

export const ContactPage: React.FC = () => {
  const contactEmail = 'garrett@zygontalent.agency';
  const contactPhone = '(870)-213-5626';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Since we don't have a backend, we'll create a mailto link with the form data
    const subject = encodeURIComponent(`Contact Form Submission from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    
    // Open the mailto link
    window.location.href = mailtoLink;
    
    // Reset form after a delay
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 500);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#030303', color: '#FFFFFF' }}>
      <Header />
      <main className="relative w-full py-16 md:py-24 overflow-hidden">
        {/* Hero Background */}
        <GeometricBackground />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Page Header */}
          <div className="text-center mb-16 md:mb-20">
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 animate-fade-in-up"
              style={{ color: '#FFFFFF', letterSpacing: '-0.025em' }}
            >
              Get in Touch
            </h1>
            <p
              className="text-lg md:text-xl max-w-xl mx-auto mb-12 px-4 break-words"
              style={{
                color: '#A1A1A1',
                animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s forwards',
                opacity: 0,
              }}
            >
              Whether you're a creator looking for brand partnerships or a brand seeking talent, we'd love to hear from you.
            </p>
            
            {/* Contact Info Display - Improved */}
            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10 mb-16"
              style={{
                animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards',
                opacity: 0,
              }}
            >
              {/* Email Card */}
              <a
                href={`mailto:${contactEmail}`}
                className="group flex items-center gap-3 px-6 py-4 rounded-lg transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 100%)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)';
                }}
              >
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: '#FFFFFF' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-base md:text-lg font-medium" style={{ color: '#FFFFFF' }}>
                  {contactEmail}
                </span>
              </a>

              {/* Phone Card */}
              <a
                href={`tel:${contactPhone.replace(/[()-]/g, '')}`}
                className="group flex items-center gap-3 px-6 py-4 rounded-lg transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 100%)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)';
                }}
              >
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: '#FFFFFF' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-base md:text-lg font-medium" style={{ color: '#FFFFFF' }}>
                  {contactPhone}
                </span>
              </a>
            </div>
          </div>

          {/* Contact Form and Image Layout */}
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start hidden"
            style={{
              animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.4s forwards',
              opacity: 0,
            }}
          >
            {/* Contact Form - Left Side */}
            <div
              className="rounded-2xl p-8 md:p-10"
              style={{
                background: 'linear-gradient(135deg, rgba(30, 30, 30, 0.8) 0%, rgba(21, 21, 21, 0.8) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
              }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium"
                    style={{ color: '#FFFFFF' }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-lg bg-transparent border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/20"
                    style={{
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                      color: '#FFFFFF',
                    }}
                    placeholder="Your name"
                    onFocus={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                      e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                      e.target.style.boxShadow = '0 0 0 4px rgba(255, 255, 255, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium"
                    style={{ color: '#FFFFFF' }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-lg bg-transparent border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/20"
                    style={{
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                      color: '#FFFFFF',
                    }}
                    placeholder="your.email@example.com"
                    onFocus={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                      e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                      e.target.style.boxShadow = '0 0 0 4px rgba(255, 255, 255, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium"
                    style={{ color: '#FFFFFF' }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-5 py-4 rounded-lg bg-transparent border transition-all duration-300 resize-y focus:outline-none focus:ring-2 focus:ring-white/20"
                    style={{
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                      color: '#FFFFFF',
                    }}
                    placeholder="Tell us about your project or inquiry..."
                    onFocus={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                      e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                      e.target.style.boxShadow = '0 0 0 4px rgba(255, 255, 255, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full sm:w-auto min-w-[160px]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                  
                  {submitStatus === 'success' && (
                    <div className="mt-4 p-4 rounded-lg flex items-center gap-3" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                      <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#10B981' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-sm" style={{ color: '#10B981' }}>
                        Your message has been prepared! Your email client should open shortly.
                      </p>
                    </div>
                  )}
                </div>
              </form>
            </div>

            {/* Image Content - Right Side */}
            <div className="hidden lg:block relative h-full">
              <div className="sticky top-24">
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                  }}
                >
                  <img
                    src="/poster-wide-1.jpg"
                    alt="Contact us"
                    className="w-full h-auto object-cover rounded-2xl"
                    style={{
                      minHeight: '600px',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
