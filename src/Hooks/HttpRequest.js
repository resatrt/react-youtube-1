import React, {useEffect, useState} from "react"
import axios from "axios"

export function useAxiosGet(url){
  const [request, setRequest] = useState(null)
  useEffect(() => {
    axios.get(url)
      .then(response => {
        setRequest(response.data)
      })
  }, [url])
  return request

}
