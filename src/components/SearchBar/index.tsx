import { MagnifyingGlass } from 'phosphor-react'
import { ResultContainer, SearchBarBox, SearchBarContainer } from './style'
import useFetch from '../../hooks/useFecth'
import { useEffect, useRef, useState } from 'react'
import { SEARCH_BREEDS_GET } from '../../services/api'
import { NavLink } from 'react-router-dom'

interface ResultSearchItem {
  name: string
  image?: {
    id?: string
  }
}

interface Breed {
  adaptability: number
  affection_level: number
  alt_names: string
  cfa_url: string
  child_friendly: 3
  country_code: string
  country_codes: string
  description: string
  dog_friendly: number
  energy_level: number
  experimental: 0
  grooming: 1
  hairless: 0
  health_issues: 2
  hypoallergenic: 0
  id: string
  image?: {
    id?: string
    width?: number
    height?: number
    url?: string
  }
  indoor: 0
  intelligence: number
  lap: 1
  life_span: string
  name: string
  natural: 1
  origin: string
  rare: 0
  reference_image_id: string
  rex: 0
  shedding_level: 2
  short_legs: 0
  social_needs: number
  stranger_friendly: number
  suppressed_tail: 0
  temperament: string
  vcahospitals_url: string
  vetstreet_url: string
  vocalisation: 1
  weight: {
    imperial: string
    metric: string
  }
  wikipedia_url: string
}

export function SearchBar() {
  const { data, loading, request } = useFetch<Breed[]>()
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

  const queryRef = useRef(query)

  useEffect(() => {
    async function getData() {
      await request(url, options)
    }
    getData()
  }, [])

  useEffect(() => {
    queryRef.current = query
  }, [query])

  const debouncedSearch = debounce(async () => {
    if (Array.isArray(data)) {
      const newData: ResultSearchItem[] = data.filter((item) =>
        item.name.toLowerCase().includes(queryRef.current!.toLowerCase()),
      )
      setResult(newData)
    }
  }, 500)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const newQuery = e.target.value
    setQuery(newQuery)
    debouncedSearch()
  }

  return (
    <SearchBarContainer>
      <SearchBarBox>
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => handleSearch(e)}
        />
        <MagnifyingGlass />
      </SearchBarBox>
      {query.length > 0 && (
        <ResultContainer>
          <div>
            <ul>
              {loading ? (
                <li>Loading...</li>
              ) : query && result.length > 0 ? (
                result.map((item) => (
                  <NavLink key={item.name} to={`details/${item.name}`}>
                    <li>{item.name}</li>
                  </NavLink>
                ))
              ) : query && !loading && result.length === 0 && data ? (
                <li>No results founded.</li>
              ) : null}
            </ul>
          </div>
        </ResultContainer>
      )}
    </SearchBarContainer>
  )
}
