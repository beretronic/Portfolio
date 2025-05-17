/**
 * Smooth scroll to an element
 * @param id The ID of the element to scroll to
 */
export const scrollToElement = (id: string): void => {
  const element = document.getElementById(id);
  if (!element) return;
  
  const offset = 80; // Offset for fixed header
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
};

/**
 * Check if an element is in viewport
 * @param el The element to check
 * @param partiallyVisible Whether the element needs to be fully or partially visible
 * @returns Boolean indicating if the element is in viewport
 */
export const isElementInViewport = (
  el: Element, 
  partiallyVisible = false
): boolean => {
  const { top, bottom, left, right } = el.getBoundingClientRect();
  const { innerHeight, innerWidth } = window;
  
  return partiallyVisible
    ? ((top > 0 && top < innerHeight) ||
        (bottom > 0 && bottom < innerHeight)) &&
      ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};
