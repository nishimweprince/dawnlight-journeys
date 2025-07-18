import { destinations, type Destination } from '../constants/destinations';
import { experiences, type Experience } from '../constants/experiences';
import { type DropdownItem } from '../components/ui/dropdown-menu';

/**
 * Transform destinations data into dropdown-compatible format
 */
export const getDestinationDropdownItems = (): DropdownItem[] => {
  return destinations.map((destination: Destination) => ({
    id: destination.id,
    name: destination.name,
    href: `/safaris?destination=${destination.name}`,
    description: destination.description.length > 60 
      ? destination.description.substring(0, 60) + '...'
      : destination.description
  }));
};

/**
 * Transform experiences data into dropdown-compatible format
 */
export const getExperienceDropdownItems = (): DropdownItem[] => {
  return experiences.map((experience: Experience) => ({
    id: experience.id,
    name: experience.title,
    href: experience.url,
    description: experience.description.length > 60 
      ? experience.description.substring(0, 60) + '...'
      : experience.description
  }));
};