const hamburger = document.querySelector("#hamburger")
const menu = document.querySelector("#menu")
const sun = document.querySelector("#sun")
const moon = document.querySelector("#moon")
const body = document.querySelector("body")
const hLinks = document.querySelectorAll("#hLink")

hamburger.addEventListener("click", () => {
    menu.classList.toggle("hidden")
    hamburger.classList.toggle("bg-white")
})

hLinks.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.toggle("hidden")
        hamburger.classList.toggle("bg-white")
    })
})

moon.addEventListener("click", () => {
    body.classList.toggle("dark")
})

sun.addEventListener("click", () => {
    body.classList.toggle("dark")
})