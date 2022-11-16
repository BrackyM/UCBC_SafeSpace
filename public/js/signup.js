const signupHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username-input").value.trim();
  const email = document.querySelector("#email-input").value.trim();
  const password = document.querySelector("#password-input").value.trim();
  const avatar = document.querySelector("#avatar-input").value
  console.log({ username, email, password });
  if (username && email && password) {
    const response = await fetch("/signup", {
      method: "POST",
      body: JSON.stringify({ username, email, password, avatar}),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/login");
    } else {
      alert("Failed to sign up.");
    }
  }
};

const signupBtn = document.querySelector(".signup");

signupBtn.addEventListener("submit", signupHandler);
