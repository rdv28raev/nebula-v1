document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  form?.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const found = users.find(u => u.email === email && u.password === password);

    if (found) {
      localStorage.setItem("loggedInUser", email);
      alert("Connexion réussie !");
      window.location.href = "index.html";
    } else {
      alert("Email ou mot de passe incorrect !");
    }
  });
});
