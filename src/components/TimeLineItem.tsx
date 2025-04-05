import React from 'react';
import { Circle } from 'lucide-react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  image: string;
  isHighlighted?: boolean;
  alignment?: 'left' | 'right';
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  title,
  description,
  image,
  isHighlighted = false,
  alignment = 'left',
}) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element"
      contentStyle={{ 
        background: 'transparent', 
        boxShadow: 'none',
        padding: '0',
        transition: 'all 0.3s ease'
      }}
      contentArrowStyle={{ 
        display: 'none' 
      }}
      date=""
      position={alignment}
      iconStyle={{ 
        background: isHighlighted ? '#E09D57' : 'white',
        border: isHighlighted ? 'none' : '1px solid #E09D57',
        color: '#E09D57',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '20px',
        height: '20px',
        marginLeft: '-10px',
        marginRight: '-10px',
        boxShadow: '0 0 0 4px white, 0 2px 5px rgba(0,0,0,0.1)'
      }}
      icon={isHighlighted ? <div /> : <Circle size={10} strokeWidth={1} />}
    >
      <div className="flex flex-col md:flex-row items-start gap-6 group hover:scale-[1.01] transition-all duration-300">
        <div className="flex-1 order-2 md:order-1">
          <div className="mb-2">
            <span className="text-[#E09D57] font-medium text-lg group-hover:text-[#c78535] transition-colors duration-300">{year}</span>
          </div>
          <h4 className="text-xl font-medium text-[#1e1e1e] group-hover:text-[#E09D57] transition-colors duration-300 mb-3">{title}</h4>
          <p className="text-sm text-[#666] leading-relaxed whitespace-pre-line group-hover:text-[#333] transition-colors duration-300">{description}</p>
        </div>
        
        <div className="flex-shrink-0 order-1 md:order-2 md:ml-auto">
          <div className="w-full md:w-32 h-32 rounded-full overflow-hidden border-2 border-white shadow-md group-hover:shadow-lg transition-all duration-300">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </VerticalTimelineElement>
  );
};

export default TimelineItem;