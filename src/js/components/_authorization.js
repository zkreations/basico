import { loadStyle } from '../_utils'

const BLOG_ID = document.querySelector('meta[name="home-blog-admin"]')
const CSS = 'https://www.blogger.com/dyn-css/authorization.css?targetBlogID='

if (BLOG_ID) {
  window.onload = () => {
    const blogId = BLOG_ID.getAttribute('content')
    loadStyle(`${CSS}${blogId}`)
  }
}
