import React, { useState } from 'react';
import { Image, StyleSheet, View, ActivityIndicator  } from 'react-native';
import Loading from './Loading';

export default ArtImage = ({imageUrl} : {imageUrl:String}) => {
  const [loading, setLoading] = useState(true);
  return (
    <View>
      {loading && <Loading/> }
      <Image
                style={style.image}
                alt="Loaded from external source"
                source={{uri: imageUrl}}
                onLoadEnd={()=>{setLoading(false)}}
              />
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