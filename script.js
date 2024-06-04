const modal = document.querySelector("dialog")
const btnModal = document.querySelector(".open")
const btnClose = document.querySelector(".close")


btnModal.addEventListener("click", ()=>{
  modal.showModal()
} )

btnClose.addEventListener("click", ()=>{
  modal.close()
})