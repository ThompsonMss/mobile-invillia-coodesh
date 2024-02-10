import React from 'react'
import { InterfaceRequestSignin } from '@Domain/services/auth/signin'
import { catchError, from, map, throwError } from 'rxjs'
import { Services } from '@Domain/services'

export function useSignup() {
  const [loading, setLoading] = React.useState(false)

  function exec(formData: InterfaceRequestSignin) {
    setLoading(true)

    return from(Services.auth.signup(formData)).pipe(
      map((response): any => {
        setLoading(false)
        return response
      }),
      catchError((error) => {
        setLoading(false)
        return throwError(error)
      })
    )
  }

  return {
    loading,
    exec
  }
}
