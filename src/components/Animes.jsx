function AnimeList ({ animes }) {
  return (
    <ul>
    {
      animes.map((anime) => {
        return (
          <li key={anime.id}>
            <h3>{anime.title}</h3>
            <p>{anime.duration} 
              -  { anime.score ?? 'N/A'  } 
            </p>
            <a href={anime.url} target="_blank" rel="noreferrer">
              <img src={anime.image} alt="" />
            </a>
          </li>
        )
      })
    }
  </ul>
  )
}

function NoResults ({search}) {
  return (
    <p style={{textAlign: 'center'}}>not found results for <span style={{color: '#f7ed'}}>{search}</span></p>
  )
}

export function Animes ({ animes, search }) {
  const hasAnimes = animes?.length > 0
  return (
      hasAnimes
        ? <AnimeList animes={animes}/>
        : <NoResults search={search}/>
  )

}