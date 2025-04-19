import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '@/containers/layout/Layout';
import { useEffect, useRef, useState } from 'react';
import NewsletterForm from '@/components/NewsLetter';

const NotFoundPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3,
      }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <Layout>
      <main className="relative h-screen">
        <figure
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1469041797191-50ace28483c3')",
            filter: 'brightness(0.7)',
          }}
        />
        <figure className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />
        
        <article className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <section 
            ref={contentRef}
            className={`max-w-4xl mx-auto transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h1 className="font-heading text-8xl md:text-9xl mb-8 text-white">
              404
            </h1>
            <hr className="w-24 h-0.5 bg-white mx-auto mb-8" />
            <p className="text-white text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
              The path you're seeking has wandered into the wild. Let us guide you back to familiar territory.
            </p>
            <Link
              to="/"
              className="inline-flex items-center space-x-2 bg-[#FF5C28] hover:bg-[#FF5C28]/90 px-8 py-6 text-white uppercase tracking-wider text-sm font-medium group"
            >
              <span>RETURN HOME</span>
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </section>
        </article>

        <address className="absolute bottom-12 left-12 text-sm tracking-wider text-white/80">
          19.2228° S, 22.7999° E
        </address>
      </main>

      <section className="relative py-32 bg-[#0A3531]">
        <article className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center px-6">
          <section className="space-y-8">
            <p className="text-[#9B9B9B] tracking-[0.2em] uppercase">
              Lost in the wild
            </p>
            <h2 className="font-heading text-5xl lg:text-7xl leading-tight text-white">
              Every wrong turn leads to a new adventure
            </h2>
            <article className="space-y-6 text-gray-300">
              <p className="text-lg leading-relaxed">
                Sometimes the most memorable journeys begin with a detour. While this path may not be the one you intended, it's an opportunity to discover something unexpected.
              </p>
              <p className="text-lg leading-relaxed">
                Let us guide you back to our collection of extraordinary destinations, where every journey is carefully crafted to create unforgettable experiences.
              </p>
            </article>
            <nav className="flex flex-col gap-4">
              <Link to="/africa" className="text-white/80 hover:text-white transition-colors">
                Explore Africa
              </Link>
              <Link to="/about" className="text-white/80 hover:text-white transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="text-white/80 hover:text-white transition-colors">
                Contact Us
              </Link>
            </nav>
          </section>
          <figure className="relative h-[600px] w-full">
            <img
              src="https://images.unsplash.com/photo-1493962853295-0fd70327578a"
              alt="Wilderness landscape"
              className="object-cover w-full h-full"
            />
            <figcaption className="absolute -left-12 bottom-0 transform -rotate-90 text-xs tracking-[0.3em] text-gray-400">
              #WEREDawnlight journey
            </figcaption>
          </figure>
        </article>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-32 bg-white">
        <article className="max-w-7xl mx-auto px-6">
          <div className="absolute left-0 right-0 top-[-150px] z-10 flex justify-center" id="newsletter">
            <NewsletterForm />
          </div>
        </article>
      </section>
    </Layout>
  );
};

export default NotFoundPage;
