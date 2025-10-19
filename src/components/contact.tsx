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
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <main className="container relative z-10">
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase mb-4 text-foreground">
            Get In Touch
          </h2>
          <hr className="w-24 h-1 bg-primary mx-auto border-0 mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to embark on your African adventure? We're here to help plan your perfect journey
          </p>
        </header>
        <article className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          <section className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-primary/10">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our travel experts are ready to help you plan the perfect African safari experience.
                Reach out to us through any of the channels below.
              </p>

              <nav className="space-y-6">
                <article className="group hover:bg-primary/5 p-4 rounded-xl transition-colors">
                  <div className="flex items-start gap-4">
                    <figure className="bg-primary/10 group-hover:bg-primary group-hover:text-white text-primary rounded-full w-12 h-12 flex items-center justify-center shrink-0 transition-colors">
                      <MapPin className="h-6 w-6" aria-hidden="true" />
                    </figure>
                    <section>
                      <h4 className="font-bold text-lg mb-2 text-foreground">Our Locations</h4>
                      <address className="not-italic text-muted-foreground space-y-1">
                        <p>Kigali, Rwanda</p>
                        <p>Kampala, Uganda</p>
                      </address>
                    </section>
                  </div>
                </article>

                <article className="group hover:bg-primary/5 p-4 rounded-xl transition-colors">
                  <div className="flex items-start gap-4">
                    <figure className="bg-primary/10 group-hover:bg-primary group-hover:text-white text-primary rounded-full w-12 h-12 flex items-center justify-center shrink-0 transition-colors">
                      <Mail className="h-6 w-6" aria-hidden="true" />
                    </figure>
                    <section>
                      <h4 className="font-bold text-lg mb-2 text-foreground">Email Us</h4>
                      <a
                        href="mailto:info@dawnlightjourneysrwanda.com"
                        className="text-primary hover:underline font-medium"
                      >
                        info@dawnlightjourneysrwanda.com
                      </a>
                    </section>
                  </div>
                </article>

                <article className="group hover:bg-primary/5 p-4 rounded-xl transition-colors">
                  <div className="flex items-start gap-4">
                    <figure className="bg-primary/10 group-hover:bg-primary group-hover:text-white text-primary rounded-full w-12 h-12 flex items-center justify-center shrink-0 transition-colors">
                      <Phone className="h-6 w-6" aria-hidden="true" />
                    </figure>
                    <section>
                      <h4 className="font-bold text-lg mb-2 text-foreground">Call Us</h4>
                      <a href="tel:+250785917385" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                        Rwanda: +250 785 917 385
                      </a>
                    </section>
                  </div>
                </article>
              </nav>
            </div>

            <footer className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border-2 border-green-200 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-500 rounded-full p-3">
                  <FaWhatsapp className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Instant Support</h4>
                  <p className="text-sm text-muted-foreground">Chat with us on WhatsApp</p>
                </div>
              </div>
              <CustomButton
                variant="primary"
                size="lg"
                href="https://wa.me/250785917385"
                className="w-full bg-green-600 border-green-600 hover:bg-green-700"
              >
                <FaWhatsapp className="h-5 w-5 mr-2" />
                Start WhatsApp Chat
              </CustomButton>
            </footer>
          </section>

          <aside className="bg-white rounded-2xl p-8 shadow-lg border border-primary/10">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2 text-foreground">Send Us a Message</h3>
              <p className="text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours</p>
            </div>

            {submitMessage && (
              <div className={`mb-6 p-4 rounded-xl text-sm font-medium ${
                submitMessage.includes('successfully') || submitMessage.includes('Success')
                  ? 'bg-green-50 text-green-800 border-2 border-green-200'
                  : 'bg-red-50 text-red-800 border-2 border-red-200'
              }`}>
                {submitMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <fieldset className="grid sm:grid-cols-2 gap-4">
                <section className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-foreground flex items-center gap-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-gray-50 hover:bg-white"
                    placeholder="John Doe"
                    required
                    disabled={isSubmitting}
                  />
                </section>
                <section className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-foreground flex items-center gap-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-gray-50 hover:bg-white"
                    placeholder="john@example.com"
                    required
                    disabled={isSubmitting}
                  />
                </section>
              </fieldset>

              <section className="space-y-2">
                <label htmlFor="subject" className="text-sm font-semibold text-foreground flex items-center gap-2">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-gray-50 hover:bg-white"
                  placeholder="Safari Booking Inquiry"
                  required
                  disabled={isSubmitting}
                />
              </section>

              <section className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-foreground flex items-center gap-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none bg-gray-50 hover:bg-white"
                  placeholder="Tell us about your dream safari experience..."
                  required
                  disabled={isSubmitting}
                />
              </section>

              <CustomButton
                variant="primary"
                size="lg"
                className="w-full shadow-lg hover:shadow-xl transition-shadow"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
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
