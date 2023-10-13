const NAVS = document.querySelectorAll('.nav')
const ACTIVE_CLASS = 'is-open'

NAVS.forEach(NAV => {
  const SUBNAV_LINKS = NAV.querySelectorAll('.nav-subnav .nav-link')
  const SUBNAV_TOGGLES = NAV.querySelectorAll('.has-subnav .nav-item-toggle')

  if (SUBNAV_LINKS.length) {
    SUBNAV_LINKS.forEach(link => {
      const LINK_TEXT = link.textContent.trim()
      link.textContent = LINK_TEXT.replace(/^_+/, '')
    })
  }

  if (SUBNAV_TOGGLES.length) {
    SUBNAV_TOGGLES.forEach(toggle => {
      toggle.addEventListener('click', e => {
        e.preventDefault()
        toggle.parentNode.classList.toggle(ACTIVE_CLASS)
      })
    })
  }

  document.addEventListener('click', e => {
    if (!NAV.contains(e.target)) {
      NAV.querySelectorAll('.has-subnav').forEach(item => {
        item.classList.remove(ACTIVE_CLASS)
      })
    }
  })
})
