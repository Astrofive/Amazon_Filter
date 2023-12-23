// function for clearing
function removeNonChristmasResults() {
  // Find all div elements with the attribute data-component-type="s-search-result"
  const elements = document.querySelectorAll('div[data-component-type="s-search-result"]');

  // Remove any elements that do not contain the text "Arrives before Christmas"
  elements.forEach(element => {
    if (!element.textContent.includes('Arrives before Christmas')) {
      element.remove();
    }
  });
}

// listener for key to clear
document.addEventListener('keydown', function(event) {
  if (event.code === 'KeyD') {
    removeNonChristmasResults();
  }
});

// Adds instructions to the Amazon search page itself!
window.onload = function() {
    // Define the XPath for the target element
    let xpath = '//*[@id="search"]/div[1]/div[1]/div/span[1]/div[1]/div[2]';

    // Use document.evaluate to find the element
    let targetElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

    // Check if the target element exists to avoid errors
    if (targetElement) {
      console.log('Target element found');
      
      // Define the HTML for the new div
        let newDivHTML = '<div style="padding: 16px; margin: 15px 0; background-color: #ededed; border-radius: 15px; color: #343434;">Press D key to filter by items that arrive before Christmas!</div>';

        // Insert the new div after the target element
        targetElement.insertAdjacentHTML('afterend', newDivHTML);
    } else {
        console.log('Target element not found');
    }
};
