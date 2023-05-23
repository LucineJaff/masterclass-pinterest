//Header.js
import "./Header.css"

const template = () => {
  return`
  <h1>I</h1>
  <input type="text" placeholder="Search" id="searchinput"/>
  <button id="searchbtn"><img src="/images/search.png" alt="Search icon"/></button>
  <button id="darkmodebtn"><img src="/images/dark.png" alt="Dark mode icon"/ id="darkmodeicon"></button>
  <img
    src="/images/profile.jpg"
    alt="Profile image"
    class="profileimg"
  />
    `
}

const themeSwitch = () => {
  document.body.classList.toggle("dark")
}

const listeners = () => {
  const darkmodebtn = document.querySelector("#darkmodebtn")
  darkmodebtn.addEventListener("click", () => {
    themeSwitch()
    const theme = document.body.classList.contains("dark")
    if (theme) {
      document.querySelector("#darkmodeicon").src = "/images/light.png"
      localStorage.setItem("theme", "dark")
    } else {
      document.querySelector("#darkmodeicon").src = "/images/dark.png"
      localStorage.setItem("theme", "light")
    }
  })
  //If we have a theme saved in the localStorage that puts it
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark")
  }
}

export const printTemplate = () => {
  document.querySelector("header").innerHTML = template()
  listeners()
}
