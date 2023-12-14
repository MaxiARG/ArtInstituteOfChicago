import {View, Text, Image, StyleSheet, FlatList } from 'react-native';
import {useState, useEffect} from 'react';
import Config from 'react-native-config';
import AIC_Logo from '../GenericComponents/AIC_Logo';

import APIController from '../API/APIController';
import ArtworkItems from '../GenericComponents/ArtworkItems';

export default function Home({navigation} : any) {
    const api = APIController.getInstance();

    useEffect(()=>{
     // api.getArtworkByID(129884);
      //console.log(Config.COLOR_NARANJA);
    },[])

    return (
      <View style={{display:'flex', flexDirection:'column'}}>

        
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <View style={styles.logo}>
              <AIC_Logo />
              </View>
            <Text style={styles.title}>Welcome</Text>
          </View>
        </View>


        <View style={{backgroundColor: Config.COLOR_GRIS_BACKGROUND, height:'100%'}}>
          <ArtworkItems/>
          <ArtworkItems />
          <ArtworkItems />
          <ArtworkItems />

        </View>

      </View>
    );
  }

  const styles = StyleSheet.create({
    headerContainer:{
      backgroundColor: Config.COLOR_GRIS_BACKGROUND,
      display:'flex',
      flexDirection:'row'
    },
    logo:{
      position:'absolute',
      backgroundColor:'red',
      width: 90,
      height:90,
      borderRadius:4,
      bottom:4,
      left:10,
    },
    header:{
      backgroundColor: Config.COLOR_VERDE,
      height:110,
      width:'100%',
      position: 'relative',
      display:'flex',
      justifyContent:'center'
    },
    title:{
      textAlign:'center',
       color:'white',
       fontSize:30
    }


  });