import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, View  } from 'react-native';
import Loading from './Loading';

export default ArtImage = ({imageUrl} : {imageUrl:String}) => {
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    if(imageUrl.includes('null')){
      setLoading(false);
    }
  },[imageUrl]);
  const showImage = () => {
    if(imageUrl && !imageUrl.includes('null')){
      return(
        <Image
        style={style.image}
        alt="Loaded from external source"
        source={{uri: imageUrl}}
        onLoadEnd={()=>{setLoading(false)}}
      />
      )
    } else {
      return(
        <Text style={{fontSize:15}}>Image Not Available</Text>
      )
    }
  }
  return (
    <View style={{flex:1, justifyContent:'center', alignContent:'center', alignItems:'center'}}>
      {loading && <Loading/> }
      {showImage()}
    </View>
  );
};

const style = StyleSheet.create({
    image:{
    width: '100%',
    height: '100%',
    borderRadius:5,
    resizeMode: 'cover',
    overflow:'hidden'
    },
  })