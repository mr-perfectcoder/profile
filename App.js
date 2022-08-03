import React from 'react'
import { NativeBaseProvider, extendTheme, StatusBar } from 'native-base'

import { NavigationContainer } from '@react-navigation/native'
import MyNav from './components/Header/MyNav'
import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_400Regular_Italic,
} from '@expo-google-fonts/open-sans'

export const theme = extendTheme({
  fontConfig: {
    OpenSans: {
      400: {
        normal: 'OpenSans_400Regular',
        italic: 'OpenSans_400Regular_Italic',
      },
    },
  },
  fonts: {
    heading: 'OpenSans',
    body: 'OpenSans',
    mono: 'OpenSans',
  },
  components: {
    Heading: {
      defaultProps: {
        fontWeight: 'normal',
      },
    },
  },
})

export default function App() {
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_400Regular_Italic,
  })
  if (!fontsLoaded) {
    return null
  }
  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar style='dark' />
      <NavigationContainer>
        <MyNav />
      </NavigationContainer>
    </NativeBaseProvider>
  )
}
