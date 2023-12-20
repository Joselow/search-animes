import './App.css'
import { Animes } from './components/Animes'
import { useSearch } from './hook/useSearch'
import { useAnimes } from './hook/useAnimes'
import { useState } from 'react'

function App() {
  const [ sort, setSort ] = useState(false)
  const { animes, getAnimes, loading } = useAnimes({sort})
  const { search, error, setSearch } = useSearch({getAnimes})

  const handleSubmit = (e) => {
    e.preventDefault()
    if (error) return
    if (search) getAnimes({search})
  }

  const handleQuery = (e) => {
    const query = e.target.value
    setSearch(query)   
  }
  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <>
    <header>
      <h1>Animes Search</h1>
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
      { loading && (
        <div style={{textAlign: 'center'}}>
          <span >Loading ...</span>
        </div>
      )}
      <Animes animes={animes} search={search}></Animes>
    </main>
    </>
  )
}

export default App
