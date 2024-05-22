import { css } from '@/styled-system/css'
import { flex } from '@/styled-system/patterns'
import algoliasearch from 'algoliasearch/lite'
import type { Hit as AlgoliaHit } from 'instantsearch.js'
import { Hits, InstantSearch, SearchBox } from 'react-instantsearch'

type HitProps = {
	hit: AlgoliaHit<{
		slug: string
		title: number
	}>
}

const searchBoxStyles = css({
	w: 'full',
	borderBottomWidth: 1,
	borderBottomColor: 'stone.300',
	'& form': {
		display: 'flex',
		alignItems: 'center',
		'& input': {
			w: 'full',
			px: 3,
			py: 1.5,
		},
		'& button[type="submit"]': {
			px: 2,
		},
		'& button[type="reset"]': {
			px: 2,
		},
		'& span': {
			px: 2,
		},
	},
})

function Hit({ hit }: HitProps) {
	return (
		<a
			href={`/posts/${hit.slug}`}
			className={flex({ align: 'center', px: 3, py: 1.5, color: 'stone.700' })}
		>
			<span>{hit.title}</span>
		</a>
	)
}

export default function SearchComponent() {
	const searchClient = algoliasearch(
		'KX91AAJYE2',
		'dbbf198e82b2aa854f503b28482fd992',
	)

	return (
		<InstantSearch
			indexName="dev_posts"
			searchClient={searchClient}
			insights={false}
			future={{
				persistHierarchicalRootCount: true,
				preserveSharedStateOnUnmount: true,
			}}
		>
			<SearchBox className={searchBoxStyles} />
			<Hits hitComponent={Hit} />
		</InstantSearch>
	)
}
