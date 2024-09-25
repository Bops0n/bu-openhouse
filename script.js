const exampleModal = document.getElementById('exampleModal')
if (exampleModal != null) {
  exampleModal.addEventListener('show.bs.modal', event => {
  const button = event.relatedTarget
  const recipient = button.getAttribute('data-bs-whatever')
  const body = button.getAttribute('data-bs-body')
  const modalTitle = exampleModal.querySelector('.modal-title')
  const modalBodyInput = exampleModal.querySelector('.modal-body-text')

  modalTitle.textContent = `${recipient}`
  modalBodyInput.textContent = `${body}`
})
}

const ImgModal = document.getElementById('imgModal')
if (ImgModal != null) {
    ImgModal.addEventListener('show.bs.modal', event => {
  const button = event.relatedTarget
  const recipient = button.getAttribute('data-bs-whatever')
    document.getElementById('modal-img').src = recipient
  modalTitle.textContent = `New message to ${recipient}`
})
}


