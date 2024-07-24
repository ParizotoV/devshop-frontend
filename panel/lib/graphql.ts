import { useState } from 'react'
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

const useQuery = queryStr => {
  const query = {
    query: queryStr
  }
  return useSWR(query, fetcher)
}

const useMutation = queryStr => {
  const [data, setData] = useState<any>(null)
  const mutate = async variables => {
    const mutation = {
      query: queryStr,
      variables
    }
    try {
      const returnedData = await fetcher(mutation)
      setData(returnedData)
    } catch (error) {}
  }
  return [data, mutate]
}

export { useMutation, useQuery }

