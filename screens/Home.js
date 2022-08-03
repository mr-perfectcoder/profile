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
} from 'native-base'
import React from 'react'
import { Feather, Entypo } from '@expo/vector-icons'
import { Linking } from 'react-native'
import { TouchableOpacity } from 'react-native'
import Skills from '../components/Skills'
import MyWorks from '../components/MyWorks'

const Home = () => {
  return (
    <>
      <ScrollView background='#fff'>
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
              // base: '50px',
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
                  source={require('../assets/Photo.jpeg')}
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
                Hey 👋 I'm Ashish Ranjan.
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
                Assistant System Engineer at Tata Consultancy Services
              </Text>
              <Stack direction='row' space={4} marginTop='2px'>
                <IconButton
                  m={'8px'}
                  borderRadius='full'
                  bg='red.600'
                  variant='solid'
                  p='2'
                  onPress={() =>
                    Linking.openURL('mailto:ashishranjan.ar7@gmail.com')
                  }
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
                  onPress={() =>
                    Linking.openURL(
                      'https://www.linkedin.com/in/offical-ashish'
                    )
                  }
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
                  onPress={() =>
                    Linking.openURL('https://github.com/mr-perfectcoder')
                  }
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

        <Skills />
        <MyWorks />
      </ScrollView>
    </>
  )
}

export default Home
