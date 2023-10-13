// Delete the class 'preload' from the body when the page is loaded
window.addEventListener('DOMContentLoaded', (event) => {
  document.body.classList.remove('preload')
})

// Remove 'm' parameter from URL
const url = new URL(window.location.href)
const mobileParam = url.searchParams.get('m')

if (mobileParam) {
  url.searchParams.delete('m')
  window.history.replaceState({}, '', url)
}
