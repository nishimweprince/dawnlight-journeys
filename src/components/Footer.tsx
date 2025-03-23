import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  const socialLinks = [
    { icon: faFacebook, to: '#' },
    { icon: faInstagram, to: '#' },
    { icon: faLinkedin, to: '#' },
    { icon: faTwitter, to: '#' },
  ];

  const aboutLinks = [
    { text: 'About', to: '/about' },
    { text: 'Impact', to: '/impact' },
    { text: 'Journal', to: '/journal' },
    { text: 'Careers', to: '/careers' },
    { text: 'Contact', to: '/contact' },
  ];

  const destinationLinks = [
    { text: 'Botswana', to: '/destinations/botswana' },
    { text: 'Namibia', to: '/destinations/namibia' },
    { text: 'Rwanda', to: '/destinations/rwanda' },
    { text: 'Zambia', to: '/destinations/zambia' },
    { text: 'Zimbabwe', to: '/destinations/zimbabwe' },
  ];

  const journeyLinks = [
    { text: 'Our Journeys', to: '/journeys' },
    { text: 'Journey Inspiration', to: '/inspiration' },
    { text: 'Our Services', to: '/services' },
    { text: 'Dawnlight journey Store', to: '/store' },
  ];

  const legalLinks = [
    { text: 'Disclaimer', to: '/disclaimer' },
    { text: 'Privacy Policy', to: '/privacy' },
    { text: 'Sitemap', to: '/sitemap' },
  ];

  return (
    <footer className="bg-[#1e1e1e] text-white">
      <article className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <section className="py-16">
          <article className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand Section */}
            <section className="space-y-6">
              <figure className="flex items-center space-x-3">
                <img 
                  src="https://images.unsplash.com/photo-1469041797191-50ace28483c3"
                  alt="Dawnlight journey Logo" 
                  className="h-12 w-12 object-cover rounded-full"
                />
                <h3 className="text-xl font-semibold">Dawnlight journey</h3>
              </figure>
              <p className="text-gray-400 text-sm leading-relaxed">
                Discover Earth's ultimate, untamed places. We are the proud custodians of our planet's most significant wild places.
              </p>
              <nav className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, to }, index) => (
                  <Link
                    key={index}
                    to={to}
                    className="bg-[#333333] p-2 rounded-full hover:bg-[#444444] transition-colors"
                  >
                    <FontAwesomeIcon icon={Icon} size="sm" />
                  </Link>
                ))}
              </nav>
            </section>

            {/* Quick Links */}
            <section>
              <h4 className="text-lg font-medium mb-6 text-white">Quick Links</h4>
              <nav>
                <ul className="space-y-3">
                  {aboutLinks.map(({ text, to }, index) => (
                    <li key={index}>
                      <Link to={to} className="text-gray-400 hover:underline hover:underline-offset-2 hover:text-white transition-colors text-sm">
                        {text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </section>

            {/* Destinations */}
            <section>
              <h4 className="text-lg font-medium mb-6 text-white">Destinations</h4>
              <nav>
                <ul className="space-y-3">
                  {destinationLinks.map(({ text, to }, index) => (
                    <li key={index}>
                      <Link to={to} className="text-gray-400 hover:text-white transition-colors text-sm">
                        {text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </section>

            {/* Journeys & Services */}
            <section>
              <h4 className="text-lg font-medium mb-6 text-white">Journeys & Services</h4>
              <nav>
                <ul className="space-y-3">
                  {journeyLinks.map(({ text, to }, index) => (
                    <li key={index}>
                      <Link to={to} className="text-gray-400 hover:text-white transition-colors text-sm">
                        {text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </section>
          </article>
        </section>

        <Separator className="bg-[#333333]" />

        {/* Bottom Footer */}
        <section className="py-8">
          <article className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              Copyright ©2024 Dawnlight journey. All rights reserved
            </p>
            <nav className="flex space-x-6">
              {legalLinks.map(({ text, to }, index) => (
                <Link
                  key={index}
                  to={to}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {text}
                </Link>
              ))}
            </nav>
          </article>
        </section>
      </article>
    </footer>
  );
};

export default Footer;
