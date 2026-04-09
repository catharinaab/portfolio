import './style.css'

document.addEventListener("click", (e) => {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;

  e.preventDefault();

  const target = document.querySelector(link.getAttribute("href"));
  if (target) {
    window.scrollTo({
      top: target.offsetTop,
      behavior: "smooth"
    });
  }
});