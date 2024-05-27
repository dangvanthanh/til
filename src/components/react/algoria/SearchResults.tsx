import { css } from '@/styled-system/css'
import { flex } from '@/styled-system/patterns'
import useAlgolia from './useAlgoria'

type Article = {
	slug: string
	title: number
}

type SearchResultsProps = {
	query: string
}

export default function SearchResults({ query = '' }: SearchResultsProps) {
	const {
		hits,
		isLoading,
		isFetching,
		status,
		hasNextPage,
		isFetchingNextPage,
		fetchNextPage,
	} = useAlgolia<Article>({
		indexName: 'dev_posts',
		query,
		hitsPerPage: 5,
		staleTime: 1000 * 30, // 30s
		gcTime: 1000 * 60 * 15, // 15m
	})

	if (!query) return null

	if (isLoading)
		return (
			<div
				className={css({ px: 3, py: 1.5, fontSize: 'sm', color: 'stone.600' })}
			>
				Loading...
			</div>
		)

	return (
		<div>
			{/* <div
				className={css({ px: 3, py: 1.5, fontSize: 'sm', color: 'stone.600' })}
			>
				Status: {status} {isFetching && <span>fetching...</span>}
			</div> */}
			<div>
				<div className={css({ overflowY: 'auto', maxH: 400 })}>
					{hits && hits.length > 0 ? (
						hits.map((hit) => (
							<a
								key={hit.slug}
								href={`/posts/${hit.slug}`}
								className={flex({
									align: 'center',
									px: 3,
									py: 1.5,
									color: 'stone.900',
								})}
							>
								<span>{hit.title}</span>
							</a>
						))
					) : (
						<h3
							className={css({
								p: 3,
								textAlign: 'center',
								color: 'stone.900',
							})}
						>
							No article found!
						</h3>
					)}
				</div>
				{hasNextPage && (
					<div
						className={css({
							px: 3,
							py: 1.5,
							fontSize: 'sm',
							color: 'stone.600',
						})}
						onClick={() => fetchNextPage()}
						onKeyDown={() => {}}
					>
						Load more
					</div>
				)}
				{isFetchingNextPage && (
					<div
						className={css({
							px: 3,
							py: 1.5,
							fontSize: 'sm',
							color: 'stone.600',
						})}
					>
						Fetching next page...
					</div>
				)}
			</div>
		</div>
	)
}
