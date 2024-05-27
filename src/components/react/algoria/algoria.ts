import type { Hit } from '@algolia/client-search'
import algoliasearch from 'algoliasearch'

const ALGOLIA_APP_ID = 'KX91AAJYE2'
const ALGOLIA_SEARCH_API_KEY = 'dbbf198e82b2aa854f503b28482fd992'

type SearchOptions = {
	indexName: string
	query: string
	pageParam: number
	hitsPerPage: number
}

export async function search<TData>({
	indexName,
	query,
	pageParam,
	hitsPerPage = 10,
}: SearchOptions): Promise<{
	hits: Hit<TData>[]
	nextPage: number | undefined
}> {
	const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_SEARCH_API_KEY)
	const index = client.initIndex(indexName)

	console.log('alogolia:search', { indexName, query, pageParam, hitsPerPage })

	const { hits, page, nbPages } = await index.search<TData>(query, {
		page: pageParam,
		hitsPerPage,
	})

	const nextPage = page + 1 < nbPages ? page + 1 : undefined

	return { hits, nextPage }
}
