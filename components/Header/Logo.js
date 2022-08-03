import { Heading, Image, Text } from 'native-base'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const Logo = () => {
  return (
    <TouchableOpacity>
      <Image
        style={{
          marginLeft: -10,
        }}
        height={{
          base: '65px',
          sm: '45px',
          lg: '65px',
          xl: '65px',
          md: '65px',
        }}
        width={{
          base: '200px',
          sm: '135px',
          lg: '200px',
          xl: '200px',
          md: '200px',
        }}
        source={require('../../assets/ashish.png')}
        alt='Logo'
      />
    </TouchableOpacity>
  )
}

export default Logo
