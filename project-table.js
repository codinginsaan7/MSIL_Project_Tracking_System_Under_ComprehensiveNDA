  document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const area = urlParams.get("area");

    if (area) {
      const areaCells = document.querySelectorAll(".business-area");
      areaCells.forEach(cell => {
        cell.textContent = area;
      });
    }
  });
  function goBack() {
    window.history.back();
  }
  function toggleDropdown() {
    const menu = document.getElementById('dropdown-menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
    }

    // Optional: Hide dropdown when clicking outside
    window.onclick = function(event) {
      if (!event.target.closest('.dropdown-container')) {
        document.getElementById('dropdown-menu').style.display = 'none';
      }
    };

