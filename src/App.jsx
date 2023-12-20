import './App.css'
import { useState } from 'react'
import { Animes } from './components/Animes'
import { useSearch } from './hook/useSearch'
import { useAnimes } from './hook/useAnimes'
import { Pagination } from './components/Pagination'

function App() {
  const [ sort, setSort ] = useState(false)
  const { animes, getAnimes, loading, pagination } = useAnimes({sort})
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

  const handleClick = (page) => {
    getAnimes({search, page})
  }

  return (
    <>
    <header>
      <h1>Anime Search</h1>
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
        <label>ordenar por score</label>
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
    <section style={{textAlign: 'center', marginTop: '5px'}}>
      <Pagination
        handlePagination={handleClick}
        pagination={pagination}
      ></Pagination>
    </section>
    </>
  )
}

export default App
