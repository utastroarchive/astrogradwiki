// Show "Back to Top" button when scrolled down
document.addEventListener("DOMContentLoaded", function () {
  const button = document.createElement("button");
  button.innerText = "↑ Top";
  button.id = "back-to-top";
  button.title = "Go to top";
  document.body.appendChild(button);

  button.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  window.addEventListener("scroll", () => {
    button.style.display = window.scrollY > 300 ? "block" : "none";
  });
});
