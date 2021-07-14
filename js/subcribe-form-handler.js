export default class SubscribeFormHandler {
  constructor(options) {
    this.formSelector = options.formSelector ?? 'form'

    this.form = document.querySelector(this.formSelector)

    this.form.addEventListener('submit', this.submit)
    this.input = this.form.querySelector('input[type="email"]')
  }

  submit = (event) => {
    event.preventDefault()

    this.cleanForm()
    if (!this.validateEmail()) {
      this.handleError()
    }
  }

  validateEmail = () => {
    const regexp = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
    if (regexp.test(this.input.value)) {
      return true
    }

    return false
  }

  cleanForm = () => {
    this.form.querySelectorAll('.form-error').forEach((el) => {
      el.querySelector('.error-message').remove()
      el.classList.remove('form-error')
    })
  }

  handleError = () => {
    const errorNode = document.createElement('p')
    errorNode.classList.add('error-message')
    errorNode.innerText = 'Whoops, make sure it’s an email'
    this.input.parentNode.classList.add('form-error')
    this.input.parentNode.appendChild(errorNode)
  }
}