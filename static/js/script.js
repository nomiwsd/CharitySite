document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-header");
    const sign = item.querySelector(".toggle-sign");

    header.addEventListener("click", () => {
      item.classList.toggle("active");
      sign.textContent = item.classList.contains("active") ? "-" : "+";
    });
  });
});
function toggleMenu() {
  const navbar = document.querySelector(".navbarsm");
  navbar.classList.toggle("active");
}

// Add the following JavaScript for the accordion functionality
document.addEventListener("DOMContentLoaded", function () {
  const accordionBtns = document.querySelectorAll(".accordion-btn");

  accordionBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      this.classList.toggle("active");
      const content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  });
  const menuToggle = document.querySelector(".menu-toggle");
  menuToggle.addEventListener("click", toggleMenu);
});
function changeColor(button) {
  // Reset background color for all buttons
  document.querySelectorAll(".button_wrapper button").forEach((btn) => {
    btn.style.backgroundColor = btn.classList.contains("main_btns")
      ? "#1b9274"
      : "transparent";

    btn.style.color = btn.classList.contains("main_btns") ? "white" : "#1b9274";
  });

  // Set background color for the clicked button
  button.style.backgroundColor = button.classList.contains("simple_btn")
    ? "#1b9274"
    : "transparent";
  // Set  color for the clicked button
  button.style.color = button.classList.contains("simple_btn")
    ? "white"
    : "#1b9274";
}
document.addEventListener("DOMContentLoaded", function () {

const button = document.getElementById("subscribebtn");
const dialogbox = document.getElementById("myDialog");

button.addEventListener("click", () => {
  dialogbox.showModal();
});

dialogbox.querySelector(".close-button").addEventListener("click", () => {
  dialogbox.close();
});
})