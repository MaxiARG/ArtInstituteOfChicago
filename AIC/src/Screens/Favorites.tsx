import {View, Text} from 'react-native';

export default function Favorites({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#EEEED6'  }}>
        <Text
        style={{color:'black'}}
        >Favorites Screen</Text>
      </View>
    );
  }