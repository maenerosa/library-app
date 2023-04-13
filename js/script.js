const addBtn = document.getElementById("add-btn");
const cancelBtn = document.getElementById("cancel-btn");
const modal = document.getElementById("modal");

addBtn.addEventListener("click", function () {
  modal.style.display = "flex";
});

cancelBtn.addEventListener("click", function () {
  modal.style.display = "none";
});
