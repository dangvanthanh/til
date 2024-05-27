import { css } from '@/styled-system/css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import * as React from 'react'

import SearchResults from './SearchResults'

const queryClient = new QueryClient()

export default function Search() {
	const [query, setQuery] = React.useState('')

	const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault()
		// It is recommended to debounce this event in prod
		setQuery(event.target.value)
	}

	return (
		<QueryClientProvider client={queryClient}>
			<input
				onChange={handleOnChange}
				value={query}
				placeholder="Search..."
				className={css({
					w: 'full',
					px: 3,
					py: 1.5,
					borderWidth: 1,
					borderColor: 'stone.300',
					outline: 'none',
				})}
			/>
			<SearchResults query={query} />
		</QueryClientProvider>
	)
}
