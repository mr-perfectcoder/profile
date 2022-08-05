import React, { useEffect, useState } from 'react'
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
  const [hData, sethData] = useState([])
  const getHomePageData = async () => {
    try {
      const response = await fetch(
        'https://fierce-journey-21260.herokuapp.com/api/homepage-portfolio?populate=*'
      )
      const json = await response.json()
      sethData(json.data.attributes)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getHomePageData()
  }, [])

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
        {hData.length !== 0 && <MyNav hData={hData} />}
      </NavigationContainer>
    </NativeBaseProvider>
  )
}
