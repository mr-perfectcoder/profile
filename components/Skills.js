import {
  Heading,
  Image,
  ScrollView,
  Stack,
  Text,
  View,
  VStack,
} from 'native-base'
import React from 'react'

const Skills = ({ skills }) => {
  return (
    <View
      marginX={{
        base: '10px',
        xl: '80px',
        lg: '80px',
        md: '20px',
        sm: '10px',
      }}
      marginTop='15px'
      height='170px'
    >
      <View padding='8px'>
        <Heading fontSize='xl'>Ready to work with</Heading>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <VStack space='2.5' mt='4' px='0.5'>
            <Stack direction='row' mb='2.5' mt='1.5' space={5}>
              {skills.map((item, index) => {
                return (
                  <View
                    key={index.toString()}
                    width='85px'
                    height='85px'
                    justifyContent={'center'}
                    alignItems='center'
                    justifyItems={'center'}
                    padding='10px'
                    shadow={5}
                    borderRadius={2}
                    background='#fafafa'
                  >
                    <Image
                      marginTop={'5px'}
                      width='50px'
                      height='50px'
                      borderRadius={2}
                      source={{
                        uri: item.attributes.logo,
                      }}
                    />
                    <Text marginTop={'2px'} fontSize='10px'>
                      {item.attributes.name}
                    </Text>
                  </View>
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
