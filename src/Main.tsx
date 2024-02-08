import { Teste } from '@Store/teste'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

export default function Main(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Teste />
      <Text>Open up App.tsx to start asdasd working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
