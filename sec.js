const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      sections.forEach(sec => sec.classList.remove("active"));
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.3 }); 
sections.forEach(section => observer.observe(section));
