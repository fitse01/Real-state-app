import { View, Text, Image ,ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images'
import icons from '@/constants/icons';

export default function SignIn() {
  const handleLogin =()=>{};
  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView contentContainerClassName='h-full'>
        <Image source={images.onboarding} className='h-4/6 w-full' resizeMode='contain'/>
        <View className='px-10'>
          <Text className='text-base text-center uppercase font-rubik text-black-300'>Welcome to ReState</Text>

          <Text className='text-3xl text-center font-rubik-bold text-black-200 my-2'>
            Let's Get You Closer to {"\n"}
            <Text className='text-primary-300'>Your Ideal Home</Text>
          </Text>

          <Text className='text-lg text-center text-black-200 mt-12 font-rubik'>
            Login to ReState with Google
          </Text>

          <TouchableOpacity onPress={handleLogin} className='bg-white shadow-md shadow-zinc-300 rounded-full py-4 mt-5'>

              <View className='flex flex-row items-center justify-center'>
                <Image source={icons.google} resizeMode='contain' className='w-5 h-5'/>
                <Text className='font-rubik-medium text-lg  text-black-300 ml-2 '> Continue With Google</Text>
              </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}