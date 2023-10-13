import { loadStyle } from '../_utils'

const BLOG_ID = document.querySelector('meta[name="home-blog-admin"]')
const CSS = 'https://www.blogger.com/dyn-css/authorization.css?targetBlogID='

window.onload = () => {
  if (BLOG_ID) {
    const blogId = BLOG_ID.getAttribute('content')
    loadStyle(`${CSS}${blogId}`)
  }
}
