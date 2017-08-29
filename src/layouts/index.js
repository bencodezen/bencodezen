import React from 'react'
import Link from 'gatsby-link'

export default ({ children }) =>
  <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
  	<Link to='/'>
  		<h3>MySweetSite</h3>
  	</Link>
    {children()}
  </div>