  // Pre-fill Business Area
  const area = new URLSearchParams(location.search).get("area");
  document.getElementById("businessArea").value = area || "";

  // On form submit, show modal
  const form = document.querySelector(".purpose-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent actual submission
    document.getElementById("confirmationModal").style.display = "flex";
  });

  function closeModal() {
    window.location.href = 'purpose-dashboard.html'; // Redirect to Page 4
  }

  function goBack() {
    window.history.back();
  }

