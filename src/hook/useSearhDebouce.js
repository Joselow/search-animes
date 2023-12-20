import { useEffect } from "react"
import { useDebounce } from "./useDebounce"

///  useFnDebounce is better owo
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