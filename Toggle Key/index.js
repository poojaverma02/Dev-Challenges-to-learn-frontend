// Add an event listener for when the checkbox (toggle) changes
document.getElementById('toggle').addEventListener('change', function () {
    const toggleStatus = document.getElementById('toggle-status');
    
    // Check if the checkbox is checked (on state)
    if (this.checked) {
      toggleStatus.textContent = 'Switch is ON';
    } else {
      toggleStatus.textContent = 'Switch is OFF';
    }
  });
  