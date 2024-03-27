import { defineCollection } from 'astro:content'
import { postSchema } from './_schemas'

const postsCollection = defineCollection({
	type: 'content',
	schema: postSchema,
})

export const collection = {
	posts: postsCollection,
}
