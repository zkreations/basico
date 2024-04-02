import { loadScript, decodeHtml } from '../utils'

const REG_EXP = /cookieOptions\.(\w+)\) \|\| '(.+)'/g
const cookieJs = '/js/cookienotice.js'

const textarea = document.getElementById('bjs')

const loadCookieScript = () => {
  const textareaContent = textarea.value
  const cookieOptions = window.cookieOptions || {}
  const Default = {}

  textareaContent.replace(REG_EXP, (_, key, value) => {
    Default[key] = decodeHtml(value)
  })

  if (textareaContent.includes(cookieJs)) {
    loadScript(new URL(cookieJs, window.location.origin).href)
      .then(() => {
        const {
          msg = Default.msg,
          close = Default.close,
          learn = Default.learn,
          link = Default.link
        } = cookieOptions

        if (typeof window.cookieChoices?.showCookieConsentBar === 'function') {
          // eslint-disable-next-line no-undef
          cookieChoices.showCookieConsentBar(msg, close, learn, link)
        }
      })
      .catch((err) => {
        console.error(err)
      })
  }
}

if (textarea) {
  loadCookieScript()
  textarea.remove()
}
