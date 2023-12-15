import { View, Text, Modal, Button } from 'react-native'
import {useEffect, useState} from 'react';
import React from 'react'

export default function Add2FavsModal( {modalVisible} : {modalVisible:boolean} ) {
    const [show, setShow] = useState(false);
    
    useEffect(() => {
        console.log(modalVisible)
        setShow(modalVisible);
    }, [modalVisible])
    
    return (
        <View style={{display:'flex',  position:'absolute',zIndex:10 ,justifyContent:'center', width:250, height:225 ,backgroundColor:'red' ,alignContent:'center', alignItems:'center'}}>
            <Modal 
            visible={show}
            >
                <Button title='asd'><Text>asdasd</Text></Button>
                <Text style={{color:'black', display:'flex'}} onPress={() => setShow(false)}>algo</Text>
            </Modal>
        </View>
  )
}