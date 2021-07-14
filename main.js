import './css/reset.css'
import './css/style.scss'

import SubscribeFormHandler from './js/subcribe-form-handler'
import Accordion from './js/accordion'
import TabsSlider from './js/tabs-slider'

customElements.define('my-accordion', Accordion)
customElements.define('tabs-slider', TabsSlider)

document.addEventListener('DOMContentLoaded', function() {

  const menu = document.querySelector('nav')
  document.querySelector('.toggle').addEventListener('click', function(e) {
    e.preventDefault()

    menu.classList.toggle('opened')
    document.body.classList.toggle('menu-opened')
    window.scrollTo(0, 0)
  })

  const handler = new SubscribeFormHandler({
    formSelector: 'form.sub'
  })
})
