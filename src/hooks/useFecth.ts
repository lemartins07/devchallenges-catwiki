/* eslint-disable no-unsafe-finally */
import { useState, useCallback, SetStateAction, Dispatch } from 'react'

interface FetchState<T> {
  data: T | null
  error: string | null
  loading: boolean
}

interface FetchResponse<T> {
  response: Response
  json: T | null
}

class HTTPError extends Error {}

const useFetch = <T>() => {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    error: null,
    loading: false,
  })

  const request = useCallback(
    async (
      url: string,
      options: RequestInit = {},
    ): Promise<FetchResponse<T>> => {
      let response: Response
      let json: T | null

      try {
        setState((prevState) => ({ ...prevState, error: null, loading: true }))
        response = await fetch(url, options)
        json = await response.json()

        if (!response.ok) {
          throw new HTTPError(response.statusText || 'Erro desconhecido')
        }

        setState((prevState) => ({ ...prevState, data: json, loading: false }))

        return { response, json }
      } catch (error) {
        json = null
        const errorMessage =
          error instanceof Error ? error.message : 'Erro desconhecido'
        setState((prevState) => ({ ...prevState, error: errorMessage }))
        return { response: {} as Response, json: null }
      }
    },
    [],
  )

  return {
    ...state,
    request,
    setData: setState as Dispatch<SetStateAction<FetchState<T>>>,
  }
}

export default useFetch
