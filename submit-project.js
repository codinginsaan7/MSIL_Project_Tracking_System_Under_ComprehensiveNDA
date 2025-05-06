document.addEventListener("DOMContentLoaded", () => {
    const submitBtn = document.querySelector(".submit-btn");
    submitBtn.addEventListener("click", () => {
      document.getElementById("projectConfirmationModal").style.display = "flex";
    });
  });

  function closeProjectModal() {
    // Hide modal first
    document.getElementById("projectConfirmationModal").style.display = "none";
    // Redirect after 300ms for smoothness
    setTimeout(() => {
      window.location.href = "project-dashboard.html";
    }, 100);
  }

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