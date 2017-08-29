const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
	const { createNodeField } = boundActionCreators

	if (node.internal.type === 'MarkdownRemark') {
		const slug = '/blog' + createFilePath({ node, getNode, basePath: '' })

		createNodeField({
			node,
			name: 'slug',
			value: slug
		})
	}
}

exports.createPages = ({ graphql, boundActionCreators }) => {
	const { createPage } = boundActionCreators
	return new Promise((resolve, reject) => {
		graphql(`
			{
				allMarkdownRemark {
					edges {
						node {
							fields {
								slug
							}
						}
					}
				}
			}
		`).then(result => {
			result.data.allMarkdownRemark.edges.map(({ node }) => {
				createPage({
					path: node.fields.slug,
					component: path.resolve('./src/templates/blog-post.js'),
					content: {
						slug: node.fields.slug
					}
				})
			})
			resolve()
		})
	})
}
