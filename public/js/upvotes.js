const voteHandler = (event) =>  {
    event.preventDefault();

}

const upvoteBtn = document.querySelector(".btn-upvote-comment");

upvoteBtn.addEventListener("submit", voteHandler);
