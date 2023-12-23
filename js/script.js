const header = document.querySelector(".header");
const hamburgerBtn = document.querySelector(".mobile-navmenu-btn");
hamburgerBtn.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});

const allLinks = document.querySelectorAll("a:link");
const blogTop = document.querySelector(".page-title");

const observer = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null, // observing intersections relative to the viewport
    threshold: 0, // callback will run when 0% of target is visible
    rootMargin: "220px", // set this to header height if that's causing flashing
  }
);

// observer.observe(blogTop);

// allLinks.forEach((link) => {
//   link.addEventListener("click", (e) => {
//     e.preventDefault(); // Prevent the default anchor link behavior
//     const href = link.getAttribute("href");

//     if (href === "#") {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     } else if (href.startsWith("#")) {
//       const scrollToEl = document.querySelector(href);
//       const topOffset = 220; // change this value to the offset you desire
//       const elementPosition =
//         scrollToEl.getBoundingClientRect().top + window.pageYOffset;
//       const offsetPosition = elementPosition + topOffset;

//       window.scrollTo({
//         top: offsetPosition,
//         behavior: "smooth",
//       });
//     }

//     // Close the mobile navigation after clicking a link, if it's open
//     if (header.classList.contains("nav-open")) {
//       header.classList.remove("nav-open");
//     }
//   });
// });
