module.exports = {
	title: 'BenCodeZen',
	dest: './public',
	themeConfig: {
		repo: 'https://github.com/bencodezen/bencodezen',
		repoLabel: 'Repo',
		docsDir: 'src',
		editLinks: true,
		logo: '/bencodezen-logo.png',
		lastUpdated: 'Last Updated',
		editLinkText: 'Found a bug? Help me improve this page!',
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Blog', link: '/blog/index.html' },
			{ text: 'Learn', link: '/learn/index.html' },
			{
				text: 'About',
				items: [
					{ text: 'Me', link: '/about/index.html' },
					{ text: 'Uses', link: '/uses/index.html' },
					{ text: 'Media Log', link: '/about/media-log/index.html'}
				]
			},
			{ text: 'Contact', link: '/contact/index.html' }
		],
		user: {
			socialMedia: [
				{
					name: "Twitter",
					href: "https://twitter.com/bencodezen",
					icon: "twitter"
				},
				{
					name: "Twitch",
					href: "https://www.twitch.tv/bencodezen",
					icon: "twitch"
				},
				{
					name: "GitLab",
					href: "https://gitlab.com/bencodezen",
					icon: "gitlab"
				},
				{
					name: "GitHub",
					href: "https://github.com/bencodezen",
					icon: "github"
				},
				{
					name: "CodePen",
					href: "https://codepen.io/bencodezen/",
					icon: "codepen"
				},
				{
					name: "StackOverflow",
					href: "https://stackoverflow.com/users/5100020/bencodezen",
					icon: "stack-overflow"
				},
				{
					name: "Notist",
					href: "https://noti.st/bencodezen"
				}
			]
		}
	},
	plugins: [
		[
			'@vuepress/google-analytics',
			{
				ga: 'UA-92645815-1'
			}	
		],
		[
			'vuepress-plugin-rss',
			{
				base_url: '/',
				site_url: 'https://www.bencodezen.io',
				filter: frontmatter => frontmatter.date <= new Date(),
				count: 20
			}
		],
		'vuepress-plugin-janitor'
	],
	head: [
		[
			'link',
			{
				rel: 'stylesheet',
				href:
					'https://fonts.googleapis.com/css?family=PT+Serif:400,700|Poppins:500,700'
			}
		],
		[
			'link',
			{ rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-icon-57x57.png' }
		],
		[
			'link',
			{ rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-icon-60x60.png' }
		],
		[
			'link',
			{ rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-icon-72x72.png' }
		],
		[
			'link',
			{ rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-icon-76x76.png' }
		],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '114x114',
				href: '/apple-icon-114x114.png'
			}
		],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '120x120',
				href: '/apple-icon-120x120.png'
			}
		],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '144x144',
				href: '/apple-icon-144x144.png'
			}
		],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '152x152',
				href: '/apple-icon-152x152.png'
			}
		],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '180x180',
				href: '/apple-icon-180x180.png'
			}
		],
		[
			'link',
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '192x192',
				href: '/android-icon-192x192.png'
			}
		],
		[
			'link',
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '32x32',
				href: '/favicon-32x32.png'
			}
		],
		[
			'link',
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '96x96',
				href: '/favicon-96x96.png'
			}
		],
		[
			'link',
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '16x16',
				href: '/favicon-16x16.png'
			}
		],
		['link', { rel: 'manifest', href: '/manifest.json' }],
		['meta', { name: 'msapplication-TileColor', content: '#ffffff' }],
		[
			'meta',
			{ name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' }
		],
		['meta', { name: 'theme-color', content: '#ffffff' }],
		['script', { async: true, src: "https://static.codepen.io/assets/embed/ei.js" }]
	]
}
