import React from "react"
import "../components/slideshow.scss"

const Slideshow = () => {
  return (
    <div className="slider__container">
      <div className="slider__item__container current">
        <div className="slider__item__content">
          <h1>Slide One</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora
            corporis tempore ab non, adipisci, deserunt ut alias minus aliquid
            error saepe veritatis. Deserunt consequatur omnis officiis sapiente
            eaque aliquid?
          </p>
        </div>
      </div>

      <div className="slider__item__container">
        <div className="slider__item__content">
          <h1>Slide Two</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora
            corporis tempore ab non, adipisci, deserunt ut alias minus aliquid
            error saepe veritatis. Deserunt consequatur omnis officiis sapiente
            eaque aliquid?
          </p>
        </div>
      </div>

      <div className="slider__item__container">
        <div className="slider__item__content">
          <h1>Slide Three</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora
            corporis tempore ab non, adipisci, deserunt ut alias minus aliquid
            error saepe veritatis. Deserunt consequatur omnis officiis sapiente
            eaque aliquid?
          </p>
        </div>
      </div>

      <div className="slider__item__container">
        <div className="slider__item__content">
          <h1>Slide Four</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora
            corporis tempore ab non, adipisci, deserunt ut alias minus aliquid
            error saepe veritatis. Deserunt consequatur omnis officiis sapiente
            eaque aliquid?
          </p>
        </div>
      </div>

      <div className="slider__item__container">
        <div className="slider__item__content">
          <h1>Slide Five</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora
            corporis tempore ab non, adipisci, deserunt ut alias minus aliquid
            error saepe veritatis. Deserunt consequatur omnis officiis sapiente
            eaque aliquid?
          </p>
        </div>
      </div>

      <div className="slider__button__container">
        <button id="slider__button__prev">
          <i className="fas fa-chevron-left" />
        </button>
        <button id="slider__button__next">
          <i className="fas fa-chevron-right" />
        </button>
      </div>
    </div>
  )
}

// const slides = document.querySelectorAll('.slider__item__container')
// const nextButton = document.querySelector('#slider__button__next') 
// const prevButton = document.querySelector('#slider__button__prev')
// const auto = true
// const intervalTime = 5000
// let slideInterval

// const nextSlide = () => {
//   const current = document.querySelector('.current')
//   const buttonContainer = document.querySelector('#___gatsby > div > div > div > div > div.slider__button__container')
//   current.classList.remove('current')
//   if (current.nextElementSibling !== buttonContainer) {
//     current.nextElementSibling.classList.add('current')
//   } else {
//     slides[0].classList.add('current')
//   }
//   setTimeout(() => current.classList.remove('current'))
// }

// const prevSlide = () => {
//   const current = document.querySelector('.current')
//   current.classList.remove('current')
//   if (current.previousElementSibling) {
//     current.previousElementSibling.classList.add('current')
//   } else {
//     slides[slides.length -1].classList.add('current')
//   }
//   setTimeout(() => current.classList.remove('current'))
// }

// if (nextButton) {
//   nextButton.addEventListener('click', e => {
//     nextSlide()
//     if (auto) {
//       clearInterval(slideInterval)
//       slideInterval = setInterval(nextSlide, intervalTime)
//     }
//   })
// }

// if (prevButton) {
//   prevButton.addEventListener('click', e => {
//     prevSlide()
//     if (auto) {
//       clearInterval(slideInterval)
//       slideInterval = setInterval(prevSlide, intervalTime)
//     }
//   })
// }

// if (auto) {
//   slideInterval = setInterval(nextSlide, intervalTime)
// }

export default Slideshow
