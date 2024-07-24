import useSWR from 'swr'

const fetcher = async query => {
  const res = await fetch(process.env.NEXT_PUBLIC_API, {
    headers: {
      'Content-type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(query)
  })

  const json = await res.json()

  return json.data as any
}

const useQuery = query => {
  return useSWR(query, fetcher)
}

export { useQuery }

