let menu = document.querySelector("#menu-btn")
let navbar = document.querySelector(".navbar")

menu.onclick = () => {
  menu.classList.toggle("fa-times")
  navbar.classList.toggle("active")
}

window.onscroll = () => {
  menu.classList.remove("fa-times")
  navbar.classList.remove("active")
}

 

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("ModoDark")
  const body = document.body

  toggle.addEventListener("click", function () {
    this.classList.toggle("bi-moon")
    if (this.classList.contains("bi-moon")) {
      body.style.background = "white"
      body.style.color = "black"
      body.style.transition = "2s"
    } else {
      body.style.background = "black"
      body.style.color = "white"
      body.style.transition = "2s"
    }
  })
})
