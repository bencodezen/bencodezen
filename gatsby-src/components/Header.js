import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import styles from '../styles/logo.module.css'

const platforms = [
	{
		name: 'Twitter',
		url: 'https://www.twitter.com/bencodezen'
	},
	{
		name: 'CodePen',
		url: 'https://www.codepen.io/bencodezen'
	},
	{
		name: 'GitHub',
		url: 'https://www.github.com/bencodezen'
	},
	{
		name: 'StackOverflow',
		url: 'https://stackoverflow.com/users/5100020/bencodezen'
	}
]

const renderPlatforms = list => {
	return list.map(item => {
		return (
			<SocialMediaItem key={`header-${item.name}`}>
				<SocialMediaLink href={item.url}>{item.name}</SocialMediaLink>
			</SocialMediaItem>
		)
	})
}

const Header = props => {
	return (
		<HeaderContainer>
			<Link to="/" className={styles.logo}>
				<Logo>BenCodeZen</Logo>
			</Link>
			<SocialMediaList>{renderPlatforms(platforms)}</SocialMediaList>
		</HeaderContainer>
	)
}

const HeaderContainer = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.75rem 1.5rem;
	background-color: #2a3f4e;
`

const Logo = styled.h1`
	margin: 0;
	font-size: 14px;
	color: #fff;
	text-transform: uppercase;
`

const SocialMediaItem = styled.li`
	margin: 0;
	display: flex;
	padding-right: 1rem;

	&:hover {
		text-decoration: underline;
	}

	&:last-child {
		padding-right: 0;
	}
`

const SocialMediaLink = styled.a`
	color: #fff;
	font-size: 13px;
	box-shadow: 0 0;
`
const SocialMediaList = styled.ul`
	margin: 0;
	list-style-type: none;
	display: flex;
`

export default Header
