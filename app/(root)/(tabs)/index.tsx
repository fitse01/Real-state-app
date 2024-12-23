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
          <Link href="/sign-in"> Sign In </Link>
          <Link href="/profile"> profile </Link>
          <Link href="/explore"> explore </Link>
          <Link href="/properties/[id]">Property </Link>
    </View>
  )
}