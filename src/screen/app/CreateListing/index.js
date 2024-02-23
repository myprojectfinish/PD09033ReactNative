import React, { useState, useEffect} from 'react';
import {style} from '../CreateListing/style'
import {View,Text,TextInput,TouchableOpacity,Image,ScrollView,SafeAreaView} from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { Picker } from '@react-native-picker/picker';

const CreateListing = ({navigation}) => {
  const [title, setTitle] = useState(null);
  const [category, setCategory] = useState(1);
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [cameraPermission, setCameraPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setCameraPermission(status === 'granted');
    })();
  }, []);

  const selectImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
    console.log(result);
    const uriValue = result.assets[0].uri;
    console.log(uriValue);
    setImage(uriValue);
    console.log(setImage);
  };
    const Submit = async () => {
      // Lấy danh sách sản phẩm hiện tại từ server
      try {
        const productListResponse = await fetch('http://172.16.55.156:3000/product');
        const productList = await productListResponse.json();
  
        // Tìm id cuối cùng
        const lastId = productList.reduce((maxId, product) => {
          return Math.max(maxId, parseInt(product.id));
        }, 0);
  
        // Tạo id mới cho sản phẩm tiếp theo
        const newId = `${lastId + 1}`;
  
        // Tạo đối tượng chứa thông tin sản phẩm với id mới
        const newListing = {
          id: newId,
          title: title,
          image: image,
          category: category,
          price: price,
          details: description,
          status:"0",
        };
  
        // Gửi yêu cầu POST đến URL mong muốn
        const response = await fetch('http://172.16.55.156:3000/product', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // Các headers khác nếu cần thiết
          },
          body: JSON.stringify(newListing),
        });
  
        // Kiểm tra xem yêu cầu đã thành công hay không
        if (response.ok) {
          console.log('Listing submitted successfully');
          
          // Cập nhật state của các input về giá trị ban đầu
          setTitle('');
          setCategory(1); // hoặc giá trị mặc định khác
          setPrice('');
          setDescription('');
          setImage('');
        } else {
          console.error('Failed to submit listing');
        }
      } catch (error) {
        console.error('Error submitting listing:', error);
      }
    }
    const goback =()=>{
      navigation.goBack();
    }
  return (
    <SafeAreaView style={style.container}>
      <View style={style.nextcontainer}>
      <TouchableOpacity onPress={goback}>
      <Image style={style.iconLogout} source={require('../../../assets/icons/back.png')}/>
      </TouchableOpacity>
      <Text style={style.text}>Create a new Listing</Text>
      </View>
      <View style={style.get}>
        {/* Upload Photo */}
      <Text style={style.title}>Upload photos</Text>
      <TouchableOpacity onPress={selectImage} style={style.touch}>
          <View style={style.image}>
          {image ? (
            <Image source={{uri:image}} style={{position: 'absolute',width:70, height:90, borderRadius: 9,resizeMode:'contain' }} />
          ) : (
            // Thay thế với ký hiệu cộng Unicode
            <Image source={require('../../../assets/icons/cong.png')}style={{position: 'absolute',width:70, height:90, borderRadius: 9,resizeMode:'contain' }}/>
          )}
        </View>
      </TouchableOpacity>
      <Text style={style.title}>Title</Text>
      <TextInput
        style={style.input}
        placeholder="Listing Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={style.title}>Category</Text>
      <View style={style.picker}>
      <Picker
        selectedValue={category}
        onValueChange={(value) => setCategory(value)}
      >
        <Picker.Item label="1.Ban" value={1} />
        <Picker.Item label="2.Ghe" value={2} />
        {/* Add more items as needed */}
      </Picker>
      </View>
      <Text style={style.title}>Price</Text>
      <TextInput
        style={style.input}
        placeholder="Price"
        value={price}
        onChangeText={(text) => setPrice(text)}
      />
      <Text style={style.title}>Description</Text>
      {/* Description */}
      <TextInput
        style={style.inputs}
        placeholder="Description"
        multiline
        numberOfLines={5}
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      {/* Save Button */}
      <TouchableOpacity style={style.button} onPress={Submit}>
        <Text style={style.buttontext}>Submit</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CreateListing;