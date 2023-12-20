import './App.css'
import { Animes } from './components/Animes'
import { useSearch } from './hook/useSearch'
import { useAnimes } from './hook/useAnimes'
import { useState } from 'react'
import { useSearchDebounce } from './hook/useSearhDebouce'

function App() {
  const [ sort, setSort ] = useState(false)
  const { search, error, setSearch } = useSearch()
  const { animes, getAnimes } = useAnimes({sort})

  useSearchDebounce({search, getAnimes})

  const handleSubmit = (e) => {
    e.preventDefault()
    if (error) return
    if (search) getAnimes({search})
  }

  const handleQuery = (e) => {
    const query = e.target.value
    setSearch(query)   
    // if (query) getAnimes({ search: debounce })
  }
  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <>
    <header>
      <h1>Animes Seacrh</h1>
      <form action="" onSubmit={handleSubmit}
      >
        <input 
          onChange={handleQuery}
          value={search}
          name='query'
          type="text" placeholder='Naruto, Death Note, Dragon Ball'/>
        { error && (
          <p style={{color: 'red'}}>{error}</p>
        ) }
        <input type="checkbox" onChange={handleSort} checked={sort}/>
        <button >Search</button>
      </form>
    </header>

    <main>
     <Animes animes={animes}></Animes>
    </main>
    </>
  )
}

export default App
