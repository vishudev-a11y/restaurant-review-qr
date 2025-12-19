const stars = document.querySelectorAll(".star");
const ratingText = document.getElementById("rating-text");
const commentsSection = document.getElementById("comments-section");
const lowRatingMsg = document.getElementById("low-rating-msg");

let selectedRating = 5;

// Preselect 5 stars
highlightStars(selectedRating);

stars.forEach(star => {
  star.addEventListener("click", () => {
    selectedRating = star.getAttribute("data-value");
    highlightStars(selectedRating);
   ratingText.textContent = `You selected ${selectedRating} stars`;

if (selectedRating >= 4) {
  commentsSection.style.display = "block";
  lowRatingMsg.style.display = "none";
} else {
  commentsSection.style.display = "none";
  lowRatingMsg.style.display = "block";
}

  });
});

function highlightStars(rating) {
  stars.forEach(star => {
    const value = star.getAttribute("data-value");
    star.classList.toggle("active", value <= rating);
  });
}

const copyButtons = document.querySelectorAll(".copy-btn");
const copyStatus = document.getElementById("copy-status");

copyButtons.forEach(button => {
  button.addEventListener("click", () => {
    const commentText = button.previousElementSibling.textContent;
    navigator.clipboard.writeText(commentText).then(() => {
      copyStatus.textContent = "Review copied ✔";
      setTimeout(() => {
        copyStatus.textContent = "";
      }, 2000);
    });
  });
});

const continueBtn = document.getElementById("continue-btn");

continueBtn.addEventListener("click", () => {
  if (selectedRating >= 4) {
    window.location.href = "https://g.page/your-restaurant/review";
  } else {
    window.location.href = "https://forms.gle/your-feedback-form";
  }
});



