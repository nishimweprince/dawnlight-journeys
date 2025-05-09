import React from 'react';
import Link from 'next/link';

const blogs = [
  {
    id: 1,
    title: 'The Ultimate Guide to Gorilla Trekking in Rwanda',
    image: '/assets/destinations/rwanda-tourism.jpg',
    excerpt: 'Discover everything you need to know about gorilla trekking in Rwanda, from permits and packing tips to the best time to visit and what to expect on your adventure.',
    url: '/blog/gorilla-trekking-guide',
  },
  {
    id: 2,
    title: 'Top 5 Safari Experiences in Uganda',
    image: '/assets/destinations/uganda-tourism.jpg',
    excerpt: 'Uganda is a land of breathtaking wildlife and adventure. Explore our top 5 safari experiences, including chimpanzee tracking, boat safaris, and more.',
    url: '/blog/top-5-uganda-safaris',
  },
  {
    id: 3,
    title: 'Cultural Encounters: Meeting the People of East Africa',
    image: '/assets/destinations/rwanda-tourism.jpg',
    excerpt: "Go beyond the wildlife and discover the rich cultures, traditions, and hospitality of East Africa's diverse communities.",
    url: '/blog/cultural-encounters-east-africa',
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white pb-16">
      <header className="mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-primary">Our Blog</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Stories, tips, and inspiration for your next African adventure. Explore our latest articles below.
        </p>
      </header>
      <section className="mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {blogs.map((blog) => (
          <article key={blog.id} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col hover:scale-[1.02] transition-transform">
            <figure className="relative h-56 w-full overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
            </figure>
            <section className="p-6 flex-1 flex flex-col">
              <h2 className="text-xl font-bold mb-2 text-primary">{blog.title}</h2>
              <p className="text-gray-700 mb-4 flex-1">{blog.excerpt}</p>
              <Link href={blog.url} className="inline-block mt-auto text-orange-700 font-semibold hover:underline">
                Read More
              </Link>
            </section>
          </article>
        ))}
      </section>
    </main>
  );
}
