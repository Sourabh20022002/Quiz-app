import { View, Text, Image } from 'react-native'
import React from 'react'

const Onboard = ({navigation}) => {
  setTimeout(()=>{
    navigation.navigate('Quiz')
  },4000)
  return (
    <View className="flex-1 justify-center items-center bg-red-500">
    <Image source={require('./qwert.jpg')} className="w-full h-full "/>
    <View className="absolute  items-center">
      <Text className="text-black text-5xl font-medium">Quiz</Text>
    </View>
    </View>
  )
}

export default Onboard