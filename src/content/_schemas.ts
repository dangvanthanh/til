import { z } from 'astro:content'

export const postSchema = z.object({
	title: z.string(),
	tags: z.array(z.string()),
})
