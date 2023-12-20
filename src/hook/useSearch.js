import { useEffect, useMemo, useRef, useState } from "react"
import { fnDebounce } from "./useFnDebounce";

export function useSearch ({getAnimes}) {
  const [ error, setError ] = useState(null)
  const [ search, setSearch ] = useState('')
  
  const firsRender = useRef(true)

  const getAnimesDebounce = useMemo(() =>{
    return fnDebounce(getAnimes, 500)
  },
    [getAnimes]
  );
  
  useEffect(()=> {  
    if(firsRender.current) {
      firsRender.current = false    
      return
    }
    
    if(search === '' ) {
      setTimeout(()=>setError(null), 5000)
    }

    if(search.length < 3) {
      setError('minimun 3 characteres, please')
      return
    }
    getAnimesDebounce({ search })
    setError(null)

  }, [search, getAnimesDebounce])


  return { error, search, setSearch  }
}