const loginHandler = async (event) => {
  event.preventDefault();
//email and password input
  const email = document.querySelector("#email-input").value.trim();
  const password = document.querySelector("#password-input").value.trim();
//search email and password input throw stringify
  if (email && password) {
    const response = await fetch("/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in.");
    }
  }
};

document.querySelector(".login").addEventListener("submit", loginHandler);
