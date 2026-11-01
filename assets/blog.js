(() => {
  const button = document.querySelector("[data-blog-top]");
  if (button) {
    const update = () => button.classList.toggle("is-visible", window.scrollY > 400);
    window.addEventListener("scroll", update, { passive: true });
    button.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
      document.querySelector(".blog-brand").focus({ preventScroll: true });
    });
    update();
  }

  const themeToggle = document.querySelector("[data-blog-theme-toggle]");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const isDark = document.documentElement.getAttribute("data-theme") === "dark" ||
        (!document.documentElement.getAttribute("data-theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
      const nextTheme = isDark ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", nextTheme);
      try {
        localStorage.setItem("site-theme", nextTheme);
      } catch (e) {}
    });
  }
})();
