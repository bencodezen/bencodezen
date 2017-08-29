import React from "react"
import Link from 'gatsby-link'

export default ({ data }) =>
	<div>
		<h1>Hello Gatsby!</h1>
		<p>What a world!</p>
		<img src="http://lorempixel.com/400/200/" />
		<br />
		<ul>
			<li><Link to="/about/">About</Link></li>
			<li><Link to="/contact/">Contact</Link></li>
			<li><Link to ="/page-2/">Page 2</Link></li>
			<li><Link to ="/counter/">Counter</Link></li>
		</ul>
		<h2>{data.allMarkdownRemark.totalCount} Posts</h2>
		{data.allMarkdownRemark.edges.map(({ node }) =>
			<div key={node.id}>
				<Link to={node.fields.slug}>
					<h3>{node.frontmatter.title}{" "}- {node.frontmatter.date}</h3>
				</Link>
				<p>{node.excerpt}</p>
			</div>
		)}
		<article style={{ margin: '3rem auto', maxWidth: 600 }}>
			<h1>Richard Hamming on Luck</h1>
			    <div>
			      <p>
			        From Richard Hamming’s classic and must-read talk, “<a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
			          You and Your Research
			        </a>”.
			      </p>
			      <blockquote>
			        <p>
			          There is indeed an element of luck, and no, there isn’t. The prepared
			          mind sooner or later finds something important and does it. So yes, it
			          is luck.{" "}
			          <em>
			            The particular thing you do is luck, but that you do something is
			            not.
			          </em>
			        </p>
			      </blockquote>
			    </div>
			    <p>Posted April 09, 2011</p>
		</article>
	</div>

export const query = graphql`
	query IndexQuery {
		allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
			totalCount
			edges {
				node {
					id
					frontmatter {
						title
						date(formatString: "DD MMMM, YYYY")
					}
					fields {
						slug
					}
					excerpt
				}
			}
		}
	}
`
