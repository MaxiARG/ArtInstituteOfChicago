import { View,  StyleSheet, FlatList, Text } from 'react-native';
import { useState,  useCallback } from 'react';
import Config from 'react-native-config';
import { PaginatedInfo } from '../types/types';
import APIController from '../API/APIController';
import ArtworkItems from '../GenericComponents/ArtworkItems';
import { useFocusEffect } from '@react-navigation/native';

export default function Home({ navigation }: any) {

  const api = APIController.getInstance();
  const [data, setData] = useState<PaginatedInfo[]>();
  const [loading, setLoading] = useState<boolean>(true);

  useFocusEffect(useCallback(() => {
    fetchInfo();
    return () => {
      //Screen 1 unfocused!
    };
  }, []))

  const fetchInfo = async () => {
    setLoading(true);
    const resp: any[] = await api.getArtworkFromStorage();
    if (resp) {
      setDataWithInfo(resp);
    }
    setLoading(false);
  }

  const setDataWithInfo = (info: any[]) => {
    let collection: PaginatedInfo[] = [];

    info.forEach((e) => {
      let nuevo: PaginatedInfo = {
        id: e.id,
        title: e.title,
        short_description: e.short_description,//not always present  https://api.artic.edu/api/v1/artworks/129882
        alt_text: e.alt_text, //not always present
        image_id: e.image_id, //not always present
        alt_image_ids: e.alt_image_ids, //not always present
        api_link: e.api_link,
        date_display: e.date_display,
        artist_display: e.artist_display,
        place_of_origin: e.place_of_origin,
        description: e.description, //not always present -> placeholder in case it doesn't exist
        dimensions: e.dimensions,
        medium_display: e.medium_display,
        credit_line: e.credit_line,
        artist_title: e.artist_title,
        thumbnail: e.thumbnail,
        main_reference_number: e.main_reference_number,
      }
      collection.push(nuevo);
    })
    setData(collection);
  }

  const renderItem = ({ item }: { item: PaginatedInfo }) => {
    return (<ArtworkItems info={item} />)
  }

  return (
    <View style={{ display: 'flex', flexDirection: 'column' }}>

      <View style={{ backgroundColor: Config.COLOR_GRIS_BACKGROUND, height: '100%' }}>
        {loading && 
        <View style={{flex:1, justifyContent:'center', alignItems:'center', alignContent:'center'}}>
          <Text>Loading Data. Please wait</Text>
        </View>
        }
        {data && ! loading &&
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            onEndReachedThreshold={0.8}
          />
        }

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: Config.COLOR_GRIS_BACKGROUND,
    display: 'flex',
    flexDirection: 'row'
  },
  logo: {
    position: 'absolute',
    backgroundColor: 'red',
    width: 90,
    height: 90,
    borderRadius: 4,
    bottom: 4,
    left: 10,
  },
  header: {
    backgroundColor: Config.COLOR_VERDE,
    height: 110,
    width: '100%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 30
  }


});