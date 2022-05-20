import React from 'react'
import { Provider as PaperProvider} from 'react-native-paper'
import HomeScreen from './src/screens/HomeScreen'
import HeaderComponent from './src/components/HeaderComponent'

const App = () => {
  return (
    <PaperProvider>
        <HeaderComponent />
        <HomeScreen />
      </PaperProvider>
  )
}

export default App