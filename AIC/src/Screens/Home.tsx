import {View, Text, StyleSheet, FlatList, Alert  } from 'react-native';
import {useState, useEffect, useRef, useCallback} from 'react';
import Config from 'react-native-config';
import AIC_Logo from '../GenericComponents/AIC_Logo';
import { PaginatedInfo } from '../types/types';
import APIController from '../API/APIController';
import ArtworkItems from '../GenericComponents/ArtworkItems';
import messaging from '@react-native-firebase/messaging';
import PushNotification from "react-native-push-notification";
import { useFocusEffect } from '@react-navigation/native';
import { clearStorage } from '../API/StorageController';
 
export default function Home({navigation} : any) {
    const api = APIController.getInstance();
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState<PaginatedInfo[]>();
    const flatListRef = useRef(null);

    const fetchInfo = (amount : Number) => {
      api.getArtworkPaginated(currentPage, amount).then((info)=>{
        if(info){
          if(data){
            setDataWithInfo(data.concat(info.data));
          }else{
            setDataWithInfo(info.data);
          }
        }
      }).catch((e)=>{
        console.log(e);
      })
    }

    const setDataWithInfo = (info : any[]) => {
      let collection : PaginatedInfo[] = [];

      info.forEach((e)=>{
        let nuevo : PaginatedInfo = {
        id : e.id,
        title : e.title,
        short_description : e.short_description,//not always present  https://api.artic.edu/api/v1/artworks/129882
        alt_text :e.alt_text, //not always present
        image_id : e.image_id, //not always present
        alt_image_ids: e.alt_image_ids, //not always present
        api_link : e.api_link,
        date_display : e.date_display,
        artist_display : e.artist_display,
        place_of_origin : e.place_of_origin,
        description : e.description, //not always present -> placeholder in case it doesn't exist
        dimensions: e.dimensions,
        medium_display : e.medium_display,
        credit_line : e.credit_line,
        artist_title : e.artist_title,
        thumbnail : e.thumbnail,
        main_reference_number : e.main_reference_number,
        }

        collection.push(nuevo);
      }) 
      
      setData(collection);
    }

    useEffect(()=>{
      
      messaging().getToken()
      .then((t)=>{console.log(t)});

    },[])

    useFocusEffect(useCallback(()=>{
      //clearStorage();
      fetchInfo(25);
      return () => {
        //console.log('Screen 1 unfocused!');
      };
    },[currentPage]))

    const renderItem = ({item} : { item: PaginatedInfo }) => {
     return (<ArtworkItems info={item} /> )
    }

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

          <View style={{backgroundColor: Config.COLOR_GRIS_BACKGROUND, height:'90%'}}>

            {data && 
              <FlatList 
              ref={flatListRef}
              data={data} 
              renderItem={renderItem} 
              keyExtractor={(item, index) => item.id} 
              onEndReached={()=>{setCurrentPage(currentPage+1);}}
              onEndReachedThreshold={0.8}
              />
            }
          
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