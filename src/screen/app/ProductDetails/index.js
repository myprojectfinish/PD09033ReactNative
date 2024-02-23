import React,{useState,useEffect} from 'react';
import { ImageBackground, StatusBar,View,Text, Pressable, TouchableOpacity,Image} from 'react-native';
import {style} from '../ProductDetails/style'
import Buttons from '../../../components/Buttons';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
const ProductDetails= ({navigation})=>{
    const route = useRoute();
    const { productId} = route.params;
    const [data,setData] = useState();
    const getAPIDetails = async(productId) =>{
        const url = 'http://172.16.55.156:3000/product';
        const id = productId;
        const response = await fetch(`${url}/${id}`);
        if(response.ok){
            const result = await response.json();
            setData(result);
        }
    };
    useEffect(() => {
        getAPIDetails(productId);
      }, [productId]); 
      
    const [isMarker1, setIsMarker1] = useState(true);
    const [productStatus, setProductStatus] = useState("1");
    const updateProductStatus = async (productId,productStatus) => {
        try {
          const url = `http://172.16.55.156:3000/product`;
          const id = productId;
          const response = await fetch(`${url}/${id}`,{
            method: 'PATCH', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status:productStatus}),
          });
      
          if (!response.ok) {
            console.error('Failed to update product status');
            return;
          }
          // Sau khi cập nhật thành công, bạn có thể gọi hàm lấy chi tiết sản phẩm để cập nhật UI
          getAPIDetails(productId);
        } catch (error) {
          console.error('Error updating product status:', error);
        }
      };
    const onClick = async() => {
        setIsMarker1((prev) => !prev);
        setProductStatus(isMarker1 ? "0" : "1");
        //gửi sự thay đổi trạng thái lên url
        await updateProductStatus(productId,productStatus);
    };
    // console.log(productStatus);
    const goBack=()=>{
        navigation.goBack();
    };
    return(
        <View style={style.container}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)"/>
            <ImageBackground
            source={{ uri: data ? data.image : 'Load' }}
            style={style.image}>
                <TouchableOpacity style={style.touch} onPress={goBack}>
                <Icon name="angle-left" size={30} color="blue" />
                </TouchableOpacity>
            </ImageBackground>
            <View style={style.detailsContainer}>
            <View style={style.nd}>
                <Text style={style.title}>{data ? data.title: 'Loading'}</Text>
                <Text style={style.price}>{data ? data.price: 'Loading...'}</Text>
                <Text style={style.details} >{data ? data.details : 'Loading...'} </Text>
            </View>
            <View style={style.footer}>
                <Pressable style={style.button1} onPress={onClick}>
                <Image style={style.iconlike}
                 source={isMarker1 ? require('../../../assets/icons/marker1.png') : require('../../../assets/icons/marker.png')}/>
                </Pressable>
                <Buttons title="Contact Seller"/>
            </View>
            </View>
        </View>
    );
};
export default ProductDetails;