import { serverQueryContent } from '#content/server'
import RSS from 'rss'

export default defineEventHandler(async (event) => {
  const feed = new RSS({
    title: 'BenCodeZen Blog',
    site_url: 'https://www.bencodezen.io',
    feed_url: 'https://www.bencodezen.io/rss.xml',
  })

  const docs = await serverQueryContent(event)
    .sort({ date: -1 })
    .where({ _partial: false })
    .find()

  const blogPosts = docs.filter((doc) => doc?._path?.includes('/blog'))
  const ghostPosts = await $fetch('/api/ghost')

  const cleanGhostPosts = ghostPosts.map((post) => {
    return {
      title: post.title,
      url: `https://www.bencodezen.io/blog/${post.slug}`,
      date: post.published_at,
      description: post.excerpt,
    }
  })

  for (const post of cleanGhostPosts) {
    feed.item({
      title: post.title,
      url: post.url,
      date: post.date,
      description: post.description,
    })
  }

  for (const doc of blogPosts) {
    feed.item({
      title: doc.title ?? '-',
      url: `https://www.bencodezen.io${doc._path}`,
      date: doc.date,
      description: doc.excerpt,
    })
  }

  const feedString = feed.xml({ indent: true })
  event.res.setHeader('content-type', 'text/xml')

  event.res.end(feedString)
})
