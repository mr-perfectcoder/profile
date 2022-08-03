import { Heading, Text, View } from 'native-base'
import React from 'react'
import { Image } from 'react-native'
import Card from './Work/Card'

const MyWorks = () => {
  const list = [
    {
      name: 'Kiefy Password Manager',
      logo: 'kiefy.png',
      des: 'Offline password manger app that saves your password in your device with encrptions.',
      getLink:
        'https://expo.dev/accounts/the.ashish/projects/my-app/builds/cf3cde94-5c55-479c-8a24-0cdd760df652',
      getCode: 'https://github.com/mr-perfectcoder/Kiefy',
      note: 'Play store and Appstore are comming soon',
      tags: [
        {
          label: 'react',
        },
        {
          label: 'react-native',
        },
        {
          label: 'native-base',
        },
        {
          label: 'expo',
        },
        {
          label: 'eas',
        },
      ],
    },
    {
      name: 'Connected.Coin',
      logo: 'coin.png',
      des: 'Explore the crypto world. Buy and sell cryptocurrencies easily on Connected.coin.',
      getLink: 'https://connected-coin.vercel.app/',
      getCode: 'https://github.com/mr-perfectcoder/connected.coin',
      note: 'Please install metamask',
      tags: [
        {
          label: 'react-js',
        },
        {
          label: 'vite',
        },
        {
          label: 'tailwind',
        },
        {
          label: 'blockchain',
        },
        {
          label: 'solidity',
        },
      ],
    },
    {
      name: 'Connected.eth',
      logo: 'coin.png',
      des: 'A blockchain based group chat application.',
      getLink: 'https://connected-eth.vercel.app/',
      getCode: 'https://github.com/mr-perfectcoder/connected.eth',
      note: 'Please install metamask.Database is on free-trial so, it may be not working.',
      tags: [
        {
          label: 'react-js',
        },
        {
          label: 'next-js',
        },
        {
          label: 'tailwind',
        },
        {
          label: 'blockchain',
        },
        {
          label: 'moralis-database',
        },
        {
          label: 'web-3.0',
        },
      ],
    },
  ]
  return (
    <View
      marginX={{
        base: '20px',
        xl: '90px',
        lg: '90px',
        md: '40px',
        sm: '20px',
      }}
      marginTop='-10px'
    >
      <Heading size='md'>My Works</Heading>
      <View
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: '20px',
        }}
      >
        {list.map((item, index) => {
          return <Card key={index.toString()} item={item} tags={item.tags} />
        })}
      </View>
    </View>
  )
}

export default MyWorks
