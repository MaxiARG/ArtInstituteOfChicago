import {View, Text, Image, StyleSheet } from 'react-native';

export default function Home({navigation} : any) {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#EEEED6' }}>
        <Text
         onPress={()=>{navigation.navigate('Favorites')}}
         style={{color:'black'}}
        >Home Screen
        </Text>
    <Image
        style={{    width: 250,
            height: 120,}}
        source={{
          uri: 'https://www.artic.edu/iiif/2/2d484387-2509-5e8e-2c43-22f9981972eb/full/843,/0/default.jpg',
        }}
      />
      </View>
    );
  }

  const styles = StyleSheet.create({
    
  });