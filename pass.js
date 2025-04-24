document.getElementById("resetForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;

  if (email) {
    alert(`Password reset link sent to ${email}`);
    // You can add logic to send the email to your backend here.
    document.getElementById("resetForm").reset();
  } else {
    alert("Please enter a valid email address.");
  }
});
