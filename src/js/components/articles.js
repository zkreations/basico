import { loadScript } from '../utils'
import { initToc } from './toc'

const ARTICLE = document.querySelector('.post')

const HAS_HIGHLIGHT_CLASS = 'has-highlight'
const HAS_COPY_BUTTON_CLASS = 'has-copy-code'
const COPIED_CLASS = 'is-copied'

async function initHighlight () {
  try {
    await loadScript('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/highlight.min.js')
    // eslint-disable-next-line no-undef
    hljs.highlightAll()
  } catch (err) {
    console.error(err)
  }
}

function makeIds (content) {
  const headings = content.querySelectorAll('h1, h2, h3, h4, h5, h6, h7')
  const headingMap = {}

  headings.forEach((heading) => {
    const originalId = heading.id
    const normalizedId = originalId || heading.textContent
      .trim()
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .split(/\s+/)
      .join('-')
      .replace(/\//g, '-')

    headingMap[normalizedId] = (headingMap[normalizedId] || 0) + 1

    if (headingMap[normalizedId] > 1) {
      heading.id = `${normalizedId}-${headingMap[normalizedId]}`
    } else {
      heading.id = normalizedId
    }
  })
}

function addCopyButtonToCodeBlock (codeBlock) {
  if (!navigator || !navigator.clipboard) return

  const clipboard = navigator.clipboard

  const $button = document.createElement('button')
  $button.className = 'code-copy'

  $button.addEventListener('click', function () {
    clipboard.writeText(codeBlock.textContent).then(function () {
      $button.blur()
      $button.classList.add(COPIED_CLASS)
      $button.disabled = true

      setTimeout(function () {
        $button.disabled = false
        $button.classList.remove(COPIED_CLASS)
      }, 2000)
    })
  })

  const pre = codeBlock.parentNode
  pre.insertBefore($button, pre.firstChild)
}

function initializeArticle () {
  if (!ARTICLE) return

  makeIds(ARTICLE)

  const hasHighlight = ARTICLE.classList.contains(HAS_HIGHLIGHT_CLASS)
  const hasCopyButton = ARTICLE.classList.contains(HAS_COPY_BUTTON_CLASS)
  const toc = ARTICLE.querySelector('.toc')
  const blocks = ARTICLE.querySelectorAll('pre > code')

  initToc(ARTICLE, toc)

  if (blocks.length === 0) return

  hasHighlight && initHighlight()

  hasCopyButton && blocks.forEach(function (codeBlock) {
    addCopyButtonToCodeBlock(codeBlock)
  })
}

initializeArticle()
