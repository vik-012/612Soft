// theme switch event
const checkBox = document.querySelector(
      'input[type="checkbox"]'
   ) as HTMLInputElement;
   checkBox?.addEventListener("click", () => {
      let value = checkBox.checked;
      const div = document.querySelector("div.typing") as HTMLElement;
      if (value) {
         document.documentElement.classList.add("dark");
         div.classList.add("dark"); // para cambiar el titulo con efecto de typing
      } else {
         document.documentElement.classList.remove("dark");
         div.classList.remove("dark");
      }
   });