// JavaScript to update slider value dynamically
const slider = document.getElementById('price-slider');
const sliderValue = document.getElementById('slider-value');

slider.oninput = function () {
  sliderValue.textContent = this.value + ' USD';
};

document.getElementById('apply-btn').addEventListener('click', function () {
  alert('Price selected: ' + slider.value + ' USD');
});
