// Load a script from a URL and return a promise
// @param {string} src
// @returns {Promise}
export const loadScript = (src) => new Promise((resolve, reject) => {
  const $script = document.createElement('script')
  $script.src = src
  $script.onload = resolve
  $script.onerror = reject
  document.body.appendChild($script)
})

// Load a stylesheet from a URL and return a promise
// @param {string} href
// @returns {Promise}
export const loadStyle = (href) => new Promise((resolve, reject) => {
  const $link = document.createElement('link')
  $link.href = href
  $link.rel = 'stylesheet'
  $link.onload = resolve
  $link.onerror = reject
  document.head.appendChild($link)
})

// Decode HTML entities
// @param {string} string
// @returns {string}
export const decodeHtml = (string) => {
  return string.replace(/\\x(\w{2})/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)))
}

// Check if the element is in the viewport
// @param {Object} element - The element object
// @param {Function} fn - The function to execute
// @param {Object} options - The options object
export function isObserver (element, fn, options) {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        fn()
        observer.unobserve(entry.target)
      }
    })
  }, { ...options })

  observer.observe(element)
}

// Get the attributes of an element
// @param {Object} attributes - The attributes object
// @returns {Object} - The attributes object
export function getAttrs (attributes) {
  return attributes.reduce((acc, attribute) => {
    acc[attribute.nodeName] = attribute.nodeValue
    return acc
  }, {})
}

// Convert an object of attributes to a string
// @param {Object} attrs - The attributes object
// @returns {string} - The attributes string
export function attrsToString (attrs) {
  return Object.keys(attrs)
    .map(key => `${key}="${attrs[key]}"`)
    .join(' ')
}

// Normalize the data
// @param {string} value - The value to normalize
// @return {any}
function normalizeData (value) {
  if (value === 'true') {
    return true
  }

  if (value === 'false') {
    return false
  }

  if (Number(value).toString() === value) {
    return Number(value)
  }

  if (value === 'null' || value === '') {
    return null
  }

  return value
}

// Get the data attributes from the element
// @param {Object} dataset - The dataset object
// @return {Object}
export function getDataAttrs ({ dataset = {} }) {
  const attributes = {}

  Object.keys(dataset).forEach((key) => {
    attributes[key] = normalizeData(dataset[key])
  })

  return attributes
}

// Shuffles the array
// @param {Array} array - The array to shuffle
// @return {Array}
export function shuffle (array) {
  const length = array ? array.length : 0
  if (!length) {
    return []
  }

  const result = [...array]
  for (let index = 0; index < length; index++) {
    const rand = index + Math.floor(Math.random() * (length - index));
    [result[index], result[rand]] = [result[rand], result[index]]
  }

  return result
}

// Check if the url is a youtube url
// @param {string} url - The url to check
// @return {boolean}
export function isYoutubeUrl (url) {
  if (url == null || typeof url !== 'string') return false

  return url.includes('img.youtube.com')
}

// Check if the url is new blogger url
// @param {string} url - The url to check
// @return {boolean}
export function isNewBloggerUrl (url) {
  if (url == null || typeof url !== 'string') return false

  return url.includes('googleusercontent.com/img/a/')
}

// Change the size of the image hosted in Google Servers
// @param {string} imgUrl - The url of the image
// @param {string} size - https://zkreations.com/image-params
// @return {string}
export function resizeImage (imgUrl, size) {
  const REG_EXP = /s\d{2}(-w\d{3}-h\d{3})?(?:-c(?:-n)?)/

  if (isNewBloggerUrl(imgUrl)) {
    return imgUrl.replace(/=(.*)$/, `=${size}`)
  }

  if (isYoutubeUrl(imgUrl)) {
    return imgUrl.replace('default', size)
  }

  return imgUrl.replace(REG_EXP, size)
}

// Check if the current date exceeded the expiration date
// @param {string} key - The key of the localStorage
// @return {boolean}
export const isExpired = (key) => {
  const date = localStorage.getItem(key)
  if (date) {
    const now = new Date()
    const diff = now - new Date(date)
    const days = diff / 1000 / 60 / 60 / 24
    return days > 7
  }
  return true
}
