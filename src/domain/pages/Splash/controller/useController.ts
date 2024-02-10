import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { routeName } from '@Routes/routeName'

export function useController(): void {
  const navigation = useNavigation<any>()

  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate(routeName.Signin)
    }, 3200)
  }, [])
}
