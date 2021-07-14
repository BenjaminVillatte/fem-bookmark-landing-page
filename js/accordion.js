export default class Accordion extends HTMLElement {

  constructor() {
    super()

    this.items = this.getItems()
    this.items.forEach(el => {
      el.querySelector('.head').addEventListener('click', this.toggle)
    })
  }

  toggle = (event) => {
    this.items.forEach((el) => {
      if (el !== event.target.parentNode) {
        el.classList.remove('active')
      }
    })

    event.target.parentNode.classList.toggle('active')
  }



  getItems = () => {
    return this.querySelectorAll('.accordion-item')
  }
}