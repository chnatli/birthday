const navBtn = document.querySelector(".nav_btn");
const bg = document.querySelector('.nav_bg');
const navList = document.querySelector('.list');


navBtn.addEventListener("click", () => {
  navBtn.classList.toggle("active");
  bg.classList.toggle("active");
  navList.classList.toggle("active");
});

bg.addEventListener("click", () => {
  bg.classList.remove("active");
  navBtn.classList.remove("active");
  navList.classList.remove("active");
})