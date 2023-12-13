import {View, Text} from 'react-native';

export default function Home({navigation} : any) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text
         onPress={()=>{navigation.navigate('Favorites')}}
         style={{color:'black'}}
        >Home Screen
        </Text>
      </View>
    );
  }