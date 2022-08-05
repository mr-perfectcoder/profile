import { View, Text, Image, Button } from 'native-base'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Linking } from 'react-native'
const Card = ({ item, tags }) => {
  return (
    <View
      width={{
        base: '100%',
        md: '48%',
        sm: '100%',
        lg: '48%',
        xl: '48%',
      }}
      // height='200px'
      // shadow={5}
      marginBottom='50px'
      background='coolGray.100'
      padding='20px'
      rounded='md'
    >
      <View
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <View
          width='25%'
          // style={
          //   {
          //     // justifyContent: 'center',
          //     // alignContent: 'center',
          //     // alignItems: 'center',
          //   }
          // }
          marginTop={{
            base: '10px',
            md: '0px',
            lg: '0',
            xl: '0',
            sm: '20px',
          }}
        >
          <View>
            <Image
              size={{
                base: '75px',
                sm: '75px',
                md: '80px',
                lg: '120px',
                xl: '150px',
              }}
              rounded='md'
              borderWidth={1}
              borderColor='gray.200'
              source={{
                uri: item.logo.data.attributes.url,
              }}
              alt={item.name}
            />
          </View>
        </View>
        <View width='70%'>
          <Text
            fontSize={{
              base: '14px',
              sm: '14px',
              md: '14px',
              lg: '18px',
              xl: '18px',
            }}
            color='indigo.400'
          >
            {item.name}
          </Text>
          <Text color='gray.500' textAlign={'justify'}>
            {item.des}
          </Text>

          <View
            style={{
              marginTop: '10px',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: '2px',
            }}
          >
            {item.getLink && (
              <TouchableOpacity
                style={{
                  width: '75px',
                  height: '35px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#000',
                  borderRadius: '25px',
                }}
                onPress={() => Linking.openURL(item.getLink)}
              >
                <Text
                  style={{
                    color: '#fff',
                  }}
                >
                  GET
                </Text>
              </TouchableOpacity>
            )}
            {item.getCode && (
              <View
                style={{
                  alignContent: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <TouchableOpacity
                  style={{
                    width: '100px',
                    height: '25px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'gray',
                    borderRadius: '25px',
                  }}
                  onPress={() => Linking.openURL(item.getCode)}
                >
                  <Text
                    style={{
                      color: '#fff',
                      fontStyle: 'italic',
                    }}
                  >
                    View Code
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>

          {item.note && (
            <Text color='gray.600' fontSize='12px' fontStyle='italic'>
              {item.note}
            </Text>
          )}
        </View>
      </View>

      <View
        marginTop={'20px'}
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {item.tags.data.map((tag, index) => {
          return (
            <View
              style={{
                height: '25px',
                justifyContent: 'center',
                alignItems: 'center',
                background: '#D5D5D5',
                borderRadius: '25px',
                maxWidth: '200px',
                marginRight: '10px',
              }}
              paddingX='20px'
              marginBottom='10px'
              key={index.toString()}
            >
              <Text
                style={{
                  color: '#000',
                  fontStyle: 'italic',
                }}
              >
                #{tag.attributes.label}
              </Text>
            </View>
          )
        })}
      </View>
    </View>
  )
}

export default Card
