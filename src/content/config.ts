import { postSchema } from './_schemas'
import { defineCollection } from 'astro:content'

const postsCollection = defineCollection({
	type: 'content',
	schema: postSchema,
})

export const collection = {
	posts: postsCollection,
}
