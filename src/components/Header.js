import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Header = props => {
	return (
		<HeaderContainer>
			<Logo>
				<Link to="/">BenCodeZen</Link>
			</Logo>
		</HeaderContainer>
	)
}

const HeaderContainer = styled.header`
	display: flex;
	padding: 1.5rem;
`

const Logo = styled.h1`margin: 0;`

export default Header
