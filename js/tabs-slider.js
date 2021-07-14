export default class TabsSlider extends HTMLElement {

  constructor() { 
    super()
    this.style.display = 'block'
    this.heads = this.querySelectorAll('.tabs-header li')
    this.items = this.querySelectorAll('.tabs-body .tab-item')

    this.heads.forEach((el) => {
      el.addEventListener('click', this.change)
    })
  }

  change = (event) => {
    event.preventDefault()

    let indexClicked = null
    this.heads.forEach((el, index) => {
      if (el === event.currentTarget) {
        el.classList.add('active')
        indexClicked = index
      }
      else {
        el.classList.remove('active')
      }
    })

    this.items.forEach((el, index) => {
      if (index === indexClicked) {
        el.classList.add('active')
      }
      else {
        el.classList.remove('active')
      }
    })
  }
}
