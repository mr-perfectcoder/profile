import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../../screens/Home'
import HeaderMenu from './HeaderMenu'
import Logo from './Logo'

const Stack = createNativeStackNavigator()

const MyNav = ({ hData }) => {
  return (
    <Stack.Navigator>
      {hData && (
        <Stack.Screen
          name='Home'
          options={() => ({
            headerTitle: () => <Logo />,
            headerRight: () => <HeaderMenu resumeLink={hData.ResumeLink} />,
          })}
          component={Home}
          initialParams={{ hData: hData }}
        />
      )}
    </Stack.Navigator>
  )
}

export default MyNav
