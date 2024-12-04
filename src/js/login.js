const form = document.querySelector("form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

// Data email dan password untuk sementara dulu
const TEMP_EMAIL = "test@gmail.com";
const TEMP_PASSWORD = "test123";

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (email === TEMP_EMAIL && password === TEMP_PASSWORD) {
    window.location.href = "./pages/landing.html";
  } else {
    alert("Email atau kata sandi tidak valid. Silakan coba lagi dengan benar.");
  }
});
