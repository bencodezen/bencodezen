module.exports = {
	siteMetadata: {
		title: 'BenCodeZen'
	},
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `src`,
				path: `${__dirname}/src/`
			}
		},
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography.js`
			}
		},
		`gatsby-transformer-remark`,
		`gatsby-plugin-styled-components`
	]
}
