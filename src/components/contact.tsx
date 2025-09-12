'use client';

import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { CustomButton } from './ui/custom-button';
import { FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';
import { sendContactEmail } from '@/lib/email';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    
    try {
      await sendContactEmail(formData);
      setSubmitMessage('Message sent successfully! We\'ll get back to you soon.');
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
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  return (
    <section id="contact" className="py-16 md:py-24">
      <main className="container">
        <article className="grid md:grid-cols-2 gap-12">
          <section>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Contact Us
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ready to start planning your African adventure? Get in touch with
              our team of experts.
            </p>

            <nav className="space-y-6">
              <article className="flex items-start gap-4">
                <figure className="bg-primary/10 text-primary rounded-full w-10 h-10 flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="h-5 w-5" />
                </figure>
                <section>
                  <h3 className="font-medium mb-1">Our Locations</h3>
                  <p className="text-muted-foreground">Kigali, Rwanda</p>
                  <p className="text-muted-foreground">Kampala, Uganda</p>
                </section>
              </article>

              <article className="flex items-start gap-4">
                <figure className="bg-primary/10 text-primary rounded-full w-10 h-10 flex items-center justify-center shrink-0 mt-1">
                  <Mail className="h-5 w-5" />
                </figure>
                <section>
                  <h3 className="font-medium mb-1">Email Us</h3>
                  <a
                    href="mailto:info@dawnlightjourneysrwanda.com"
                    className="text-primary hover:underline"
                  >
                    info@dawnlightjourneysrwanda.com
                  </a>
                </section>
              </article>

              <article className="flex items-start gap-4">
                <figure className="bg-primary/10 text-primary rounded-full w-10 h-10 flex items-center justify-center shrink-0 mt-1">
                  <Phone className="h-5 w-5" />
                </figure>
                <section>
                  <h3 className="font-medium mb-1">Call Us</h3>
                  <p className="text-muted-foreground">
                    Rwanda: +250 785 917 385
                  </p>
                </section>
              </article>

              <footer className="pt-4">
                <CustomButton
                  variant="primary"
                  size="lg"
                  href="https://wa.me/250785917385"
                  className="w-full sm:w-auto"
                >
                  <FaWhatsapp className="h-4 w-4 mr-2" />
                  Chat on WhatsApp
                </CustomButton>
              </footer>
            </nav>
          </section>

          <aside className="bg-background rounded-xl p-6 md:p-8 shadow-sm">
            <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
            {submitMessage && (
              <div className={`mb-4 p-3 rounded-md text-sm ${
                submitMessage.includes('successfully') || submitMessage.includes('Success')
                  ? 'bg-green-100 text-green-800 border border-green-200'
                  : 'bg-red-100 text-red-800 border border-red-200'
              }`}>
                {submitMessage}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <fieldset className="grid sm:grid-cols-2 gap-4">
                <section className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your name"
                    required
                    disabled={isSubmitting}
                  />
                </section>
                <section className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your email"
                    required
                    disabled={isSubmitting}
                  />
                </section>
              </fieldset>

              <section className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="How can we help?"
                  required
                  disabled={isSubmitting}
                />
              </section>

              <section className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Tell us about your travel plans..."
                  required
                  disabled={isSubmitting}
                />
              </section>

              <CustomButton 
                variant="primary" 
                className="w-full" 
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </>
                )}
              </CustomButton>
            </form>
          </aside>
        </article>
      </main>
    </section>
  );
}
