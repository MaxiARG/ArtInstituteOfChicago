import {View, Text, Image, StyleSheet } from 'react-native';
import {useState, useEffect} from 'react';

import APIController from '../API/APIController';

export default function Home({navigation} : any) {
    const api = APIController.getInstance();

    useEffect(()=>{
      api.getArtworkByID(129884);
    })
    return (
      <View style={styles.mainView}>
        <Text
         onPress={()=>{navigation.navigate('Favorites')}}
         style={{color:'black'}}
        >Home Screen
        </Text>
    <Image
        style={{width: 250, height: 120}}
        source={{
          uri: 'https://www.artic.edu/iiif/2/1d59d547-aad0-50f5-ac1c-6e516eea146b/full/843,/0/default.jpg',
        }}
      />
      </View>
    );
  }

  const styles = StyleSheet.create({
    mainView: {
        flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#EEEED6'
    },
  });