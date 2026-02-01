document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signupForm");

  form?.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmpassword").value;

    if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas !");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    users.push({ username, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    localStorage.setItem("loggedInUser", email);
    alert("Inscription réussie !");
    window.location.href = "index.html";
  });
});
