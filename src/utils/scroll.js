/**
 * Smoothly scrolls to an element by its ID.
 * If the element is not on the current page, it navigates to the home page with the hash.
 * @param {string} id - The ID of the target section (without the #)
 */
export const smoothScrollTo = (id) => {
  const element = document.getElementById(id);
  
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  } else {
    // If element not found, navigate to home page with hash
    window.location.href = `/#${id}`;
  }
};
