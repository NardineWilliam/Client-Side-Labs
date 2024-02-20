document.addEventListener("DOMContentLoaded", function () {
  fetch("https://dummyjson.com/users/1")
    .then((response) => response.json())
    .then((data) => {
      displayUserData(data);
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
    });
});

function displayUserData(userData) {
  const userImage = document.getElementById("user-image");
  const userEmail = document.getElementById("user-email");

  userImage.src = userData.image;
  userEmail.textContent = userData.email;
}
