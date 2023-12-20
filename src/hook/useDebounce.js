import { useEffect, useState } from "react";

export function useDebounce ({ value, delay = 300 }) {
  const [ debounce, setDebounce ] = useState(value)
  useEffect(()=>{
    const timeout = setTimeout(() => {
      setDebounce(value)

      return 
    }, delay)
    return () => {
      clearTimeout(timeout)
    }
  }, [ value, delay ])

  return {
    debounce
  }
}