//example api request: replace with your API request here in folder API

export const fetchUsersList = async (page, per_page) => {
  try {
    const res = await fetch(
      `https://reqres.in/api/users?page=${page}&per_page=${per_page}`
    )
    const data = await res.json()
    return Promise.resolve(data)
  } catch (e) {
    return Promise.reject(e)
  }
}
