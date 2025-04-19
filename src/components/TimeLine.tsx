import  { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TimelineItem from './TimeLineItem';

// Timeline data
const timelineData = [
  {
    year: '1983',
    title: 'dawnlight journey founded',
    description: 'Formed in 1983, dawnlight journey commences an exciting journey of discovery and learning.',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=500&h=500',
    isHighlighted: false,
    alignment: 'left' as const
  },
  {
    year: '1984',
    title: 'First camps',
    description: 'We open our first permanent camps in Botswana (Xigera and Xaro).',
    image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&q=80&w=500&h=500',
    isHighlighted: true,
    alignment: 'right' as const
  },
  {
    year: '1991',
    title: 'Sefofane',
    description: 'Acquisition of Sefofane Air Charters (now known as dawnlight journey Air).',
    image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&q=80&w=500&h=500',
    isHighlighted: false,
    alignment: 'left' as const
  },
  {
    year: '1993',
    title: 'Expanding our operation',
    description: 'We extend our operations into Namibia and South Africa, including the first dawnlight journey-built community partnerships at Rocktail Bay, South Africa.',
    image: 'https://images.unsplash.com/photo-1518877593221-1f28583780b4?auto=format&fit=crop&q=80&w=500&h=500',
    isHighlighted: false,
    alignment: 'right' as const
  },
  {
    year: '1994 to 2000',
    title: 'Adding more regions',
    description: '• 1994 Expansion into Malawi (Mvuu Camp) (exited 2014).\n• 1996 Expansion into Zimbabwe (Makalolo Concession).\n• 1996 Opening of first permanent camp in Namibia.',
    image: 'https://images.unsplash.com/photo-1439886183900-e79ec0057170?auto=format&fit=crop&q=80&w=500&h=500',
    isHighlighted: false,
    alignment: 'left' as const
  }
];

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Start with the second item highlighted

  useEffect(() => {
    const handleScroll = () => {
      const timelineElements = document.querySelectorAll('.vertical-timeline-element');
      
      if (timelineElements.length === 0) return;
      
      // Find which element is in view
      for (let i = 0; i < timelineElements.length; i++) {
        const element = timelineElements[i];
        const rect = element.getBoundingClientRect();
        
        // If element is in the viewport
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setActiveIndex(i);
          break;
        } else if (rect.top < window.innerHeight && rect.bottom >= 0) {
          // Element is partially visible
          setActiveIndex(i);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    setTimeout(handleScroll, 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="py-24 bg-[#f5f5f0]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Timeline Header */}
        <div className="text-center mb-16">
          <h5 className="uppercase text-xs tracking-wider text-[#999] mb-3">The History of dawnlight journey</h5>
          <h2 className="text-4xl md:text-5xl font-light text-[#1e1e1e] mb-8">Four decades of dawnlight journey</h2>
          
          {/* Scroll to explore button */}
          <button className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#1e1e1e] border border-[#E09D57] rounded-full px-4 py-2">
            <span>Scroll to explore</span>
            <ArrowDown size={16} className="text-[#E09D57]" />
          </button>
        </div>

        {/* Timeline using react-vertical-timeline-component */}
        <VerticalTimeline lineColor="#ddd">
          {timelineData.map((item, index) => (
            <TimelineItem
              key={index}
              year={item.year}
              title={item.title}
              description={item.description}
              image={item.image}
              isHighlighted={index === activeIndex}
              alignment={item.alignment}
            />
          ))}
        </VerticalTimeline>
      </div>
      
      <style>{`
        .vertical-timeline::before {
          background: #ddd;
          width: 1px;
        }
        
        .vertical-timeline-element {
          margin: 2rem 0;
        }
        
        .vertical-timeline-element:hover .vertical-timeline-element-icon {
          box-shadow: 0 0 0 4px rgba(224, 157, 87, 0.2);
          transform: scale(1.1);
        }
        
        .vertical-timeline-element-icon {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
      `}</style>
    </section>
  );
};

export default Timeline;