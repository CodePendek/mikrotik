const ticket = document.getElementById("ticket")

const close = document.querySelectorAll("#close")
ticket.addEventListener("click", ()=>{
  document.querySelector(".ticket").showModal()
})

close.forEach(c => {
  c.addEventListener('click', (e)=>{
    e.target.parentElement.close()
  })
})