// on load de la pagina
window.addEventListener("load", () => {
   console.log("load event");
    let value = localStorage.theme as string;
    const div = document.querySelector("div.typing") as HTMLElement;
    const checkBox = document.querySelector(
       'input[type="checkbox"]'
    ) as HTMLInputElement;
    if (value == "dark") {
        //document.documentElement.classList.add("dark");
        div.classList.add("dark"); // para cambiar el titulo con efecto de typing
        checkBox.checked = true;
     } else {
        //document.documentElement.classList.remove("dark");
        div.classList.remove("dark");
        checkBox.checked = false;
     }
});