"use strict"

const excelente = document.querySelector(".Excelente")
const bad = document.querySelector(".bad")
const stars = document.querySelectorAll(".star")

// close
const close = document.querySelector(".close")
const close2 = document.querySelector(".close2")
const main = document.querySelector(".main")
const rateBox = document.querySelector(".rate-box")
const rate = document.querySelector(".rate")

// home
const home = document.querySelector(".home")
const menu = document.querySelector(".menu")
const retu = document.querySelector(".return")

// again
const again = document.querySelector(".again")
const search = document.querySelector(".search")

// functions..

const closemain = function () {
  main.classList.add("scale-0", "opacity-0", "-z-10")
}

const openmain = function () {
  main.classList.remove("scale-0", "opacity-0", "-z-10")
}

excelente.addEventListener("click", function () {
  stars.forEach((s) => {
    s.classList.add("fill-current")
    excelente.classList.add("text-white")
    bad.classList.remove("text-white")
  })
})

bad.addEventListener("click", function () {
  stars.forEach((s) => {
    s.classList.remove("fill-current")
    bad.classList.add("text-white")
    excelente.classList.remove("text-white")
  })
})

stars.forEach((s) => {
  s.addEventListener("click", function () {
    s.classList.toggle("fill-current")
  })
})

// rate
close.addEventListener("click", () => {
  closemain()
  rateBox.classList.remove("translate-x-full", "opacity-0", "-z-10", "w-0")
})

rate.addEventListener("click", () => {
  openmain()
  rateBox.classList.add("translate-x-full", "opacity-0", "-z-10", "w-0")
})

// home
retu.addEventListener("click", () => {
  closemain()
  home.classList.remove("translate-x-full", "opacity-0", "-z-10", "w-0")
})

menu.addEventListener("click", () => {
  openmain()
  home.classList.add("translate-x-full", "opacity-0", "-z-10", "w-0")
})

// agina
again.addEventListener("click", () => {
  closemain()
  search.classList.remove("opacity-0", "-z-10", "scale-0")
})

close2.addEventListener("click", () => {
  openmain()
  search.classList.add("opacity-0", "-z-10", "scale-0")
})
