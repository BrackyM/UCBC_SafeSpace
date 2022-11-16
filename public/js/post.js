s
const posthandler = async (event) => {
  event.preventDefault();

  const createPost = document.querySelector("#post-input").value.trim();
  const createLink = document.querySelector("#video-input").value.trim();
  console.log({ createPost, createLink });
  if (createPost) {
    const response = await fetch("/createPost", {
      method: "POST",
      body: JSON.stringify({ createPost, createLink }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed Post.");
    }
  }
};

const postSubmitBtn = document.querySelector(".post");

postSubmitBtn.addEventListener("submit", posthandler);
