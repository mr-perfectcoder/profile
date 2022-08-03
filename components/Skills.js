import {
  Box,
  Center,
  Divider,
  Heading,
  Icon,
  IconButton,
  Image,
  ScrollView,
  Stack,
  Text,
  View,
  VStack,
} from 'native-base'
import React from 'react'
import {
  MaterialCommunityIcons,
  FontAwesome5,
  Fontisto,
} from '@expo/vector-icons'

const Skills = () => {
  const list = [
    {
      name: 'React',
      logo: 'react',
      color: '#5ac4e2',
      icon: 'FontAwesome5',
    },
    {
      name: 'Node',
      logo: 'node-js',
      color: 'green',
      icon: 'FontAwesome5',
    },
    {
      name: 'mongodb',
      logo: 'mongodb',
      color: 'green',
      icon: 'Fontisto',
    },
    {
      name: 'tailwind',
      logo: 'tailwind',
      color: '#37a2d3',
      icon: 'MaterialCommunityIcons',
    },
    {
      name: 'bootstrap',
      logo: 'bootstrap',
      color: '#7911f7',
      icon: 'FontAwesome5',
    },
  ]

  return (
    <View
      marginX={{
        base: '10px',
        xl: '80px',
        lg: '80px',
        md: '20px',
        sm: '10px',
      }}
      // background='gray.100'
      marginTop='15px'
      height='170px'
      // shadow={3}
    >
      <View padding='8px'>
        <Heading fontSize='xl'>Ready to work with</Heading>
        {/* <Divider marginTop='10px' /> */}
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <VStack space='2.5' mt='4' px='0.5'>
            <Stack direction='row' mb='2.5' mt='1.5' space={5}>
              {list.map((item, index) => {
                return (
                  <IconButton
                    size={20}
                    bg='#fff'
                    variant='solid'
                    p='2'
                    shadow={7}
                    _hover={{
                      bg: '#fff',
                    }}
                    _pressed={{
                      bg: '#fff',
                    }}
                    key={index.toString()}
                    icon={
                      <Icon
                        as={
                          <>
                            {item.icon === 'FontAwesome5' && (
                              <FontAwesome5
                                size={'46px'}
                                color={item.color}
                                name={item.logo}
                              />
                            )}
                            {item.icon === 'Fontisto' && (
                              <Fontisto
                                size={'46px'}
                                color={item.color}
                                name={item.logo}
                              />
                            )}
                            {item.icon === 'MaterialCommunityIcons' && (
                              <MaterialCommunityIcons
                                size={'46px'}
                                color={item.color}
                                name={item.logo}
                              />
                            )}
                          </>
                        }
                      />
                    }
                  />
                )
              })}
            </Stack>
          </VStack>
        </ScrollView>
      </View>
    </View>
  )
}

export default Skills
