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
    window.location.href = "https://www.google.com/search?sca_esv=f0158aba78c19323&sxsrf=AE3TifP5Ix0WGEcRphYqlppSyW8Lsg25_A:1765561832148&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E1EdzLhzsx_mgQL-CzX6F-XGneKXNObolDubZcQG79wUiJq64UJDw-AcMXGGLajwoUUO0zVakjJc6ziBbA2qp00Md8RD0tZ6TmTKGBvKYmEmFhY9aw%3D%3D&q=SS+CRAVE+KITCHEN+Reviews&sa=X&ved=2ahUKEwj4-NWuzriRAxWh4TgGHUZSJd0Q0bkNegQIHxAE&biw=1536&bih=730&dpr=1.25#lrd=0x3bcb9999af937fd9:0x6655ed48a446c67,3";
  } else {
    window.location.href = "https://forms.gle/your-feedback-form";
  }
});



