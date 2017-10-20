import React from 'react'
import Link from 'gatsby-link'

export default ({ data }) => (
	<div style={{ margin: '3rem auto', maxWidth: 600 }}>
		<h1>{data.site.siteMetadata.title}</h1>
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
