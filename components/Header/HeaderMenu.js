import { Hidden, Stack, Text, View } from 'native-base'
import React from 'react'
import { Linking, TouchableOpacity } from 'react-native'

const HeaderMenu = () => {
  return (
    <>
      <Stack
        direction='row'
        paddingRight={{
          base: 5,
          sm: 5,
          lg: 8,
          md: 8,
          xl: 8,
        }}
      >
        <TouchableOpacity
          style={{
            padding: 12,
            backgroundColor: '#000',
            borderRadius: 25,
          }}
          onPress={() =>
            Linking.openURL(
              'https://drive.google.com/file/d/1lhH53m6v4Qw15CvLGh3lZSG3JmGeaV2M/view?usp=sharing'
            )
          }
        >
          <Text color='#fff'>Resume</Text>
        </TouchableOpacity>
      </Stack>
    </>
  )
}

export default HeaderMenu
