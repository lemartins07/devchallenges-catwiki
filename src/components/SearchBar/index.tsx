import { MagnifyingGlass } from 'phosphor-react'
import { ResultContainer, SearchBarBox, SearchBarContainer } from './style'
import useFetch from '../../hooks/useFecth'
import { useEffect, useState } from 'react'
import { SEARCH_BREEDS_GET } from '../services/api'
import { NavLink } from 'react-router-dom'

interface ResultSearchItem {
  name: string
  image: {
    id: string
  }
}

export function SearchBar() {
  const { data, loading, request } = useFetch()
  const [query, setQuery] = useState('')
  const { url, options } = SEARCH_BREEDS_GET()
  const [result, setResult] = useState<ResultSearchItem[] | []>([])

  function debounce<T extends (...args: unknown[]) => void>(
    fn: T,
    delay: number,
  ): (...args: Parameters<T>) => void {
    let timerId: number

    return (...args: Parameters<T>) => {
      clearTimeout(timerId)
      timerId = setTimeout(() => fn(...args), delay)
    }
  }

  const debouncedSearch = debounce(async () => {
    if (!data) {
      await request(url, options)
    }
    console.log('data: ', data)

    if (Array.isArray(data)) {
      const newData: ResultSearchItem[] = data
        .filter((item) => item.name.includes(query))
        .map((item) => ({
          name: item.name,
          image: {
            id: item.image.id,
          },
        }))

      console.log(newData)
      setResult(newData)
    }
  }, 500)

  useEffect(() => {
    if (query !== '') {
      debouncedSearch()
    }
  }, [query])
  return (
    <SearchBarContainer>
      <SearchBarBox>
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <MagnifyingGlass />
      </SearchBarBox>
      {query.length > 1 && (
        <ResultContainer length={result.length}>
          <div>
            <ul>
              {loading ? (
                <span>Loading...</span>
              ) : result.length > 0 ? (
                result.map((item) => (
                  <li key={item.image.id}>
                    <NavLink to={`details/${item.image.id}`}>
                      {item.name}
                    </NavLink>
                  </li>
                ))
              ) : (
                <li>No results founded.</li>
              )}
            </ul>
          </div>
        </ResultContainer>
      )}
    </SearchBarContainer>
  )
}
