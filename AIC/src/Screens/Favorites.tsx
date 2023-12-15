import {View, Text} from 'react-native';
import {useEffect} from 'react';

export default function Favorites({route}) {

  useEffect(()=>{
  })
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#EEEED6'  }}>
        <Text
        style={{color:'black'}}
        >Favorites Screen</Text>
      </View>
    );
  }