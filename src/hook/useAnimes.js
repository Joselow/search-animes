import { useCallback, useMemo, useRef, useState } from "react"
import { fetchAnime } from "../services/animes"
import { mapAnimes } from "../helpers/mapAnimes"
export function useAnimes ({ sort }) {
  const [ errorMSG, setErrorMSG ] = useState(null)
  const [ pagination, setPagination] = useState({})
  const [ animes, setAnimes ] = useState([])
  const [ loading, setLoading ] = useState(false)
  const previousSearch = useRef({search: null, page: null})

  const getAnimes = useCallback(async({search, page = 1}) => {
    if (previousSearch.current.search === search && previousSearch.current.page === page) return
    try {
      setLoading(true)
      setErrorMSG(null)
      previousSearch.current.search = search
      previousSearch.current.page = page
      const { data, pagination } = await fetchAnime({ query: search , limit: 10, page })
      const mappedAnimes = mapAnimes(data)
      setPagination(pagination)
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

  return { animes: sortedAnimes, getAnimes, errorMSG, loading, pagination }
}