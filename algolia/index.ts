import fs from 'node:fs'
import path from 'node:path'
import algoliasearch from 'algoliasearch'
import * as dotenv from 'dotenv'
import matter from 'gray-matter'
import removeMd from 'remove-markdown'

dotenv.config()

const client = algoliasearch(
	process.env.ALGOLIA_APP_ID || '',
	process.env.ALGOLIA_WRITE_API_KEY || '',
)

function createSlug(title: string) {
	return (
		title
			// remove leading & trailing whitespace
			.trim()
			// remove special characters
			.replace(/[^A-Za-z0-9 ]/g, '')
			// replace spaces
			.replace(/\s+/g, '-')
			// remove leading & trailing separtors
			.replace(/^-+|-+$/g, '')
			// output lowercase
			.toLowerCase()
	)
}

async function processFiles(filenames: string[]) {
	const data = await Promise.all(
		filenames.map(async (filename) => {
			try {
				const markdownWithMeta = fs.readFileSync(
					`./src/content/posts/${filename}`,
					'utf-8',
				)
				const { data: frontmatter, content } = matter(markdownWithMeta)
				return {
					slug: createSlug(frontmatter.title),
					title: frontmatter.title,
					content: removeMd(content).replace(/\n/g, ''),
				}
			} catch (error) {
				console.error('Error processing file:', filename, error)
				return null // or handle the error as needed
			}
		}),
	)

	return data.filter((item) => item !== null) // Filter out any null values
}
;(async () => {
	const filenames = fs.readdirSync(path.join('./src/content/posts'))
	const result = await processFiles(filenames)

  client.initIndex('dev_posts').delete()

	client
		.initIndex('dev_posts')
		.saveObjects(JSON.parse(JSON.stringify(result)), {
			autoGenerateObjectIDIfNotExist: true,
		})
		.then((res) => console.log(res))
})()
