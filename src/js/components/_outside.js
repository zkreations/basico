const buttons = document.querySelectorAll('[data-outside]')
const ACTIVE_CLASS = 'is-active'

// Toggle the target element
// @param {HTMLElement} button - The button element
function outsideClick (button) {
  if (!button) return

  const target = document.getElementById(button.dataset.outside)
  const affected = document.getElementById(button.dataset.affected)

  if (!target) return

  function toggleClasses () {
    button.classList.toggle(ACTIVE_CLASS)
    target.classList.toggle(ACTIVE_CLASS)

    if (affected) affected.classList.toggle(ACTIVE_CLASS)

    if (button.classList.contains(ACTIVE_CLASS)) {
      document.addEventListener('click', clickOutside)
      return
    }

    document.removeEventListener('click', clickOutside)
  }

  button.addEventListener('click', toggleClasses)

  function clickOutside (event) {
    if (!target.contains(event.target) && !button.contains(event.target)) {
      toggleClasses()
      document.removeEventListener('click', clickOutside)
    }
  }

  const closeButton = target.querySelector('[data-close]')

  if (closeButton) {
    closeButton.addEventListener('click', toggleClasses)
  }
}

buttons.forEach((button) => {
  outsideClick(button)
})
