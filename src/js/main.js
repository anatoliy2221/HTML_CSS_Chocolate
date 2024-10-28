
const btnOpenModal = document.querySelector(".open-modal");
const btnCloseModal = document.querySelector(".modal-btn")
const backdropEl = document.querySelector(".backdrop");

const openModal = () => {
    backdropEl.classList.add("is-open");
}

const closeModal = () => {
    backdropEl.classList.remove("is-open");
}

btnOpenModal.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);














