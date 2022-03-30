`use strict`;

window.addEventListener("DOMContentLoaded", setup);

function setup() {
  console.log("setup");

  toggleTheme();
}

function toggleTheme() {
  let theme = localStorage.getItem("data-theme");

  // Change theme to dark by adding the `dark` classname to html element.
  const changeThemeToDark = () => {
    document.documentElement.setAttribute("data-theme", "dark"); //set theme to dark
    localStorage.setItem("data-theme", "dark"); //save theme to local storage
    console.log("I give you dark");
  };

  // Reset the html class to default
  const changeThemeToLight = () => {
    document.documentElement.setAttribute("data-theme", "light"); //set theme to dark
    localStorage.setItem("data-theme", "light");
    console.log("I give you light");
  };

  if (theme === "dark") {
    changeThemeToDark();
  }

  // Get the element based on ID
  const checkbox = document.querySelector("#switch");
  checkbox.addEventListener("change", () => {
    let theme = localStorage.getItem("data-theme"); // Retrieve saved them from local storage
    if (theme === "dark") {
      changeThemeToLight();
    } else {
      changeThemeToDark();
    }
  });
}
