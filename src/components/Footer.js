import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Footer = props => {
	return (
		<FooterContainer>
			<p style={{ marginBottom: 0, lineHeight: 1 }}>
				&copy; Ben Hong 2017
			</p>
			<p>
				Got a request or bug?{' '}
				<a href="https://github.com/bencodezen/bencodezen/issues">
					Submit it here!
				</a>
			</p>
		</FooterContainer>
	)
}

const FooterContainer = styled.footer`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 0.8rem;
`

export default Footer
