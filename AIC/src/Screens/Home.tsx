import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Home({navigation} : any) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text
         onPress={()=>{navigation.navigate('Favorites')}}
        >Home Screen</Text>
         <Icon name="rocket" size={30} color="#900" />
      </View>
    );
  }