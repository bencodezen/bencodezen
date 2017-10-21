import React from 'react'
import Link from 'gatsby-link'

const BlogPostPreview = ({ node }) => {
	return (
		<div key={node.id}>
			<Link to={node.fields.slug}>
				<h3>
					{node.frontmatter.title}{' '}
					<span>— {node.frontmatter.date}</span>
				</h3>
			</Link>
			<p>{node.excerpt}</p>
		</div>
	)
}

export default BlogPostPreview
