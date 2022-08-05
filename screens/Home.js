import {
  Heading,
  Icon,
  IconButton,
  ScrollView,
  Stack,
  Text,
  View,
  VStack,
  Center,
  Divider,
  Image,
  Button,
  HStack,
} from 'native-base'
import React, { useEffect, useState } from 'react'
import { Feather, Entypo } from '@expo/vector-icons'
import { Linking } from 'react-native'
import { TouchableOpacity } from 'react-native'
import Skills from '../components/Skills'
import MyWorks from '../components/MyWorks'

const Home = ({ route }) => {
  const hData = route.params.hData
  return (
    <>
      <ScrollView background='#fff'>
        {hData.length !== 0 && (
          <>
            <VStack
              space='2.5'
              mt='4'
              px={{
                base: '10px',
                xl: '10px',
                lg: '10px',
                sm: '10px',
                md: '10px',
              }}
            >
              <Stack
                direction='row'
                mb='2.5'
                mt='1.5'
                px={{
                  xl: '150px',
                  lg: '150px',
                  md: '0px',
                  sm: '0px',
                }}
                space={2}
              >
                <View size='30%'>
                  <View
                    marginTop='5px'
                    justifyContent='center'
                    justifyItems='center'
                    alignContent='center'
                    alignItems='center'
                  >
                    <Image
                      height={{
                        base: '100px',
                        xl: '200px',
                        lg: '200px',
                        md: '170px',
                        sm: '100px',
                      }}
                      width={{
                        base: '100px',
                        xl: '200px',
                        lg: '200px',
                        md: '170px',
                        sm: '100px',
                      }}
                      rounded='full'
                      shadow={3}
                      source={{
                        uri: hData.image.data.attributes.url,
                      }}
                      alt='Ashish'
                    />
                  </View>
                </View>

                <View
                  size='75%'
                  marginTop={{
                    base: '5px',
                    xl: '40px',
                    lg: '40px',
                    sm: '40px',
                    md: '35px',
                  }}
                  px={{
                    base: '8px',
                    xl: '10px',
                    lg: '10px',
                    md: '10px',
                  }}
                >
                  <Heading
                    fontSize={{
                      base: 'lg',
                      md: '3xl',
                      lg: '3xl',
                      xl: '3xl',
                      sm: 'lg',
                    }}
                  >
                    {hData.Heading}
                  </Heading>
                  <Text
                    fontSize={{
                      base: 'sm',
                      md: 'lg',
                      lg: 'xl',
                      xl: '2xl',
                    }}
                    color='gray.600'
                  >
                    {hData.Bio}
                  </Text>
                  <Stack direction='row' space={4} marginTop='2px'>
                    <IconButton
                      m={'8px'}
                      borderRadius='full'
                      bg='red.600'
                      variant='solid'
                      p='2'
                      onPress={() => Linking.openURL('mailto:' + hData.mail)}
                      icon={
                        <Icon
                          color={'#fff'}
                          size='5'
                          as={<Feather name='mail' />}
                        />
                      }
                    />
                    <IconButton
                      m={'8px'}
                      borderRadius='full'
                      bg='blue.600'
                      variant='solid'
                      p='2'
                      onPress={() => Linking.openURL(hData.linkedin)}
                      icon={
                        <Icon
                          color={'#fff'}
                          size='5'
                          as={<Entypo name='linkedin' />}
                        />
                      }
                    />
                    <IconButton
                      m={'8px'}
                      borderRadius='full'
                      bg='#000'
                      variant='solid'
                      p='2'
                      onPress={() => Linking.openURL(hData.github)}
                      icon={
                        <Icon
                          color={'#fff'}
                          size='5'
                          as={<Feather name='github' />}
                        />
                      }
                    />
                  </Stack>
                </View>
              </Stack>
              <Divider />
            </VStack>

            <Skills skills={hData.technologies.data} />
            <MyWorks />
          </>
        )}
      </ScrollView>
    </>
  )
}

export default Home
