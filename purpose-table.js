// purpose-table.js

const area = new URLSearchParams(location.search).get("area") || "Unknown";

// Replace all cells with id="dynamicArea"
document.querySelectorAll("#dynamicArea").forEach(cell => {
  cell.textContent = area;
});

function goBack() {
  window.history.back();
}