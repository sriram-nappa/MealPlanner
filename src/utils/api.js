const API_ID = process.env.REACT_APP_API_ID || 'fe7f8bb2'
const APP_KEY = process.env.REACT_APP_APP_KEY || '4214760e535229a5a135dad3ba3bb913'

export function fetchRecipes (food = '') {
  food = food.trim()

  return fetch(`https://api.edamam.com/search?q=${food}&app_id=${API_ID}&app_key=${APP_KEY}`)
    .then((res) => res.json())
    .then(({ hits }) => hits.map(({ recipe }) => recipe))
}