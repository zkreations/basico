const TOGGLE = document.querySelector('.js-scheme')
const isPreview = document.body.classList.contains('is-preview')
const STORE_KEY = 'current_theme'

// Modo Oscuro
const toggleMode = () => {
  const html = document.documentElement
  const meta = document.querySelector('meta[name="color-scheme"]')
  const mode = (!isPreview && localStorage.getItem(STORE_KEY)) || html.dataset.theme || 'light'
  const newMode = mode === 'dark' ? 'light' : 'dark'

  html.dataset.theme = newMode
  meta.content = newMode

  if (!isPreview) {
    localStorage.setItem(STORE_KEY, newMode)
  }
}

TOGGLE && TOGGLE.addEventListener('click', toggleMode)
