const fs = require('fs')
const yamlFrontMatter = require('yaml-front-matter')

const blogFolder = './gatsby-src/blog/'
const blogPostList = []

fs.readdir(blogFolder, (err, files) => {
	if (err) {
		return console.log(err)
	}

	files.forEach(file => {
		const fileContent = fs.readFileSync(blogFolder + file, 'utf8')
		const frontMatter = yamlFrontMatter.loadFront(fileContent)

		delete frontMatter['__content']

		let fileData = {}

		for (let key in frontMatter) {
			fileData[key] = frontMatter[key]
		}

		blogPostList.push(fileData)
	})

	fs.writeFileSync('./test3.json', JSON.stringify(blogPostList), 'utf8')
})
