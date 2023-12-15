import { View, Text, StyleSheet, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import {useEffect} from 'react';
import Config from 'react-native-config';
import Icon from 'react-native-vector-icons/FontAwesome';
import { PaginatedInfo } from '../types/types';
import ArtImage from './ArtImage';
import { useNavigation } from '@react-navigation/native';

export default function ArtworkItems({info}: {info: PaginatedInfo}) {
  const short_description_placeholder = "The Art Institute of Chicago, founded in 1879, is one of the largest art museums in the world. It is based in the Art Institute of Chicago Building in Chicago's Grant Park"
  const navigation = useNavigation()

  return (
    <TouchableOpacity style={style.card} onPress={() => {navigation.navigate('Favorites', {info})}} >
      
        <View style={style.column}>
          <View style={{top:30}}>
            <View style={style.img}>
              <ArtImage imageUrl={'https://www.artic.edu/iiif/2/'+info.image_id+'/full/843,/0/default.jpg'}/>
            </View>
            <Text style={style.alt_text}>{info.thumbnail ? info.thumbnail.alt_text : ''}</Text>
          </View>
      </View>

      <View style={{display:'flex', flexDirection:'column', width:'50%', position:'relative', top:3}}>
        <Text style={{color:'white', textAlign:'center', fontSize:12}}>{info.title}</Text>
        <View style={{height:100}}>
          <ScrollView style={{marginTop:15}} nestedScrollEnabled>
            <Text style={style.shortDescription} >{info.short_description || short_description_placeholder}</Text>
          </ScrollView>
        </View>

        <View style={style.fav}>
          <Icon name="heart" size={22} color="black" style={{color: Config.COLOR_NARANJA }} />
        </View>
      </View>

    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  card:{
    backgroundColor: Config.COLOR_NEGRO,
    width:'97%',
    height:230,
    borderRadius:10,
    marginVertical:7,
    alignSelf:'center',
    display: 'flex',
    justifyContent:'center',
    flexDirection: 'row',
  },
  img:{
    backgroundColor: '#313030',
    width:'100%',
    height: '70%',
    display: 'flex',
    borderRadius:5,
  },
  shortDescription:{
    color:'#979797', textAlign:'justify', fontSize:10, marginHorizontal:5
  },
  alt_text:{textAlign: 'center', color: 'white', fontSize:10},
  image:{width: '100%', height: '100%', borderRadius:5, resizeMode: 'cover', overflow:'hidden'},
  column:{display:'flex', flexDirection:'column', width:'50%'},
  fav:{height:25, width:25,  position:'absolute', bottom:12, right:8, display:'flex', justifyContent:'center', alignItems:'center'}
})