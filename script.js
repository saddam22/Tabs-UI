const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // Remove active class from all tabs
    tabs.forEach(t => t.classList.remove("border-blue-500", "text-blue-600", "active"));

    // Hide all contents
    contents.forEach(c => c.classList.add("hidden"));

    // Add active class to clicked tab
    tab.classList.add("border-blue-500", "text-blue-600", "active");

    // Show corresponding content
    document.getElementById(tab.dataset.tab).classList.remove("hidden");
  });
});