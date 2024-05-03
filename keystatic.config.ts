import { collection, config, fields } from '@keystatic/core'

export default config({
	storage: {
		kind: process.env.NODE_ENV === 'production' ? 'cloud' : 'local',
	},
	cloud: {
		project: 'dang-van-thanh/til',
	},
	collections: {
		posts: collection({
			label: 'Posts',
			path: 'src/content/posts/*',
			format: {
				contentField: 'content',
			},
			slugField: 'title',
			schema: {
				title: fields.text({ name: { label: 'Title' } }),
				tags: fields.array(fields.text({ label: 'Tags' }), {
					label: 'Tags',
					itemLabel: (props: unknown) => props.value,
				}),
				content: fields.mdx({ label: 'Content' }),
			},
		}),
	},
})
