async function fetchAPI(endpoint) {
  const headers = { 'Content-Type': 'application/json' }

  const res = await fetch(`http://localhost:3000/api/${endpoint}`, {
    method: 'GET',
    headers
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json;
}

export async function getAllCategories() {
  const categories = await fetchAPI('categories');
  return categories;
}

export async function getAllPools() {
  const pools = await fetchAPI('pools');
  return pools;
}