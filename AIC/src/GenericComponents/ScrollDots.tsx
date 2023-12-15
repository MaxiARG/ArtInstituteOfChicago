import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Config from 'react-native-config'

export default function ScrollDots() {
  return (
    <View style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
      <View style={style.dot}></View>
      <View style={style.dotSelected}></View>
      <View style={style.dot}></View>
      <View style={style.dot}></View>
    </View>
  )
}

const style = StyleSheet.create({
    dot:{
        width:15,
        height:15,
        borderRadius:10,
        backgroundColor:Config.COLOR_GRIS_BACKGROUND,
        marginHorizontal:5
        },
    dotSelected:{
        width:15,
        height:15,
        borderRadius:10,
        backgroundColor: Config.COLOR_NARANJA,
        marginHorizontal:5
        }
})