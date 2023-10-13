import { getAttrs, attrsToString } from '../_utils'

const iconElements = document.querySelectorAll('[data-i]')

// Replace the icon element with the svg
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

// Get icons from Meteor
function iconsMeteor () {
  fetch('https://cdn.jsdelivr.net/npm/meteor-icons@3/variants/icons.json')
    .then(response => response.json())
    .then(icons => {
      localStorage.setItem('meteorIcons', JSON.stringify(icons))
      iconElement(icons)
    })
    .catch(error => console.error(error))
}

// Initialize icons
function initIcons () {
  if (iconElements.length === 0) return
  if (!localStorage.getItem('meteorIcons')) {
    iconsMeteor()
  } else {
    iconElement(JSON.parse(localStorage.getItem('meteorIcons')))
  }
}

initIcons()
