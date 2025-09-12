/**
 * Smooth scroll utility functions for navigation
 */

export const smoothScrollTo = (elementId: string, offset: number = 80) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

export const smoothScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

export const handleSmoothScroll = (href: string, onClick?: () => void) => {
  // Check if it's a hash link (starts with #)
  if (href.startsWith('#')) {
    const elementId = href.substring(1);
    smoothScrollTo(elementId);
    if (onClick) onClick();
    return true;
  }
  return false;
};
