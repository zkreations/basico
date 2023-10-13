import {
  resizeImage,
  isYoutubeUrl,
  getDataAttrs,
  shuffle,
  isObserver
} from '../_utils'

const container = document.getElementById('related-posts')

const Default = {
  homepage: window.location.origin,
  id: 0,
  image: '',
  maxResults: 3,
  shuffleLevel: 5,
  imageSize: 'w300-h225-p-k-no-nu-rw-l80-e30',
  ytThumbnail: 'mqdefault',
  rootMargin: '200px'
}

function getPostId (entry) {
  return entry.id.$t.split('.post-')[1]
}

function createQueryByTags (labels) {
  return JSON.parse(labels).map((label) => `label:"${label}"`).join('|')
}

function getAlternateLink (links) {
  for (const link of links) {
    if (link.rel === 'alternate') {
      return link.href
    }
  }
}

function getFirstImage (html) {
  const temporal = document.createElement('div')
  temporal.innerHTML = html

  const img = temporal.querySelector('img')
  return img ? img.src : ''
}

function createEntry (entry) {
  const $item = document.createElement('a')
  const $title = document.createElement('div')
  const $imgContainer = document.createElement('div')

  $item.className = 'related-item flex column g-1'
  $imgContainer.className = 'related-image ratio ratio-4:3 color-text flex items-center justify-center i-m'
  $title.classList.add('related-title')

  if (entry.image) {
    const $img = document.createElement('img')

    $img.className = 'related-image-src image-fit'
    $img.src = entry.image
    $img.alt = 'thumbnail'

    $item.classList.add('has-image')

    $imgContainer.appendChild($img)
  } else {
    $imgContainer.innerHTML = `
      <svg class="i i-quote-right" viewBox="0 0 24 24">
        <path d="M10 11H5V6h5v7a4 5 0 0 1-4 5m13-7h-5V6h5v7a4 5 0 0 1-4 5"></path>
      </svg>
    `
  }

  $item.href = entry.url
  $title.textContent = entry.title

  $item.appendChild($imgContainer)
  $item.appendChild($title)
  return $item
}

function sanitizeEntry (entry, options) {
  const content = entry.content?.$t || entry.summary.$t
  const title = entry.title.$t
  const url = getAlternateLink(entry.link)
  let image = entry.media$thumbnail?.url || getFirstImage(content) || options.image

  image = image !== '' ? resizeImage(image, (isYoutubeUrl(image) ? options.ytThumbnail : options.imageSize)) : null

  return {
    image,
    title,
    url
  }
}

function relatedPosts (data, options) {
  if (data.feed.entry) {
    let entries = data.feed.entry

    if (options.shuffleLevel) {
      entries = entries.filter((entry) => getPostId(entry) !== options.id)
      entries = shuffle(entries).slice(0, options.maxResults)
    }

    const processedData = entries.map((entry) => sanitizeEntry(entry, options))

    const $fragment = document.createDocumentFragment()

    if (processedData.length === 0) {
      container.classList.add('related-is-empty')
      return
    }

    processedData.forEach((entry) => {
      const $entry = createEntry(entry)
      $fragment.appendChild($entry)
    })

    container.innerHTML = ''
    container.classList.add('related-is-loaded')
    container.appendChild($fragment)
  }
}

function createFeedScript (options) {
  const $script = document.createElement('script')
  let feedUrl = `${options.homepage}/feeds/posts/summary?alt=json-in-script&callback=relatedPosts`

  if (options.tags) {
    feedUrl += `&q=${createQueryByTags(options.tags)}`
  }

  feedUrl += `&max-results=${options.maxResults + options.shuffleLevel}`
  $script.src = feedUrl
  document.body.appendChild($script).parentNode.removeChild($script)
}

if (container) {
  const options = {
    ...Default,
    ...getDataAttrs(container)
  }

  window.relatedPosts = (data) => relatedPosts(data, options)

  isObserver(container, () => {
    createFeedScript(options)
  }, {
    rootMargin: options.rootMargin
  })
}
