import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default ({ data }) => {
	const post = data.markdownRemark
	return (
		<div>
			<Header />
			<article style={{ margin: '3rem auto', maxWidth: 600 }}>
				<h1>{post.frontmatter.title}</h1>
				<div dangerouslySetInnerHTML={{ __html: post.html }} />
			</article>
			<Footer />
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
