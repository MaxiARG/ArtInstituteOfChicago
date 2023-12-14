import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Config from 'react-native-config'

export default function AIC_Logo() {
  return (
    <View style={style.background}>
      <Text style={style.text}>
        ART{'\n'}INSTITVTE{'\n'}CHICAGO
      </Text>
    </View>
  )
} 

const style = StyleSheet.create({
    background: {
      backgroundColor: Config.COLOR_ROJO,
      width:90,
      height:90,
      borderRadius:4,
      position: 'relative',
    },
    text:{
      color: 'white',
      textAlign: 'center',
      position: 'absolute',
      bottom:2,
      left:5,
      fontWeight:'300'
    }
})