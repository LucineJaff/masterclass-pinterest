import './Gallery.css'
import { template as Card } from '../Card/Card'
import { searchPhotos } from "../../utils/searchPhotos"

const template = () => {
  return`
    <ul class="gallery">
    </ul>
    `
}

const printItems = (items) => {
  const gallery = document.querySelector(".gallery")
  gallery.innerHTML = ""
  for (const item of items) {
    gallery.innerHTML += Card(item)
  }
}

const listeners = async() => {
  const input = document.querySelector("#searchinput")
  const btn = document.querySelector("#searchbtn")
  btn.addEventListener("click", async() => {
    const images = await searchPhotos(input.value)
    printItems(images.response.results)
  })
}

export const printTemplate = async() => {
  document.querySelector("main").innerHTML = template()
  listeners()
  //If you can obtain information in the images object of the localStorage, paint them for me
  if (localStorage.getItem("images")) {
    const images = localStorage.getItem("images")
    printItems(JSON.parse(images))
    //And if you don't look for me images of the moon
  } else {
    const images = await searchPhotos("moon")
    printItems(images.response.results)
  }
}
