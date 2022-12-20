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

document.addEventListener('keydown', function(event) {
  if (event.code === 'KeyD') {
    removeNonChristmasResults();
  }
});
