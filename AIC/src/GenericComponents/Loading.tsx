import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import Config from 'react-native-config'

export default function Loading() {
  return (
    <View style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', alignContent:'center', alignSelf:'center'}}>
      <ActivityIndicator style={{display:'flex'}} size='large' color={Config.COLOR_VERDE} />
      <Text>Loading Image</Text>
      <Text>Image might not be available</Text>
    </View>
  )
}