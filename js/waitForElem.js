/**
 * Waits for an element to exist in the DOM.
 * @param {string} selector The CSS selector of the element.
 * @returns {Promise<Element>} A promise that resolves with the element when it exists.
 */
function waitForElement(selector) {
  return new Promise((resolve) => {
    // First, check if the element already exists.
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    // If not, create an observer to watch for changes.
    const observer = new MutationObserver((mutations) => {
      if (document.querySelector(selector)) {
        observer.disconnect(); // Stop observing once the element is found.
        resolve(document.querySelector(selector));
      }
    });

    // Start observing the document body for child list changes.
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}
