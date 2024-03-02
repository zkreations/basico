(function () {
  'use strict';

  // Delete the class 'preload' from the body when the page is loaded
  window.addEventListener('DOMContentLoaded', event => {
    document.body.classList.remove('preload');
  });

  // Load a script from a URL and return a promise
  // @param {string} src
  // @returns {Promise}
  const loadScript = src => new Promise((resolve, reject) => {
    const $script = document.createElement('script');
    $script.src = src;
    $script.onload = resolve;
    $script.onerror = reject;
    document.body.appendChild($script);
  });

  // Load a stylesheet from a URL and return a promise
  // @param {string} href
  // @returns {Promise}
  const loadStyle = href => new Promise((resolve, reject) => {
    const $link = document.createElement('link');
    $link.href = href;
    $link.rel = 'stylesheet';
    $link.onload = resolve;
    $link.onerror = reject;
    document.head.appendChild($link);
  });

  // Decode HTML entities
  // @param {string} string
  // @returns {string}
  const decodeHtml = string => {
    return string.replace(/\\x(\w{2})/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)));
  };

  // Check if the element is in the viewport
  // @param {Object} element - The element object
  // @param {Function} fn - The function to execute
  // @param {Object} options - The options object
  function isObserver(element, fn, options) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          fn();
          observer.unobserve(entry.target);
        }
      });
    }, {
      ...options
    });
    observer.observe(element);
  }

  // Get the attributes of an element
  // @param {Object} attributes - The attributes object
  // @returns {Object} - The attributes object
  function getAttrs(attributes) {
    return attributes.reduce((acc, attribute) => {
      acc[attribute.nodeName] = attribute.nodeValue;
      return acc;
    }, {});
  }

  // Convert an object of attributes to a string
  // @param {Object} attrs - The attributes object
  // @returns {string} - The attributes string
  function attrsToString(attrs) {
    return Object.keys(attrs).map(key => `${key}="${attrs[key]}"`).join(' ');
  }

  // Normalize the data
  // @param {string} value - The value to normalize
  // @return {any}
  function normalizeData(value) {
    if (value === 'true') {
      return true;
    }
    if (value === 'false') {
      return false;
    }
    if (Number(value).toString() === value) {
      return Number(value);
    }
    if (value === 'null' || value === '') {
      return null;
    }
    return value;
  }

  // Get the data attributes from the element
  // @param {Object} dataset - The dataset object
  // @return {Object}
  function getDataAttrs(_ref) {
    let {
      dataset = {}
    } = _ref;
    const attributes = {};
    Object.keys(dataset).forEach(key => {
      attributes[key] = normalizeData(dataset[key]);
    });
    return attributes;
  }

  // Shuffles the array
  // @param {Array} array - The array to shuffle
  // @return {Array}
  function shuffle(array) {
    const length = array ? array.length : 0;
    if (!length) {
      return [];
    }
    const result = [...array];
    for (let index = 0; index < length; index++) {
      const rand = index + Math.floor(Math.random() * (length - index));
      [result[index], result[rand]] = [result[rand], result[index]];
    }
    return result;
  }

  // Check if the url is a youtube url
  // @param {string} url - The url to check
  // @return {boolean}
  function isYoutubeUrl(url) {
    if (url == null || typeof url !== 'string') return false;
    return url.includes('img.youtube.com');
  }

  // Check if the url is new blogger url
  // @param {string} url - The url to check
  // @return {boolean}
  function isNewBloggerUrl(url) {
    if (url == null || typeof url !== 'string') return false;
    return url.includes('googleusercontent.com/img/a/');
  }

  // Change the size of the image hosted in Google Servers
  // @param {string} imgUrl - The url of the image
  // @param {string} size - https://zkreations.com/image-params
  // @return {string}
  function resizeImage(imgUrl, size) {
    const REG_EXP = /s\d{2}(-w\d{3}-h\d{3})?(?:-c(?:-n)?)/;
    if (isNewBloggerUrl(imgUrl)) {
      return imgUrl.replace(/=(.*)$/, `=${size}`);
    }
    if (isYoutubeUrl(imgUrl)) {
      return imgUrl.replace('default', size);
    }
    return imgUrl.replace(REG_EXP, size);
  }

  // Check if the current date exceeded the expiration date
  // @param {string} key - The key of the localStorage
  // @return {boolean}
  const isExpired = key => {
    const date = localStorage.getItem(key);
    if (date) {
      const now = new Date();
      const diff = now - new Date(date);
      const days = diff / 1000 / 60 / 60 / 24;
      return days > 7;
    }
    return true;
  };

  const REG_EXP = /cookieOptions\.(\w+)\) \|\| '(.+)'/g;
  const cookieJs = '/js/cookienotice.js';
  const textarea = document.getElementById('bjs');
  const loadCookieScript = () => {
    const textareaContent = textarea.value;
    const cookieOptions = window.cookieOptions || {};
    const Default = {};
    textareaContent.replace(REG_EXP, (_, key, value) => {
      Default[key] = decodeHtml(value);
    });
    if (textareaContent.includes(cookieJs)) {
      loadScript(new URL(cookieJs, window.location.origin).href).then(() => {
        const {
          msg = Default.msg,
          close = Default.close,
          learn = Default.learn,
          link = Default.link
        } = cookieOptions;
        if (typeof window.cookieChoices?.showCookieConsentBar === 'function') {
          // eslint-disable-next-line no-undef
          cookieChoices.showCookieConsentBar(msg, close, learn, link);
        }
      }).catch(err => {
        console.error(err);
      });
    }
  };
  if (textarea) {
    loadCookieScript();
    textarea.remove();
  }

  const COMMENT_FORM = document.getElementById('comment-form');
  const FORM_SCRIPT = document.getElementById('form-script');
  const FORM_RESTORE = document.getElementById('form-restore');
  const REPLY_BUTTONS = document.querySelectorAll('[data-parent-id]');
  const ACTIVE_CLASS$1 = 'is-active';
  const REPLYING_CLASS = 'is-replying';
  const HAS_REPLY_FORM_CLASS = 'has-reply-form';
  const rootMargin = '200px';
  function loadDisqus(container) {
    const {
      shortname,
      postUrl,
      postId
    } = container.dataset;
    window.disqus_config = function () {
      this.page.url = postUrl;
      this.page.identifier = postId;
    };
    const script = document.createElement('script');
    script.src = `https://${shortname}.disqus.com/embed.js`;
    script.setAttribute('data-timestamp', +new Date());
    document.head.appendChild(script);
  }
  function initDisqus() {
    const DISQUS = document.getElementById('disqus_thread');
    const DISQUS_BUTTON = document.getElementById('disqus_btn');
    const DISQUS_COMMENT_COUNT = document.querySelector('.disqus-comment-count');
    if (DISQUS_COMMENT_COUNT) {
      const {
        shortname
      } = DISQUS_COMMENT_COUNT.dataset;
      loadScript(`https://${shortname}.disqus.com/count.js`);
    }
    if (!DISQUS) return;
    if (DISQUS_BUTTON) {
      DISQUS_BUTTON.onclick = () => {
        loadDisqus(DISQUS);
        DISQUS_BUTTON.remove();
      };
    } else {
      isObserver(DISQUS, () => {
        loadDisqus(DISQUS);
      }, {
        rootMargin
      });
    }
  }
  function loadRelayScript(textarea) {
    if (!textarea) return;
    const src = textarea.value.replace(/<script.*?src='(.*?)'.*?><\/script>/, '$1');
    textarea.remove();
    loadScript(src)
    // eslint-disable-next-line no-undef
    .then(() => BLOG_CMT_createIframe('https://www.blogger.com/rpc_relay.html')).catch(err => console.error(err));
  }
  function createIframe(template, newSrc) {
    if (!template) return;
    const regex = /<iframe[^>]*\s+src="([^"]*)"/i;
    const match = template.match(regex);
    const originalSrc = match[1];
    const form = newSrc ? template.replace(originalSrc, newSrc) : template;
    return {
      originalSrc,
      form
    };
  }
  const replyComments = buttons => {
    // Load relay script
    isObserver(COMMENT_FORM, () => {
      loadRelayScript(FORM_SCRIPT);
    }, {
      rootMargin
    });
    if (!buttons) {
      return;
    }
    const template = COMMENT_FORM.innerHTML;
    const {
      originalSrc,
      form: originalForm
    } = createIframe(template);
    const replyContainer = document.createElement('div');
    replyContainer.id = 'reply-form';
    let currentActiveButton;
    buttons.forEach(button => {
      button.onclick = () => {
        const parent = button.dataset.parentId;
        const container = document.querySelector(`#c${parent} .comments-replies`);
        const currentReply = document.getElementById('reply-form');
        if (currentActiveButton === button) {
          return;
        }
        if (currentReply) {
          currentReply.parentElement.classList.remove(HAS_REPLY_FORM_CLASS);
          currentReply.remove();
        } else {
          COMMENT_FORM.innerHTML = '';
          FORM_RESTORE.classList.add(REPLYING_CLASS);
        }
        if (currentActiveButton) {
          currentActiveButton.classList.remove(ACTIVE_CLASS$1);
        }
        const newSrc = `${originalSrc}&parentID=${parent}`;
        const {
          form: newForm
        } = createIframe(template, newSrc);
        button.classList.add(ACTIVE_CLASS$1);
        currentActiveButton = button;
        replyContainer.innerHTML = newForm;
        container.classList.add(HAS_REPLY_FORM_CLASS);
        container.insertAdjacentElement('afterbegin', replyContainer);
      };
    });
    if (!FORM_RESTORE) {
      return;
    }
    FORM_RESTORE.onclick = () => {
      if (currentActiveButton) {
        const currentReply = document.getElementById('reply-form');
        FORM_RESTORE.classList.remove(REPLYING_CLASS);
        COMMENT_FORM.innerHTML = originalForm;
        currentActiveButton.classList.remove(ACTIVE_CLASS$1);
        currentActiveButton = null;
        currentReply.parentElement.classList.remove(HAS_REPLY_FORM_CLASS);
        currentReply.remove();
      }
    };
  };
  if (COMMENT_FORM) {
    replyComments(REPLY_BUTTONS);
  }
  initDisqus();

  const navElements = document.querySelectorAll('.nav');
  const ACTIVE_CLASS = 'is-open';
  let isEventListenerActive = false;

  // Remove the underscore from the subnav links
  // @param {NodeList} links - The link elements
  function handleSubnavLinks(links) {
    links.forEach(link => {
      link.textContent = link.textContent.trim().replace(/^_+/, '');
    });
  }
  navElements.forEach(nav => {
    const subnavLinks = nav.querySelectorAll('.nav-subnav .nav-link');
    const subnavToggles = nav.querySelectorAll('.has-subnav .nav-item-toggle');
    handleSubnavLinks(subnavLinks);
    subnavToggles.forEach(toggle => {
      toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle(ACTIVE_CLASS);
        const isOpen = nav.querySelector(`.${ACTIVE_CLASS}`);
        if (isOpen && !isEventListenerActive) {
          document.addEventListener('click', clickOutside);
          isEventListenerActive = true;
        }
      });
    });
    function clickOutside(event) {
      if (!nav.contains(event.target)) {
        nav.querySelectorAll('.has-subnav').forEach(item => {
          item.classList.remove(ACTIVE_CLASS);
        });
        document.removeEventListener('click', clickOutside);
        isEventListenerActive = false;
      }
    }
  });

  const buttons = document.querySelectorAll('[data-outside]');

  // Función para cerrar un elemento al hacer click fuera de él
  // @param {HTMLElement} button Botón que abre el elemento
  function outsideClick(button) {
    if (!button) return;
    const target = document.getElementById(button.dataset.outside);
    if (!target) return;
    button.addEventListener('click', () => {
      button.classList.toggle('is-active');
      target.classList.toggle('is-active');
    });
    const clickOutside = event => {
      if (!target.contains(event.target) && !button.contains(event.target)) {
        button.classList.remove('is-active');
        target.classList.remove('is-active');
      }
    };
    document.addEventListener('click', clickOutside);
  }

  // Recorrer todos los botones que tengan el atributo data-outside
  buttons.forEach(button => {
    outsideClick(button);
  });

  const POST_BODY_CLASS = '.post-body';
  const createTocLink = heading => {
    const $a = document.createElement('a');
    $a.href = `#${heading.id}`;
    $a.className = 'toc-link';
    $a.innerHTML = heading.innerText;
    return $a;
  };
  const createTocItem = heading => {
    const $li = document.createElement('li');
    const level = heading.tagName.charAt(1);
    $li.appendChild(createTocLink(heading));
    $li.dataset.level = level;
    $li.className = 'toc-item';
    return $li;
  };
  const insertTocItemIntoList = (list, heading) => {
    const item = createTocItem(heading);
    list.appendChild(item);
    return item;
  };
  const createOrGetTocList = element => {
    const existingOl = element.querySelector('ol');
    if (existingOl) {
      return existingOl;
    }
    const $ol = document.createElement('ol');
    $ol.classList.add('toc-list');
    element.appendChild($ol);
    return $ol;
  };
  const insertTocItem = (element, heading) => {
    const level = heading.tagName.charAt(1);
    if (element.tagName.toLowerCase() === 'ol') {
      return insertTocItemIntoList(element, heading);
    }
    if (level > element.dataset.level) {
      const ol = createOrGetTocList(element);
      return insertTocItemIntoList(ol, heading);
    }
    if (!element.parentNode.parentNode) {
      return insertTocItemIntoList(element.parentNode, heading);
    }
    return insertTocItem(element.parentNode.parentNode, heading);
  };
  const initToc = (container, output) => {
    if (!container) {
      return;
    }
    const articleBody = container.querySelector(POST_BODY_CLASS);
    const autoToc = container.dataset.autoToc || false;
    if (!output && !autoToc) {
      return;
    }
    const tocHeadings = container.dataset.tocHeadings || 'h2, h3, h4';
    const selectors = `:where(${tocHeadings}):not(.toc-ignore)`;
    const headings = articleBody.querySelectorAll(selectors);
    const paragraphs = articleBody.querySelectorAll('p');
    const button = '<input class="none" id="toc-toggle" type="checkbox"><label class="toc-toggle" for="toc-toggle"></label>';
    const $list = document.createElement('ol');
    $list.classList.add('toc-list');
    let element = $list;
    headings.forEach(heading => {
      element = insertTocItem(element, heading);
    });
    const $div = document.createElement('div');
    $div.classList.add('toc-content');
    $div.appendChild($list);
    if (!output && autoToc) {
      const $toc = document.createElement('div');
      $toc.classList.add('toc');
      $toc.innerHTML = button;
      $toc.appendChild($div);
      $toc.classList.add('toc-loaded');
      switch (autoToc) {
        case 'before-first-h':
          articleBody.insertBefore($toc, headings[0].previousSibling);
          break;
        case 'after-first-h':
          articleBody.insertBefore($toc, headings[0].nextSibling);
          break;
        case 'before-first-p':
          articleBody.insertBefore($toc, paragraphs[0].previousSibling);
          break;
        case 'after-first-p':
          articleBody.insertBefore($toc, paragraphs[0].nextSibling);
          break;
        default:
          articleBody.insertBefore($toc, articleBody.firstChild);
      }
    } else if (output) {
      output.innerHTML = button;
      output.appendChild($div);
      output.classList.add('toc-loaded');
    }
  };

  const ARTICLE = document.querySelector('.post');
  const HAS_HIGHLIGHT_CLASS = 'has-highlight';
  const HAS_COPY_BUTTON_CLASS = 'has-copy-code';
  const COPIED_CLASS = 'is-copied';
  async function initHighlight() {
    try {
      await loadScript('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/highlight.min.js');
      // eslint-disable-next-line no-undef
      hljs.highlightAll();
    } catch (err) {
      console.error(err);
    }
  }
  function makeIds(content) {
    const headings = content.querySelectorAll('h1, h2, h3, h4, h5, h6, h7');
    const headingMap = {};
    headings.forEach(heading => {
      const originalId = heading.id;
      const normalizedId = originalId || heading.textContent.trim().toLowerCase().replace(/[^\w\s-]/g, '').split(/\s+/).join('-').replace(/\//g, '-');
      headingMap[normalizedId] = (headingMap[normalizedId] || 0) + 1;
      if (headingMap[normalizedId] > 1) {
        heading.id = `${normalizedId}-${headingMap[normalizedId]}`;
      } else {
        heading.id = normalizedId;
      }
    });
  }
  function addCopyButtonToCodeBlock(codeBlock) {
    if (!navigator || !navigator.clipboard) return;
    const clipboard = navigator.clipboard;
    const $button = document.createElement('button');
    $button.className = 'code-copy';
    $button.addEventListener('click', function () {
      clipboard.writeText(codeBlock.textContent).then(function () {
        $button.blur();
        $button.classList.add(COPIED_CLASS);
        $button.disabled = true;
        setTimeout(function () {
          $button.disabled = false;
          $button.classList.remove(COPIED_CLASS);
        }, 2000);
      });
    });
    const pre = codeBlock.parentNode;
    pre.insertBefore($button, pre.firstChild);
  }
  function initializeArticle() {
    if (!ARTICLE) return;
    makeIds(ARTICLE);
    const hasHighlight = ARTICLE.classList.contains(HAS_HIGHLIGHT_CLASS);
    const hasCopyButton = ARTICLE.classList.contains(HAS_COPY_BUTTON_CLASS);
    const toc = ARTICLE.querySelector('.toc');
    const blocks = ARTICLE.querySelectorAll('pre > code');
    initToc(ARTICLE, toc);
    if (blocks.length === 0) return;
    hasHighlight && initHighlight();
    hasCopyButton && blocks.forEach(function (codeBlock) {
      addCopyButtonToCodeBlock(codeBlock);
    });
  }
  initializeArticle();

  const TOGGLE = document.querySelector('.js-scheme');
  const isPreview = document.body.classList.contains('is-preview');
  const STORE_KEY = 'current_theme';

  // Modo Oscuro
  const toggleMode = () => {
    const html = document.documentElement;
    const meta = document.querySelector('meta[name="color-scheme"]');
    const mode = !isPreview && localStorage.getItem(STORE_KEY) || html.dataset.theme || 'light';
    const newMode = mode === 'dark' ? 'light' : 'dark';
    html.dataset.theme = newMode;
    meta.content = newMode;
    if (!isPreview) {
      localStorage.setItem(STORE_KEY, newMode);
    }
  };
  TOGGLE && TOGGLE.addEventListener('click', toggleMode);

  const iconElements = document.querySelectorAll('[data-i]');
  const isPurgeIcons = document.querySelector('body.is-purge-icons');
  const ICONS_STORAGE = 'meteorIcons';
  const ICONS_DATE_STORAGE = 'meteorIconsDate';
  function iconElement() {
    let icons = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    iconElements.forEach(iconElement => {
      const icon = iconElement.getAttribute('data-i');
      const allAttributes = Array.from(iconElement.attributes).filter(attribute => attribute.nodeName !== 'data-i');
      const svgString = icons[icon] || icons.circle;
      const parser = new DOMParser();
      const svgAttrs = {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 24 24',
        ...getAttrs(allAttributes)
      };

      // Combinar el atributo class con el atributo class del svg
      if (svgAttrs.class) {
        svgAttrs.class = `i i-${icon} ${svgAttrs.class}`;
      } else {
        svgAttrs.class = `i i-${icon}`;
      }
      const svgTemplate = `<svg ${attrsToString(svgAttrs)}>${svgString}</svg>`;
      const svg = parser.parseFromString(svgTemplate, 'image/svg+xml').querySelector('svg');
      iconElement.parentNode.replaceChild(svg, iconElement);
    });
  }
  const iconsMeteor = () => {
    fetch('https://cdn.jsdelivr.net/npm/meteor-icons@3/variants/icons.json').then(response => response.json()).then(icons => {
      localStorage.setItem(ICONS_STORAGE, JSON.stringify(icons));
      localStorage.setItem(ICONS_DATE_STORAGE, new Date());
      iconElement(icons);
    }).catch(error => console.error(error));
  };
  function removeCache() {
    localStorage.removeItem(ICONS_STORAGE);
    localStorage.removeItem(ICONS_DATE_STORAGE);
  }
  const initIcons = () => {
    if (iconElements.length === 0) return;
    const expired = isExpired(ICONS_DATE_STORAGE);
    console.log('expired', expired);
    if (isExpired(ICONS_DATE_STORAGE)) {
      removeCache();
    }
    if (!localStorage.getItem(ICONS_STORAGE)) {
      iconsMeteor();
    } else if (isPurgeIcons) {
      removeCache();
      iconsMeteor();
    } else {
      iconElement(JSON.parse(localStorage.getItem(ICONS_STORAGE)));
      // Borrar del almacenamiento "meteorIcons" si la fecha es mayor a 7 días
    }
  };
  initIcons();

  const BLOG_ID = document.querySelector('meta[name="home-blog-admin"]');
  const CSS = 'https://www.blogger.com/dyn-css/authorization.css?targetBlogID=';
  if (BLOG_ID) {
    window.onload = () => {
      const blogId = BLOG_ID.getAttribute('content');
      loadStyle(`${CSS}${blogId}`);
    };
  }

  const container = document.getElementById('related-posts');
  const Default = {
    homepage: window.location.origin,
    id: 0,
    image: '',
    maxResults: 3,
    shuffleLevel: 5,
    imageSize: 'w300-h225-p-k-no-nu-rw-l80-e30',
    ytThumbnail: 'mqdefault',
    rootMargin: '200px'
  };
  function getPostId(entry) {
    return entry.id.$t.split('.post-')[1];
  }
  function createQueryByTags(labels) {
    return JSON.parse(labels).map(label => `label:"${label}"`).join('|');
  }
  function getAlternateLink(links) {
    for (const link of links) {
      if (link.rel === 'alternate') {
        return link.href;
      }
    }
  }
  function getFirstImage(html) {
    const temporal = document.createElement('div');
    temporal.innerHTML = html;
    const img = temporal.querySelector('img');
    return img ? img.src : '';
  }
  function createEntry(entry) {
    const $item = document.createElement('a');
    const $title = document.createElement('div');
    const $imgContainer = document.createElement('div');
    $item.className = 'related-item flex column g-1';
    $imgContainer.className = 'related-image ratio ratio-4:3 color-text flex items-center justify-center i-m';
    $title.classList.add('related-title');
    if (entry.image) {
      const $img = document.createElement('img');
      $img.className = 'related-image-src image-fit';
      $img.src = entry.image;
      $img.alt = 'thumbnail';
      $item.classList.add('has-image');
      $imgContainer.appendChild($img);
    } else {
      $imgContainer.innerHTML = `
      <svg class="i i-quote-right" viewBox="0 0 24 24">
        <path d="M10 11H5V6h5v7a4 5 0 0 1-4 5m13-7h-5V6h5v7a4 5 0 0 1-4 5"></path>
      </svg>
    `;
    }
    $item.href = entry.url;
    $title.textContent = entry.title;
    $item.appendChild($imgContainer);
    $item.appendChild($title);
    return $item;
  }
  function sanitizeEntry(entry, options) {
    const content = entry.content?.$t || entry.summary.$t;
    const title = entry.title.$t;
    const url = getAlternateLink(entry.link);
    let image = entry.media$thumbnail?.url || getFirstImage(content) || options.image;
    image = image !== '' ? resizeImage(image, isYoutubeUrl(image) ? options.ytThumbnail : options.imageSize) : null;
    return {
      image,
      title,
      url
    };
  }
  function relatedPosts(data, options) {
    if (data.feed.entry) {
      let entries = data.feed.entry;
      if (options.shuffleLevel) {
        entries = entries.filter(entry => getPostId(entry) !== options.id);
        entries = shuffle(entries).slice(0, options.maxResults);
      }
      const processedData = entries.map(entry => sanitizeEntry(entry, options));
      const $fragment = document.createDocumentFragment();
      if (processedData.length === 0) {
        container.classList.add('related-is-empty');
        return;
      }
      processedData.forEach(entry => {
        const $entry = createEntry(entry);
        $fragment.appendChild($entry);
      });
      container.innerHTML = '';
      container.classList.add('related-is-loaded');
      container.appendChild($fragment);
    }
  }
  function createFeedScript(options) {
    const $script = document.createElement('script');
    let feedUrl = `${options.homepage}/feeds/posts/summary?alt=json-in-script&callback=relatedPosts`;
    if (options.tags) {
      feedUrl += `&q=${createQueryByTags(options.tags)}`;
    }
    feedUrl += `&max-results=${options.maxResults + options.shuffleLevel}`;
    $script.src = feedUrl;
    document.body.appendChild($script).parentNode.removeChild($script);
  }
  if (container) {
    const options = {
      ...Default,
      ...getDataAttrs(container)
    };
    window.relatedPosts = data => relatedPosts(data, options);
    isObserver(container, () => {
      createFeedScript(options);
    }, {
      rootMargin: options.rootMargin
    });
  }

})();
