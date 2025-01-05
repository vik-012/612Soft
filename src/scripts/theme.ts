const colorSchemeMedia = window.matchMedia("(prefers-color-scheme: dark)");
let remove: (() => void) | null = null;
const themesMenu = document.getElementById("themes-menu");

const getThemePreference = () => {
   if (typeof localStorage !== "undefined") {
      return localStorage.getItem("theme") ?? "system";
   }

   return colorSchemeMedia.matches
      ? "dark"
      : "light";
};

const updateIcon = (themePreference: string) => {
   document.querySelectorAll(".theme-toggle-icon").forEach((element) => {
      (element as HTMLElement).style.scale = element.id === themePreference ? "1" : "0";
   });
};

const updateTheme = () => {
   console.log("updateTheme");
   if (remove != null) {
      console.log("remove is not null");
      remove();
   }
   console.log("add event listener");
   colorSchemeMedia.addEventListener("change", updateTheme);
   remove = () => {
      colorSchemeMedia.removeEventListener("change", updateTheme);
   };

   const themePreference = getThemePreference();
   console.log("themePreference", themePreference);
   const isDark =
      themePreference === "dark" ||
      (themePreference === "system" && colorSchemeMedia.matches);

   updateIcon(themePreference);
   document.documentElement.classList[isDark ? "add" : "remove"]("dark");
};

updateTheme();

document.addEventListener("click", () => themesMenu?.classList.add("hidden"));

document.getElementById("theme-toggle-btn")?.addEventListener("click", (e) => {
   console.log("theme-toggle-btn");
   e.stopPropagation();
   const isClosed = !themesMenu?.classList.contains("hidden");
   console.log("isClosed", isClosed);
   themesMenu?.classList[isClosed ? "add" : "remove"]("hidden");
});

document.querySelectorAll(".themes-menu-option").forEach((element) => {
   element.addEventListener("click", (e) => {
      localStorage.setItem("theme", (e.target as HTMLElement)?.innerText?.toLowerCase().trim());
      updateTheme();
   });
});

document.addEventListener("astro:after-swap", () => {
   updateTheme();
   window.scrollTo({
      left: 0,
      top: 0,
      behavior: "instant",
   });
});
