function updatePrice() {
  const slider = document.getElementById("priceRange");
  const output = document.getElementById("priceValue");
  const priceLabel = document.querySelector(".low-prices");

  output.textContent = slider.value;

  // Update the label based on the slider value
  if (slider.value <= 49) {
    priceLabel.textContent = "Low prices";
    priceLabel.style.color = "#4faffb";  // Low price color
  } else if (slider.value == 50) {
    priceLabel.textContent = "Medium price";
    priceLabel.style.color = "#ffa500";  // Medium price color (orange)
  } else {
    priceLabel.textContent = "High price";
    priceLabel.style.color = "#ff0000";  // High price color (red)
  }
}

function applyPrice() {
  const price = document.getElementById("priceRange").value;
  alert(`Price applied: $${price} USD`);
}
