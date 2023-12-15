import {View, Text, Image, StyleSheet, FlatList, ScrollView } from 'react-native';
import {useState, useEffect, useRef} from 'react';
import Config from 'react-native-config';
import AIC_Logo from '../GenericComponents/AIC_Logo';
import { PaginatedInfo } from '../types/types';
import APIController from '../API/APIController';
import ArtworkItems from '../GenericComponents/ArtworkItems';
import Pagination from '../GenericComponents/Pagination';
// export type PaginatedInfo = {
//   id : Number,
//   title: String,
//   short_description: String,
//   alt_text: String, //en thumbnail.alt_text
//   image_id: String,//07f01f51-2be4-8c00-6b8c-067b67f83ccf
//   alt_image_ids: String[],
//   api_link: String, //https://api.artic.edu/api/v1/artworks/117841
//   date_display: String,//"500–400 BCE"
//   artist_display: String,
//   place_of_origin: String,
//   description: String,
//   dimensions: String,
//   medium_display: String,//Ceramic and pigment
//   credit_line: String,
//   artist_title: String,
//   thumbnail: String
// }
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
     // api.getArtworkByID(129884);
     // TODO check page limits
      fetchInfo(25);
    },[currentPage])

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