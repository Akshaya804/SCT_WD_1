// Navbar style change on scroll
const navbar = document.querySelector(".navbar");

function onScrollNav() {
  if (window.scrollY > 20) navbar.classList.add("scrolled");
  else navbar.classList.remove("scrolled");
}
window.addEventListener("scroll", onScrollNav);
onScrollNav();

// Highlight active link based on current page
const current = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".navlinks a").forEach(a => {
  const href = a.getAttribute("href");
  if (href === current) a.classList.add("active");
});
