'use client';

import { Mail, MapPin, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';
import { sendContactEmail } from '@/lib/email';

const contactItems = [
  {
    icon: MapPin,
    label: 'Our Locations',
    content: 'Kigali, Rwanda · Kampala, Uganda',
    href: undefined,
  },
  {
    icon: Mail,
    label: 'Email Us',
    content: 'info@dawnlightjourneysrwanda.com',
    href: 'mailto:info@dawnlightjourneysrwanda.com',
  },
  {
    icon: Phone,
    label: 'Call Us',
    content: '+250 785 917 385',
    href: 'tel:+250785917385',
  },
];

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    try {
      await sendContactEmail(formData);
      setSubmitMessage("Message sent successfully! We'll get back to you soon.");
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitMessage('Failed to send message. Please check your configuration and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  /* Shared label style */
  const labelStyle = {
    display: 'block',
    fontFamily: 'var(--font-outfit, system-ui)',
    fontSize: '0.7rem',
    fontWeight: 600,
    letterSpacing: '0.12em',
    textTransform: 'uppercase' as const,
    color: 'rgba(44,36,32,0.55)',
    marginBottom: '0.5rem',
  };

  return (
    <section
      id="contact"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: '#1B3A2D' }}
      aria-labelledby="contact-heading"
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 15% 50%, rgba(212,167,106,0.06) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

          {/* LEFT: Contact info */}
          <section className="space-y-8">
            <header>
              <p className="section-label mb-4">Get In Touch</p>
              <span style={{ display: 'block', width: '2.5rem', height: '2px', background: 'linear-gradient(90deg, #D4A76A, #D97B2B)', borderRadius: '9999px', marginBottom: '1.25rem' }} />
              <h2
                id="contact-heading"
                className="font-playfair font-bold text-white leading-tight"
                style={{ fontSize: 'clamp(1.85rem, 3.5vw, 2.75rem)' }}
              >
                Plan Your<br />
                <span style={{ color: '#D4A76A' }}>Perfect Journey</span>
              </h2>
              <p className="mt-4 font-outfit text-sm leading-relaxed" style={{ color: 'rgba(245,240,232,0.6)' }}>
                Our travel experts are ready to craft your bespoke African safari experience.
                Reach out through any of the channels below — we respond within 24 hours.
              </p>
            </header>

            {/* Contact items */}
            <nav className="space-y-5" aria-label="Contact information">
              {contactItems.map(({ icon: Icon, label, content, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div
                    className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: 'rgba(212,167,106,0.12)',
                      border: '1px solid rgba(212,167,106,0.25)',
                    }}
                  >
                    <Icon className="w-4 h-4" strokeWidth={1.5} style={{ color: '#D4A76A' }} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-outfit text-xs tracking-[0.1em] uppercase font-semibold mb-1" style={{ color: 'rgba(245,240,232,0.45)' }}>
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="font-outfit text-sm font-medium transition-colors duration-200"
                        style={{ color: 'rgba(245,240,232,0.85)' }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#D4A76A'; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,240,232,0.85)'; }}
                      >
                        {content}
                      </a>
                    ) : (
                      <address className="not-italic font-outfit text-sm font-medium" style={{ color: 'rgba(245,240,232,0.85)' }}>
                        {content}
                      </address>
                    )}
                  </div>
                </div>
              ))}
            </nav>

            {/* WhatsApp CTA with pulse */}
            <a
              href="https://wa.me/250785917385"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl p-5 transition-all duration-200 hover:scale-[1.02] animate-pulse-ring"
              style={{
                background: 'rgba(34,197,94,0.12)',
                border: '1px solid rgba(34,197,94,0.3)',
              }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                style={{ background: '#22c55e' }}
              >
                <FaWhatsapp className="w-5 h-5 text-white" aria-hidden="true" />
              </div>
              <div>
                <p className="font-outfit font-semibold text-sm" style={{ color: 'rgba(245,240,232,0.9)' }}>
                  Chat on WhatsApp
                </p>
                <p className="font-outfit text-xs" style={{ color: 'rgba(245,240,232,0.5)' }}>
                  Instant response · +250 785 917 385
                </p>
              </div>
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-auto" style={{ color: '#22c55e' }} aria-hidden="true">
                <path d="M4 10h12M11 5l5 5-5 5" />
              </svg>
            </a>
          </section>

          {/* RIGHT: Form */}
          <aside
            className="rounded-2xl p-8 md:p-10"
            style={{
              background: '#F5F0E8',
            }}
          >
            <div className="mb-8">
              <h3 className="font-playfair font-bold text-xl mb-1" style={{ color: '#2C2420' }}>
                Send Us a Message
              </h3>
              <p className="font-outfit text-sm" style={{ color: 'rgba(44,36,32,0.55)' }}>
                We'll get back to you within 24 hours.
              </p>
            </div>

            {submitMessage && (
              <div
                className="mb-6 p-4 rounded-xl text-sm font-medium font-outfit"
                style={{
                  background: submitMessage.includes('successfully') ? 'rgba(34,197,94,0.1)' : 'rgba(239,68,68,0.1)',
                  border: `1px solid ${submitMessage.includes('successfully') ? 'rgba(34,197,94,0.3)' : 'rgba(239,68,68,0.3)'}`,
                  color: submitMessage.includes('successfully') ? '#15803d' : '#b91c1c',
                }}
              >
                {submitMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-7">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" style={labelStyle}>
                    Full Name <span style={{ color: '#D97B2B' }}>*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="input-safari"
                    style={{ color: '#2C2420' }}
                    placeholder="Your full name"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="email" style={labelStyle}>
                    Email Address <span style={{ color: '#D97B2B' }}>*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input-safari"
                    style={{ color: '#2C2420' }}
                    placeholder="you@example.com"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" style={labelStyle}>
                  Subject <span style={{ color: '#D97B2B' }}>*</span>
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  className="input-safari"
                  style={{ color: '#2C2420' }}
                  placeholder="Safari booking inquiry"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="message" style={labelStyle}>
                  Message <span style={{ color: '#D97B2B' }}>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="input-safari resize-none"
                  style={{ color: '#2C2420' }}
                  placeholder="Tell us about your dream safari experience..."
                  required
                  disabled={isSubmitting}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-ember w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <span
                      className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin"
                      aria-hidden="true"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                      <path d="M4 10h12M11 5l5 5-5 5" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </aside>
        </div>
      </div>
    </section>
  );
}
