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

function NoResults () {
  return (
    <p style={{textAlign: 'center'}}>not found results for this search</p>
  )
}

export function Animes ({ animes }) {
  const hasAnimes = animes?.length > 0
  return (
      hasAnimes
        ? <AnimeList animes={animes}/>
        : <NoResults/>
  )

}