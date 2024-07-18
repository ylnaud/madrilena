function App() {
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Funcionalidad para la ventana modal
  const modal = document.getElementById("modal-derechos");
  const btn = document.getElementById("derechos-autor");
  const span = document.getElementsByClassName("close")[0];

  if (btn) {
    btn.addEventListener("click", () => {
      if (modal) {
        modal.style.display = "block";
      }
    });
  }

  if (span) {
    span.addEventListener("click", () => {
      if (modal) {
        modal.style.display = "none";
      }
    });
  }

  window.addEventListener("click", (e) => {
    if (modal && e.target == modal) {
      modal.style.display = "none";
    }
  });
}

export default App;
