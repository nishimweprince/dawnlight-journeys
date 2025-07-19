import React from 'react';
import Link from 'next/link';
import { CustomButton } from '@/src/components/ui/custom-button';

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
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-8 md:py-8 lg:py-12 bg-gradient-to-b from-primary/10 via-secondary/10 to-background">
        <div className="container">
          <header className="text-center space-y-6 lg:space-y-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-primary">
              Our Blog
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Stories, tips, and inspiration for your next African adventure. Explore our latest articles below.
            </p>
          </header>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogs.map((blog) => (
              <article key={blog.id} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <figure className="relative h-48 md:h-56 w-full overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </figure>
                <section className="p-6 space-y-4">
                  <h2 className="text-lg md:text-xl font-bold text-primary leading-tight">
                    {blog.title}
                  </h2>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {blog.excerpt}
                  </p>
                  <nav aria-label={`Read more about ${blog.title}`}>
                    <CustomButton variant="primary" size="sm" href={blog.url}>
                      Read More
                    </CustomButton>
                  </nav>
                </section>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
