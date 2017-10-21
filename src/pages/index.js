import React from 'react'
import Link from 'gatsby-link'
import BlogPostPreview from '../components/BlogPostPreview'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default ({ data }) => (
	<div>
		<Header />
		<main style={{ margin: '3rem auto', padding: '0 2rem', maxWidth: 600 }}>
			<div>
				<h2>{data.allMarkdownRemark.totalCount} Posts</h2>
				{data.allMarkdownRemark.edges.map(({ node }) => (
					<BlogPostPreview node={node} />
				))}
			</div>
		</main>
		<Footer />
	</div>
)

export const query = graphql`
	query AboutQuery {
		site {
			siteMetadata {
				title
			}
		}
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
			totalCount
			edges {
				node {
					id
					fields {
						slug
					}
					frontmatter {
						title
						date(formatString: "MMMM DD, YYYY")
					}
					excerpt
				}
			}
		}
	}
`
