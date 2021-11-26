const socialMenu = document.getElementById("social_menu");
const toggleButton = document.querySelector(".svg");

toggleButton.addEventListener("click", function () {
  socialMenu.classList.toggle("social_hide");
});
