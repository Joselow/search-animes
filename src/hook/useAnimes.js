import { useCallback, useMemo, useRef, useState } from "react"
import { fetchAnime } from "../services/animes"
import { mapAnimes } from "../helpers/mapAnimes"
export function useAnimes ({ sort }) {
  const [ errorMSG, setErrorMSG ] = useState(null)
  const [ animes, setAnimes ] = useState([])
  const [ loading, setLoading ] = useState(false)
  const previousSearch = useRef(null)

  const getAnimes = useCallback(async({search}) => {
    if (previousSearch.current === search) return

    try {
      setLoading(true)
      setErrorMSG(null)
      previousSearch.current = search
      const { data } = await fetchAnime({ query: search , limit: 10})
      const mappedAnimes = mapAnimes(data)
      setAnimes(mappedAnimes)
    } catch (error) {
      setErrorMSG(error.message)
    } finally {
      setLoading(false)
    }
  }, [])



  const sortedAnimes = useMemo(() => {
   return sort ? [...animes].sort((a, b) => b.score - a.score)
    : animes
  }, [sort, animes]); 
   

  return { animes: sortedAnimes, getAnimes, errorMSG, loading }
}