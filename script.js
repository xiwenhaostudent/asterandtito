const search = document.querySelector('.search-box input')
const images = document.querySelectorAll('.image-box')

search.addEventListener('keyup', e => {
  if (e.key == 'Enter') {
    let searchValue = search.value
    let value = searchValue.toLowerCase()
    images.forEach(image => {
      // if(value === image.dataset.name)
      if (image.dataset.name.includes(value)) {
        return image.style.display = 'block'
      }
      image.style.display = 'none'
    })
    console.log(value)
  }
})

search.addEventListener('keyup', () => {
  if (search.value != '') return

  images.forEach(image => {
    image.style.display = 'block'
  })
})

document.querySelectorAll('.image-box img').forEach(image => {
  image.onclick = () => {
    document.querySelector('.popup-img').style.display = 'block'
    document.querySelector('.popup-img img').src = image.getAttribute('src')
  }
})

document.querySelector('.popup-img span').onclick = () => {
  document.querySelector('.popup-img').style.display = 'none'
}

