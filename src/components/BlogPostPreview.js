import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { headerFontFamily } from '../utils/variables'
import styles from '../styles/button.module.css'
import postStyles from '../styles/blog-post.module.css'

const BlogPostPreview = ({ node }) => {
	return (
		<ArticleContainer>
			<PublishDate>{node.frontmatter.date}</PublishDate>

			<Title>
				<Link
					to={node.fields.slug}
					style={{ boxShadow: '0 0', color: '#222' }}
				>
					{node.frontmatter.title}
				</Link>
			</Title>

			<p>{node.excerpt}</p>

			<Link
				to={node.fields.slug}
				className={styles.button}
				style={{ fontFamily: headerFontFamily }}
			>
				Read More >
			</Link>
		</ArticleContainer>
	)
}

const ArticleContainer = styled.article`margin-bottom: 3.5rem;`

const PublishDate = styled.time`
	display: block;
	margin-bottom: 0.5rem;
	color: #31688f;
	font-size: 0.8rem;
	font-weight: 600;
	font-family: ${headerFontFamily};
	line-height: 1;
	text-transform: uppercase;
`

const Title = styled.h3`
	margin-top: 0;
	margin-bottom: 0.75rem;
	line-height: 1.4;
`

export default BlogPostPreview
