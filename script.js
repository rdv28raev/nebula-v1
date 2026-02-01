document.addEventListener("DOMContentLoaded", () => {
  const topMenu = document.getElementById("topMenu");
  const loginBtn = document.getElementById("loginbutton");
  const signupBtn = document.getElementById("signupbutton");
  const logoutBtn = document.getElementById("logoutbutton");

  function updateMenu() {
    const user = localStorage.getItem("loggedInUser");
    if (user) {
      topMenu.style.display = "block";
      loginBtn.style.display = "none";
      signupBtn.style.display = "none";
      logoutBtn.style.display = "inline-block";
    } else {
      topMenu.style.display = "none";
      loginBtn.style.display = "inline-block";
      signupBtn.style.display = "inline-block";
      logoutBtn.style.display = "none";
    }
  }

  updateMenu();

  loginBtn.addEventListener("click", () => window.location.href = "login.html");
  signupBtn.addEventListener("click", () => window.location.href = "signup.html");
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("loggedInUser");
    updateMenu();
  });
});
