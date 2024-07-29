document.addEventListener("DOMContentLoaded", () => {
   const observer: IntersectionObserver = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
         entries.forEach((entry: IntersectionObserverEntry) => {
            if (entry.isIntersecting) {
               entry.target.classList.remove("opacity-0", "translate-y-4");
            }
         });
      },
      {
         rootMargin: "0px",
         threshold: 0.1,
      }
   );

   const sections: NodeListOf<Element> =
      document.querySelectorAll(".observeMe");
   sections.forEach((section: Element) => {
      observer.observe(section);
   });
});