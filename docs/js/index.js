import App from "./App.js";

document.addEventListener("DOMContentLoaded", (e) => {
  App();
  // Establecer una cookie
  setCookie("user", "John Doe", 7);

  // Obtener una cookie
  const user = getCookie("user");
  console.log("User:", user);

  // Borrar una cookie
  // eraseCookie("user");
});

window.addEventListener("load", (e) => App());

// Función para establecer una cookie
function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Función para obtener una cookie
function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// Función para borrar una cookie
function eraseCookie(name) {
  document.cookie = name + "=; Max-Age=-99999999;";
}
