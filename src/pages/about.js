import React from "react"

export default ({ data }) =>
  <div>
    <h1>About {data.site.siteMetadata.title}</h1>
    <p>I’m good enough, I’m smart enough, and gosh darn it, people like me!</p>
  </div>

export const query = graphql`
	query AboutQuery {
		site {
			siteMetadata {
				title
			}
		}
	}
`
