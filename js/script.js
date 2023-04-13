const openModal = document.getElementById("open-modal");
const closeModal = document.getElementById("cancel-modal");
const modal = document.getElementById("modal");

openModal.addEventListener("click", function () {
  modal.style.display = "flex";
});

closeModal.addEventListener("click", function () {
  modal.style.display = "none";
});
