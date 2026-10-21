(() => {
  const button = document.querySelector("[data-blog-top]");
  if (!button) return;
  const update = () => button.classList.toggle("is-visible", window.scrollY > 400);
  window.addEventListener("scroll", update, { passive: true });
  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
    document.querySelector(".blog-brand").focus({ preventScroll: true });
  });
  update();
})();