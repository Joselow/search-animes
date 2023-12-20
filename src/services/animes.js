
const API = 'https://api.jikan.moe/v4'
export async function fetchAnime ({query, limit}) {
  const MSG_ERROR = 'is not posible get information of this anime'
  try {
    const response = await fetch(`${API}/anime?q=${query}&sfw&limit=${limit}`)
    if (!response.ok) {
      throw new Error(MSG_ERROR)
    }
    const json = await response.json()
    return json
  } catch (error) {
    if (error.message === MSG_ERROR) {
      throw new Error(error.message)
    }
    else {
      throw new Error('error to fecth data of this anime')
    }
  }
}