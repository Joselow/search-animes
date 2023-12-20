import { useEffect, useRef, useState } from "react"

export function useSearch () {
  const [ error, setError ] = useState(null)
  const [ search, setSearch ] = useState('')
  
  const firsRender = useRef(true)

  useEffect(()=> {  
    if(firsRender.current) {
      firsRender.current = search === ''
      return
    }
    
    if(search === '' ) {
      setTimeout(()=>setError(null), 5000)
    }

    if(search.length < 3) {
      setError('minimun 3 characteres, please')
      return
    }
    setError(null)

  }, [search])


  return { error, search, setSearch  }
}