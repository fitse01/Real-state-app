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
          <Text className='font-bold text-3xl  my-10 font-rubik'>Welcome to ReState</Text>
          <Link href="/sign-in" > Sign In </Link>
          <Link href="/profile" > profile </Link>
          <Link href="/explore" > explore </Link>
          <Link href="/properties/[id]" >Property </Link>
    </View>
  )
}