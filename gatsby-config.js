module.exports = {
	siteMetadata: {
		title: 'Blah Blah Fake Title'
	},
	plugins: [
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'src',
				path: `${__dirname}/src/`
			}
		},
		{
			resolve: 'gatsby-plugin-typography',
			options: {
				pathToConfigModule: 'src/utils/typography.js'
			}
		},
		'gatsby-plugin-glamor',
		'gatsby-plugin-styled-components',
		'gatsby-transformer-remark'
	]
}