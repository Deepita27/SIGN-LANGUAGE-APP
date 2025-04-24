document.getElementById("reviewForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value;
    const profession = document.getElementById("profession").value;
    const review = document.getElementById("review").value;
  
    alert(`Thanks for your story, ${name}!\n\nProfession: ${profession}\n\nYour Tale:\n${review}`);
    
    this.reset();
  });
  