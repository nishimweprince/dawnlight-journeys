import React from 'react';
import { Navbar } from '@/src/components/navbar';
import { Footer } from '@/src/components/footer';
import { CustomButton } from '@/src/components/ui/custom-button';

export default function BlogSinglePage() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white pb-16">
        <article className="max-w-7xl mx-auto px-4 py-12 bg-white/90 rounded-2xl shadow-xl mt-10 mb-16">
          <header className="mb-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-primary">The Ultimate Guide to Gorilla Trekking in Rwanda</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
              Discover everything you need to know about gorilla trekking in Rwanda, from permits and packing tips to the best time to visit and what to expect on your adventure.
            </p>
            <img
              src="/assets/destinations/rwanda-tourism.jpg"
              alt="Gorilla Trekking Rwanda"
              className="w-full max-h-96 object-cover rounded-xl shadow-lg mx-auto border mb-4"
            />
            <span className="text-sm text-gray-500">By Dawnlight Journeys • June 2024</span>
          </header>

          <section className="prose prose-lg max-w-none text-gray-900 mx-auto">
            <p>
              Rwanda, the land of a thousand hills, offers one of the most unforgettable wildlife experiences on earth: gorilla trekking. Nestled in the lush Volcanoes National Park, this adventure brings you face-to-face with endangered mountain gorillas in their natural habitat.
            </p>
            <img
              src="/assets/safaris/gorilla-trekking.jpg"
              alt="Mountain Gorillas in Rwanda"
              className="w-full rounded-xl shadow-md my-8 border"
            />
            <h2>How to Get a Gorilla Trekking Permit</h2>
            <p>
              Permits are required and should be booked well in advance, as only a limited number are issued each day. The Rwanda Development Board manages the process, and permits cost around $1,500 per person. This fee supports conservation and local communities.
            </p>
            <img
              src="/assets/destinations/rwanda-tourism.jpg"
              alt="Rwanda Landscape"
              className="w-full rounded-xl shadow-md my-8 border"
            />
            <h2>What to Expect on the Trek</h2>
            <p>
              Treks can last from 1 to 6 hours, depending on the gorillas' location. Expect to hike through dense forest and steep terrain. Once you find a gorilla family, you'll have one magical hour to observe and photograph them up close.
            </p>
            <img
              src="/assets/experiences/custom-experiences.jpg"
              alt="Gorilla Trekking Experience"
              className="w-full rounded-xl shadow-md my-8 border"
            />
            <h2>Packing Tips</h2>
            <ul>
              <li>Sturdy hiking boots</li>
              <li>Long-sleeved shirts and trousers</li>
              <li>Rain jacket</li>
              <li>Gloves for stinging nettles</li>
              <li>Camera (no flash)</li>
            </ul>
            <h2>Best Time to Visit</h2>
            <p>
              The dry seasons (June–September and December–February) are ideal for trekking, offering the best trail conditions and visibility.
            </p>
            <img
              src="/assets/safaris/wildlife-sararis.jpg"
              alt="Wildlife Safari Rwanda"
              className="w-full rounded-xl shadow-md my-8 border"
            />
            <h2>Why Choose Rwanda?</h2>
            <p>
              Rwanda is renowned for its safety, hospitality, and commitment to conservation. Beyond gorilla trekking, you can explore vibrant culture, stunning lakes, and other wildlife adventures.
            </p>
          </section>

          <footer className="mt-12 text-center">
            <CustomButton variant="primary" size="lg" href="/contact">
              Plan Your Gorilla Trekking Adventure
            </CustomButton>
          </footer>
        </article>
      </main>
      <Footer />
    </>
  );
}
