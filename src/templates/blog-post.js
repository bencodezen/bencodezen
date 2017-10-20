import React from 'react'

export default ({ data }) => {
	const post = data.markdownRemark
	return (
		<div style={{ margin: '3rem auto', maxWidth: 600 }}>
			<h1>{post.frontmatter.title}</h1>
			<div dangerouslySetInnerHTML={{ __html: post.html }} />
		</div>
	)
}

export const query = graphql`
	query BlogPostQuery($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
			}
		}
	}
`
