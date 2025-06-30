fetch(chrome.runtime.getURL('boycott_brands.json'))
  .then(response => response.json())
  .then(data => {
    const text = document.body.innerText.toLowerCase();

    data.brands.forEach(brand => {
      if (text.includes(brand)) {
        alert(`🚨 Boycott Alert: "${brand}" is a Zionist-affiliated brand. Consider ethical alternatives.`);
      }
    });
  });
