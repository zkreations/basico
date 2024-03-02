const navElements = document.querySelectorAll('.nav')
const ACTIVE_CLASS = 'is-open'
let isEventListenerActive = false

// Remove the underscore from the subnav links
// @param {NodeList} links - The link elements
function handleSubnavLinks (links) {
  links.forEach(link => {
    link.textContent = link.textContent
      .trim()
      .replace(/^_+/, '')
  })
}

navElements.forEach(nav => {
  const subnavLinks = nav.querySelectorAll('.nav-subnav .nav-link')
  const subnavToggles = nav.querySelectorAll('.has-subnav .nav-item-toggle')

  handleSubnavLinks(subnavLinks)

  subnavToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      toggle.parentNode.classList.toggle(ACTIVE_CLASS)

      const isOpen = nav.querySelector(`.${ACTIVE_CLASS}`)

      if (isOpen && !isEventListenerActive) {
        document.addEventListener('click', clickOutside)
        isEventListenerActive = true
      }
    })
  })

  function clickOutside (event) {
    if (!nav.contains(event.target)) {
      nav.querySelectorAll('.has-subnav').forEach(item => {
        item.classList.remove(ACTIVE_CLASS)
      })

      document.removeEventListener('click', clickOutside)
      isEventListenerActive = false
    }
  }
})
