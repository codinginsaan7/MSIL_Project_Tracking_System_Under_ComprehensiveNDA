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

