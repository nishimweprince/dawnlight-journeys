import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { CustomButton } from '@/src/components/ui/custom-button';

export const metadata: Metadata = {
  title: 'Blog - Safari Stories & Travel Tips | Dawnlight Journeys',
  description: 'Discover inspiring safari stories, travel tips, and expert advice for your African adventure. Read about gorilla trekking, wildlife photography, cultural experiences, and more from our travel experts.',
  keywords: [
    'safari blog',
    'african travel blog',
    'gorilla trekking blog',
    'wildlife photography blog',
    'rwanda travel blog',
    'uganda travel blog',
    'safari stories',
    'travel tips africa',
    'african adventure blog',
    'wildlife safari blog',
    'cultural experience blog',
    'safari photography blog',
    'african wildlife blog',
    'mountain gorilla blog',
    'chimpanzee tracking blog',
    'big five safari blog',
    'bird watching blog',
    'conservation blog',
    'eco-tourism blog',
    'sustainable travel blog',
    'african culture blog',
    'local community blog',
    'traditional village blog',
    'african heritage blog',
    'indigenous culture blog',
    'tribal experience blog',
    'african tradition blog',
    'cultural immersion blog',
    'authentic safari blog',
    'local guide blog',
    'community tourism blog',
    'safari travel tips',
    'african adventure tips',
    'wildlife photography tips',
    'gorilla trekking tips',
    'chimpanzee tracking tips',
    'safari packing tips',
    'african travel guide',
    'safari travel advice',
    'african wildlife guide',
    'safari destination guide',
    'rwanda travel guide',
    'uganda travel guide',
    'east africa travel blog',
    'african safari stories',
    'wildlife encounter stories',
    'cultural experience stories',
    'safari adventure stories',
    'african wildlife stories',
    'gorilla trekking stories',
    'chimpanzee tracking stories',
    'big five safari stories',
    'bird watching stories',
    'conservation stories',
    'eco-tourism stories',
    'sustainable travel stories',
    'african culture stories',
    'local community stories',
    'traditional village stories',
    'african heritage stories',
    'indigenous culture stories',
    'tribal experience stories',
    'african tradition stories',
    'cultural immersion stories',
    'authentic safari stories',
    'local guide stories',
    'community tourism stories',
  ],
  openGraph: {
    title: 'Blog - Safari Stories & Travel Tips | Dawnlight Journeys',
    description: 'Discover inspiring safari stories, travel tips, and expert advice for your African adventure. Read about gorilla trekking, wildlife photography, cultural experiences, and more from our travel experts.',
    url: 'https://dawnlightjourneysrwanda.com/blog',
    siteName: 'Dawnlight Journeys',
    images: [
      {
        url: 'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/safari-blog_stories',
        width: 1200,
        height: 630,
        alt: 'Safari Blog Stories and Travel Tips',
      },
      {
        url: 'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/gorilla-trekking_blog',
        width: 1200,
        height: 630,
        alt: 'Gorilla Trekking Blog Stories',
      },
      {
        url: 'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/wildlife-photography_blog',
        width: 1200,
        height: 630,
        alt: 'Wildlife Photography Blog',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - Safari Stories & Travel Tips | Dawnlight Journeys',
    description: 'Discover inspiring safari stories, travel tips, and expert advice for your African adventure. Read about gorilla trekking, wildlife photography, cultural experiences, and more from our travel experts.',
    site: '@dawnlightjourneys',
    creator: '@pnishimwe',
    images: [
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/safari-blog_stories',
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/gorilla-trekking_blog',
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/wildlife-photography_blog',
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: 'https://dawnlightjourneysrwanda.com/blog',
  },
};

const blogs = [
  {
    id: 1,
    title: 'The Ultimate Guide to Gorilla Trekking in Rwanda',
    image: 'https://res.cloudinary.com/nishimweprince/image/upload/v1752337228/dawnlight-journeys/gorilla-hero_asdfbd.jpg',
    excerpt: 'Discover everything you need to know about gorilla trekking in Rwanda, from permits and packing tips to the best time to visit and what to expect on your adventure.',
    url: '/blog/gorilla-trekking-guide',
  },
  {
    id: 2,
    title: 'Top 5 Safari Experiences in Uganda',
    image: 'https://res.cloudinary.com/nishimweprince/image/upload/v1752332362/dawnlight-journeys/lake-mburo-2_i4lpc6.jpg',
    excerpt: 'Uganda is a land of breathtaking wildlife and adventure. Explore our top 5 safari experiences, including chimpanzee tracking, boat safaris, and more.',
    url: '/blog/top-5-uganda-safaris',
  },
  {
    id: 3,
    title: 'Cultural Encounters: Meeting the People of East Africa',
    image: 'https://res.cloudinary.com/nishimweprince/image/upload/v1752339224/dawnlight-journeys/cultural-immersion_uhqf3i.jpg',
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
