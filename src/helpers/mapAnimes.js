export const mapAnimes = (animes) => {
  return animes.map(el => ({
      id: el.mal_id,
      title: el.title,
      duration: el.duration,
      score: el.score,
      image: el.images.jpg.image_url,
      url: el.url
  }))
}