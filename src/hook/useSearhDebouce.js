import { useEffect, useRef } from "react"
import { useDebounce } from "./useDebounce"

export function useSearchDebounce ({getAnimes, search}) {
  const { debounce } = useDebounce({ value: search, delay: 500 })
  // const firsRender = useRef(true)
console.log(debounce == '');
  useEffect(()=>{
    // if (firsRender.current) {
    //   return
    // }
  
    getAnimes({ search: debounce })
  }, [debounce, getAnimes])

  return { debounce, getAnimes }
}