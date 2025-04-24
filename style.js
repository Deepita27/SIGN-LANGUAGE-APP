function searchVideo() {
    const input = document.getElementById("searchInput").value.trim().toLowerCase();
    const videoContainer = document.getElementById("videoPlayerContainer");
    const gifContainer = document.getElementById("gifPlayerContainer");
    const videoPlayer = document.getElementById("videoPlayer");
    const gifImage = document.getElementById("gifPlayer");
  
    // Update your list with new videos and gifs
    const videoMap = {
      "hello": "videos/hello.mp4",
      "alphabets": "videos/alphabets.mp4",
      "hi": "videos/HII.gif",
      "what are you doing": "videos/what are you doing.gif",
      "how are you doing": "videos/how are you doing.gif",
      "i do not know": "videos/i do not know.gif",
      "practice": "videos/practice.mp4",
      "water": "videos/water.gif",
      "ice cream": "videos/ice cream.gif",
      "watermelon": "videos/watermelon.gif",
      "potato": "videos/potato.gif"
    };
  
    const selectedFile = videoMap[input];
  
    // If input doesn't match any video or gif, alert the user
    if (!selectedFile) {
      alert("Video/GIF not found. Try: hello, alphabets, hi, what are you doing, how are you doing, i do not know.");
      videoContainer.style.display = "none";
      gifContainer.style.display = "none";
      return;
    }
  
    // Check if the selected file is an mp4 or gif and load accordingly
    if (selectedFile.endsWith(".mp4")) {
      videoPlayer.querySelector("source").src = selectedFile;
      videoPlayer.load();
      videoContainer.style.display = "block";
      gifContainer.style.display = "none";
    } else if (selectedFile.endsWith(".gif")) {
      gifImage.src = selectedFile;
      gifContainer.style.display = "block";
      videoContainer.style.display = "none";
    }
  }
  