import React from "react";
import { ArrowRight } from "lucide-react";

interface Story {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  link: string;
  aspectRatio?: "4/3" | "3/4";
}

interface FeaturedStoriesProps {
  stories: Story[];
  title?: string;
  subtitle?: string;
  description?: string;
}

const FeaturedStories: React.FC<FeaturedStoriesProps> = ({
  stories,
  title = "Featured stories",
  subtitle = "JOURNAL",
  description = "Longing to go on a luxury journey? Browse our collection - from award-winning photography to featured travel stories and on-the-ground updates about our conservation contributions."
}) => {
  return (
    <section className="py-32 px-6 lg:px-0 bg-[#edebe5]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-[#9B9B9B] tracking-[0.2em] uppercase mb-6">{subtitle}</h2>
          <h3 className="font-heading text-5xl lg:text-6xl text-[#0A3531] mb-8">{title}</h3>
          <p className="text-gray-600 text-lg max-w-2xl">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="group cursor-pointer">
              <div className={`aspect-[${story.aspectRatio || "4/3"}] overflow-hidden mb-6`}>
                <img
                  src={story.image}
                  alt={story.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h4 className="font-heading text-2xl text-[#0A3531] mb-4">{story.title}</h4>
              <p className="text-gray-600 mb-6">{story.description}</p>
              <div className="flex items-center space-x-2 text-[#FF5C28]">
                <span className="uppercase tracking-wider text-sm font-medium">READ MORE</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedStories; 