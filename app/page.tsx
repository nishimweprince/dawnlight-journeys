'use client'

import { Hero } from '../src/components/hero';
import { Destinations } from '../src/components/destinations';
import { Safaris } from '../src/components/safaris';
import { Experiences } from '../src/components/experiences';
import { Affiliates } from '../src/components/affiliates';
import { FAQ } from '../src/components/faq';
import { Contact } from '../src/components/contact';
import { ThemeProvider } from '../src/components/theme-provider';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Page() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="wildlife-adventures-theme">
      <main className="flex min-h-screen flex-col">
        <section className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <Hero />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          >
            <Destinations />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          >
            <Safaris />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          >
            <Experiences />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          >
            <Affiliates />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
          >
            <FAQ />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
          >
            <Contact />
          </motion.div>
        </section>
        <a
          href="https://wa.me/250785917385"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-colors"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="w-6 h-6" />
        </a>
      </main>
    </ThemeProvider>
  );
}
