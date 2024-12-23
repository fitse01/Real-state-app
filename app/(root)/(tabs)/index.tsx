import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function index() {
  return (
    <View style={{
        flex: 1 , 
        justifyContent:"center" , 
        alignItems:"center" ,
        }}>
          <Text className='font-bold text-3xl color-white  my-10'>Welcome to ReState</Text>
          <Link href="/sign-in" style={{color:"white"}}> Sign In </Link>
          <Link href="/profile" style={{color:"white"}}> profile </Link>
          <Link href="/explore" style={{color:"white"}}> explore </Link>
          <Link href="/properties/[id]" style={{color:"white"}}>Property </Link>
    </View>
  )
}