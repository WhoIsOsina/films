import { Axios, AxiosError } from "axios"
import { useState } from "react"


export const useFetching = (callback: any) => {
   const [error, setError] = useState('')
   const [isLoading, setIsLoading] = useState(false)

   const fetching = async () => {
      setIsLoading(true)

      setTimeout(async () => {
         await callback()
            .then(() => {
               setIsLoading(false)
            })
            .catch((error: any) => {
               setError(error.message)
               setIsLoading(false)
            })
      }, 2000)
   }

   return [fetching, isLoading, error] as const
}