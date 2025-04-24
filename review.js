document.addEventListener("DOMContentLoaded", () => {
    const reviewForm = document.getElementById("reviewForm");
    const reviewsSection = document.querySelector(".reviews");
  
    // Load stored reviews from localStorage
    const storedReviews = JSON.parse(localStorage.getItem("userReviews")) || [];
  
    storedReviews.forEach(({ name, review }) => {
      const reviewCard = createReviewCard(name, review);
      reviewsSection.appendChild(reviewCard);
    });
  
    // Form submission
    reviewForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const name = document.getElementById("name").value.trim();
      const review = document.getElementById("review").value.trim();
  
      if (name && review) {
        const newReview = { name, review };
  
        // Save to localStorage
        storedReviews.push(newReview);
        localStorage.setItem("userReviews", JSON.stringify(storedReviews));
  
        // Add to the page immediately
        const reviewCard = createReviewCard(name, review);
        reviewsSection.appendChild(reviewCard);
  
        // Clear the form
        reviewForm.reset();
  
        // Show popup first, then redirect
        alert("Review successfully submitted!");
        window.location.href = "main.html";
      }
    });
  
    // Helper function to create a review card
    function createReviewCard(name, review) {
      const div = document.createElement("div");
      div.className = "review-card";
      div.innerHTML = `
        <div class="user">
          <strong>${name}</strong>
          <span>@${name.toLowerCase().replace(/\s+/g, '')}</span>
        </div>
        <p>${review}</p>
      `;
      return div;
    }
  });
  