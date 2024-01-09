import { getAttrs, attrsToString, isExpired } from '../_utils'

const iconElements = document.querySelectorAll('[data-i]')
const isPurgeIcons = document.querySelector('body.is-purge-icons')
const ICONS_STORAGE = 'meteorIcons'
const ICONS_DATE_STORAGE = 'meteorIconsDate'

function iconElement (icons = {}) {
  iconElements.forEach((iconElement) => {
    const icon = iconElement.getAttribute('data-i')
    const allAttributes = Array.from(iconElement.attributes).filter(attribute => attribute.nodeName !== 'data-i')
    const svgString = icons[icon] || icons.circle

    const parser = new DOMParser()

    const svgAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 24 24',
      ...getAttrs(allAttributes)
    }

    // Combinar el atributo class con el atributo class del svg
    if (svgAttrs.class) {
      svgAttrs.class = `i i-${icon} ${svgAttrs.class}`
    } else {
      svgAttrs.class = `i i-${icon}`
    }

    const svgTemplate = `<svg ${attrsToString(svgAttrs)}>${svgString}</svg>`
    const svg = parser.parseFromString(svgTemplate, 'image/svg+xml').querySelector('svg')

    iconElement.parentNode.replaceChild(svg, iconElement)
  })
}

const iconsMeteor = () => {
  fetch('https://cdn.jsdelivr.net/npm/meteor-icons@3/variants/icons.json')
    .then(response => response.json())
    .then(icons => {
      localStorage.setItem(ICONS_STORAGE, JSON.stringify(icons))
      localStorage.setItem(ICONS_DATE_STORAGE, new Date())
      iconElement(icons)
    })
    .catch(error => console.error(error))
}

function removeCache () {
  localStorage.removeItem(ICONS_STORAGE)
  localStorage.removeItem(ICONS_DATE_STORAGE)
}

const initIcons = () => {
  if (iconElements.length === 0) return
  const expired = isExpired(ICONS_DATE_STORAGE)
  console.log('expired', expired)

  if (isExpired(ICONS_DATE_STORAGE)) {
    removeCache()
  }

  if (!localStorage.getItem(ICONS_STORAGE)) {
    iconsMeteor()
  } else if (isPurgeIcons) {
    removeCache()
    iconsMeteor()
  } else {
    iconElement(JSON.parse(localStorage.getItem(ICONS_STORAGE)))
    // Borrar del almacenamiento "meteorIcons" si la fecha es mayor a 7 días
  }
}

initIcons()
