import { View, Text, StyleSheet, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import {useEffect} from 'react';
import Config from 'react-native-config';
import Icon from 'react-native-vector-icons/FontAwesome';
import { PaginatedInfo } from '../types/types';
import ArtImage from './ArtImage';
import { useNavigation } from '@react-navigation/native';
import { itemExistsInFavs } from '../API/StorageController';

export default function ArtworkItems({info}: {info: PaginatedInfo}) {
  const short_description_placeholder = "The Art Institute of Chicago, founded in 1879, is one of the largest art museums in the world. It is based in the Art Institute of Chicago Building in Chicago's Grant Park. Recognized for its curatorial efforts and popularity among visitors, its collection, stewarded by 11 curatorial departments, is encyclopedic, and includes works such as Georges Seurat's A Sunday on La Grande Jatte, Pablo Picasso's The Old Guitarist, Edward Hopper's Nighthawks, and Grant Wood's American Gothic. Its permanent collection of nearly 300,000 works of art is augmented by more than 30 special exhibitions mounted yearly that illuminate aspects of the collection and present curatorial and scientific research."
  
  const navigation = useNavigation()

  return (
    <View style={style.card}  >
      
        <View style={style.column}>
          <View style={{top:30}}>
            <TouchableOpacity style={style.img} onPress={() => {navigation.navigate('Details', {info})}}>
              <ArtImage imageUrl={'https://www.artic.edu/iiif/2/'+info.image_id+'/full/843,/0/default.jpg'}/>
            </TouchableOpacity>
            <Text style={style.alt_text}>{info.thumbnail ? info.thumbnail.alt_text : ''}</Text>
          </View>
      </View>

      <View style={{display:'flex', flexDirection:'column', width:'50%', position:'relative', top:3}}>
        <Text style={{color:'white', textAlign:'center', fontSize:12}}>{info.title}</Text>
        <View style={{height:120}}>
          <ScrollView style={{marginTop:15}} nestedScrollEnabled>
            <Text style={style.shortDescription} >{info.short_description || short_description_placeholder}</Text>
          </ScrollView>
        </View>

        <View style={{...style.fav, opacity: itemExistsInFavs(info.api_link) ? 1  : 0.5}}>
          <Icon 
          name="heart" 
          size={22} 
          color="black" 
          style={{color: itemExistsInFavs(info.api_link) ? Config.COLOR_ROJO_FAV : Config.COLOR_NARANJA }} 
          />
        </View>
      </View>

    </View>
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