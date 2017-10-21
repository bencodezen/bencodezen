import React from 'react'
import Link from 'gatsby-link'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default ({ data }) => (
	<div>
		<Header />
		<main style={{ margin: '3rem auto', padding: '0 2rem', maxWidth: 600 }}>
			<div>
				<h2>{data.allMarkdownRemark.totalCount} Posts</h2>
				{data.allMarkdownRemark.edges.map(({ node }) => (
					<div key={node.id}>
						<Link to={node.fields.slug}>
							<h3>
								{node.frontmatter.title}{' '}
								<span>— {node.frontmatter.date}</span>
							</h3>
						</Link>
						<p>{node.excerpt}</p>
					</div>
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
