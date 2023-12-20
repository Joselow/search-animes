import { useCallback, useMemo, useRef, useState } from "react"
import { fetchAnime } from "../services/animes"
import { mapAnimes } from "../helpers/mapAnimes"
export function useAnimes ({ sort }) {
  const [ error, setError ] = useState(null)
  const [ animes, setAnimes ] = useState([])
  const previousSearch = useRef(null)

  const getAnimes = useCallback(async({search}) => {
    if (previousSearch.current === search) return

    try {
      previousSearch.current = search
      const { data } = await fetchAnime({ query: search , limit: 10})
      const mappedAnimes = mapAnimes(data)
      setAnimes(mappedAnimes)
    } catch (error) {
      setError(error.message)
    }    
  }, [])



  const sortedAnimes = useMemo(() => {
   return sort ? [...animes].sort((a, b) => b.score - a.score)
    : animes
  }, [sort, animes]); 
   

  return { animes: sortedAnimes, getAnimes, error }
}