import React,{Component, useState} from 'react';
import {View,Text,Pressable, Modal,Image,Alert} from 'react-native';
import {styles} from './style';

const Lab33 =()=>{
  const [modalVisible, setModalVisible] = useState(false);
  return(
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Bạn đã tắt model bằng nút back của thiết bị');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Image
        resizeMode='contain'
        style ={styles.img}
        source={require('../../../assets/logoreact.png')}/> 
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Ẩn Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Mở Modal</Text>
      </Pressable>
    </View>
  );
};
 export default Lab33;