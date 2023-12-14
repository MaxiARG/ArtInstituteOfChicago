import { View, Text, StyleSheet, Image } from 'react-native';
import {useEffect, useState} from 'react';
import React from 'react';
import Config from 'react-native-config';

type ArtData = {
  id: String,
  title: String,
  image_id: String,
  alt_image_ids: String,
  api_link: String,
  date_display: String,
  artist_display: String,
  place_of_origin: String,
  description: String,
  dimensions: String,
  medium_display: String,
  credit_line: String,
  artist_title: String,
  category_titles: String,
  thumbnail: String
}
const art : ArtData = {
  
}
export default function ArtworkItems() {

  useEffect(()=>{

  },[])

  return (
    <View style={style.card}>
        <View style={{display:'flex', flexDirection:'column', width:'50%'}}>
          <View style={{top:20}}>
            <View style={style.img}>
              <Image
                style={{width: '100%', height: '100%', borderRadius:5 }}
                source={{
                  uri: 'https://www.artic.edu/iiif/2/1d59d547-aad0-50f5-ac1c-6e516eea146b/full/843,/0/default.jpg',
                }}
              />
            </View>
            <Text style={{textAlign: 'center', color: 'white'}}>ArtworkItems</Text>
        </View>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  card:{
    backgroundColor: Config.COLOR_NEGRO,
    width:'97%',
    height:180,
    borderRadius:10,
    marginVertical:7,
    alignSelf:'center',
    display: 'flex',
    justifyContent:'center',
  },
  img:{
    backgroundColor:'red',
    width:'100%',
    height: '70%',
    display: 'flex',
    borderRadius:5,
  }
})