// purpose-table.js

const area = new URLSearchParams(location.search).get("area") || "Unknown";

// Replace all cells with id="dynamicArea"
document.querySelectorAll("#dynamicArea").forEach(cell => {
  cell.textContent = area;
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