import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../../screens/Home'
import HeaderMenu from './HeaderMenu'
import Logo from './Logo'

const Stack = createNativeStackNavigator()

const MyNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        options={() => ({
          headerTitle: () => <Logo />,
          headerRight: () => <HeaderMenu />,
        })}
        component={Home}
      />
    </Stack.Navigator>
  )
}

export default MyNav
