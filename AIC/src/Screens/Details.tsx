import { View, Text, StyleSheet, ScrollView,TouchableOpacity,Modal } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Config from 'react-native-config';
import ArtImage from '../GenericComponents/ArtImage';
import ScrollDots from '../GenericComponents/ScrollDots';
import Icon from 'react-native-vector-icons/FontAwesome';
import Add2FavsModal from '../GenericComponents/Add2FavsModal';

export default function Details({ route }) {
  const { info } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const description_placeHolder = "The current building complex at 111 South Michigan Avenue is the third address for the Art Institute. Situated in Grant Park, it was designed in the Beaux-Arts style by Shepley, Rutan and Coolidge of Boston[43] to host national and international meetings held in conjunction with the 1893 World's Columbian Exposition, as the World's Congress Auxiliary Building, with the intent that the Art Institute occupy the space after the close of the fair  The Art Institute's entrance on Michigan Avenue is guarded by two bronze lion statues created by Edward Kemeys. The lions were unveiled on May 10, 1894, each weighing more than two tons. The sculptor gave them unofficial names: the south lion is stands in an attitude of defiance, and the north lion is on the prowl. When a Chicago sports team plays in the championships of their respective league (i.e. the Super Bowl or Stanley Cup Finals, not the entire playoffs), the lions are frequently dressed in that team's uniform. Evergreen wreaths are placed around their necks during the Christmas season."


  return (
    <>
    <Modal
    transparent={true}
    visible={modalVisible}
>
  <View style={{backgroundColor:Config.COLOR_VERDE,position:'absolute', width:'60%', height:150,flex:1, alignSelf:'center', top:'40%', borderRadius:8}}>
    <View style={{flex:1, justifyContent:'center'}}>
        <Text style={{color:'white', textAlign:'center', justifyContent:'center', textAlignVertical:'center', marginTop:30}}>Add to favorites?</Text>
        <View style={{flex:1, flexDirection:'row', alignItems:'center'}}>
          <TouchableOpacity style={style.buttonOK} onPress={()=>{console.log("Agregando a Favoritos");setModalVisible(false)}}  >
            <Text>Yes please</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.buttonCancel} onPress={()=>{setModalVisible(false)}} >
            <Text>Cancel</Text>
          </TouchableOpacity>
        </View>
    </View>
  </View>
</Modal>
    <ScrollView style={{ flex: 1, backgroundColor: Config.COLOR_NEGRO }}>

      <View style={{ width: '100%', height: 280, position: 'relative', backgroundColor: Config.COLOR_GRIS_BACKGROUND }}>
        <ArtImage imageUrl={'https://www.artic.edu/iiif/2/' + info.image_id + '/full/843,/0/default.jpg'} />
        <View style={style.subBar}>
          <View style={{ display: 'flex', flex: 3, justifyContent: 'center' }}>
            <Text style={{ textAlign: 'center', overflow: 'scroll', color: '#bab7ad' }}>
              {info.dimensions}
            </Text>
          </View>
          <View style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
            <ScrollDots />
          </View>
        </View>
      </View>

      <View style={style.title}>
        <View style={{ display: 'flex', flex: 10, justifyContent: 'center' }}>
          <Text style={{ textAlign: 'center', overflow: 'scroll', color: 'white', fontSize:20 }}>{info.title}</Text>
        </View>
        <TouchableOpacity style={{ display: 'flex', flex: 1, justifyContent: 'center',  alignItems:'center' }}>
          <Icon name="heart" size={30} color="black" style={{color: Config.COLOR_NARANJA }} onPress={()=>{console.log("press");setModalVisible(true)}} />
        </TouchableOpacity>
      </View>

      <View style={{ display: 'flex',  justifyContent: 'center' }}>
          <Text style={{ textAlign: 'center', overflow: 'scroll', color: Config.COLOR_NARANJA, fontSize:15, marginTop:5, }}>{info.artist_title}</Text>
      </View>


      <View style={{ display: 'flex',  justifyContent: 'center' }}>
          <Text style={{ textAlign: 'center', overflow: 'scroll', color: Config.COLOR_GRIS_BACKGROUND, fontSize:12, marginTop:30, }}>{info.credit_line  || info.date_display || "Description" } </Text>
      </View>

      <View style={{ display: 'flex',  justifyContent: 'center' }}>
          <Text style={{ textAlign: 'justify', marginHorizontal:20 , overflow: 'scroll', color: 'white', fontSize:14, marginTop:40, lineHeight:18}}>{info.description || description_placeHolder} </Text>
      </View>

    </ScrollView>
    </>
  )
}


const style = StyleSheet.create({
  subBar: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: 'rgba(15, 15, 15, 0.5)',
    width: '100%',
    height: 40,
    bottom: 0
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'rgba(24, 24, 24, 0.5)',
    width: '100%',
    height: 40,
    bottom: 0,
    marginTop:10,
  },
  buttonOK:{flex:1, justifyContent:'center', alignItems:'center', height:40,marginHorizontal:8, backgroundColor: Config.COLOR_NARANJA,borderRadius:4, width:80},
  buttonCancel:{flex:1,height:40, justifyContent:'center', alignItems:'center' ,marginHorizontal:8, backgroundColor: Config.COLOR_ROJO,borderRadius:4, width:80}
})