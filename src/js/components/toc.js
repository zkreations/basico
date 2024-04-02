const POST_BODY_CLASS = '.post-body'

const createTocLink = (heading) => {
  const $a = document.createElement('a')
  $a.href = `#${heading.id}`
  $a.className = 'toc-link'
  $a.innerHTML = heading.innerText
  return $a
}

const createTocItem = (heading) => {
  const $li = document.createElement('li')
  const level = heading.tagName.charAt(1)
  $li.appendChild(createTocLink(heading))
  $li.dataset.level = level
  $li.className = 'toc-item'
  return $li
}

const insertTocItemIntoList = (list, heading) => {
  const item = createTocItem(heading)
  list.appendChild(item)
  return item
}

const createOrGetTocList = (element) => {
  const existingOl = element.querySelector('ol')
  if (existingOl) {
    return existingOl
  }
  const $ol = document.createElement('ol')
  $ol.classList.add('toc-list')
  element.appendChild($ol)
  return $ol
}

const insertTocItem = (element, heading) => {
  const level = heading.tagName.charAt(1)

  if (element.tagName.toLowerCase() === 'ol') {
    return insertTocItemIntoList(element, heading)
  }

  if (level > element.dataset.level) {
    const ol = createOrGetTocList(element)
    return insertTocItemIntoList(ol, heading)
  }

  if (!element.parentNode.parentNode) {
    return insertTocItemIntoList(element.parentNode, heading)
  }

  return insertTocItem(element.parentNode.parentNode, heading)
}

export const initToc = (container, output) => {
  if (!container) {
    return
  }

  const articleBody = container.querySelector(POST_BODY_CLASS)
  const autoToc = container.dataset.autoToc || false

  if (!output && !autoToc) {
    return
  }

  const tocHeadings = container.dataset.tocHeadings || 'h2, h3, h4'

  const selectors = `:where(${tocHeadings}):not(.toc-ignore)`
  const headings = articleBody.querySelectorAll(selectors)
  const paragraphs = articleBody.querySelectorAll('p')

  const button = '<input class="none" id="toc-toggle" type="checkbox"><label class="toc-toggle" for="toc-toggle"></label>'

  const $list = document.createElement('ol')
  $list.classList.add('toc-list')
  let element = $list

  headings.forEach((heading) => {
    element = insertTocItem(element, heading)
  })

  const $div = document.createElement('div')
  $div.classList.add('toc-content')
  $div.appendChild($list)

  if (!output && autoToc) {
    const $toc = document.createElement('div')
    $toc.classList.add('toc')
    $toc.innerHTML = button
    $toc.appendChild($div)
    $toc.classList.add('toc-loaded')

    switch (autoToc) {
    case 'before-first-h':
      articleBody.insertBefore($toc, headings[0].previousSibling)
      break
    case 'after-first-h':
      articleBody.insertBefore($toc, headings[0].nextSibling)
      break
    case 'before-first-p':
      articleBody.insertBefore($toc, paragraphs[0].previousSibling)
      break
    case 'after-first-p':
      articleBody.insertBefore($toc, paragraphs[0].nextSibling)
      break
    default:
      articleBody.insertBefore($toc, articleBody.firstChild)
    }
  } else if (output) {
    output.innerHTML = button
    output.appendChild($div)
    output.classList.add('toc-loaded')
  }
}
