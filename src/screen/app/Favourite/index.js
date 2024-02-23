import React, { useState,useEffect } from 'react';
import { FlatList, ScrollView,Text,View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { style } from '../Favourite/style';
import ProductListFv from '../../../components/ProductListFv';
const Favourite =({navigation}) =>{
    const [datas,setData] = useState();
    const getAPIFv = async () => {
        const url = 'http://172.16.55.156:3000/product';
        let result = await fetch(url);
        result = await result.json();
      
        if (result) {
          // Lọc những sản phẩm có status bằng 1
          const filtered = result.filter(product => product.status === "1");
          setData(filtered);
        }
      };
      useEffect(() => {
        getAPIFv();
    });
    //click vào sản phẩm thì sẽ đến trang details
    const onNext=(productID)=>{
        navigation.navigate('Prodetails',{productId:productID});
    };
    // khi click xoa thì chuyển status sản phẩm đó về trạng thái 0
    const updateProductStatus = async(productIDs) => {
        try {
          const url = `http://172.16.55.156:3000/product`;
          const id = productIDs;
          const response = await fetch(`${url}/${id}`,{
            method: 'PATCH', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status:"0"}),
          });
      
          if (!response.ok) {
            console.error('Failed to update product status');
            return;
          }
          // Sau khi cập nhật thành công, bạn có thể gọi hàm lấy chi tiết sản phẩm để cập nhật UI
          getAPIFv(productIDs);
        } catch (error) {
          console.error('Error updating product status:', error);
        }
      };
    const renderFvItem = ({item})=>{
        return<ProductListFv onPress={() =>onNext(item.id)} onDelete={()=>updateProductStatus(item.id)} {...item}/>
    }
    return(
        <SafeAreaView style={style.container}>
            {/* <ScrollView > */}
                <Text style={style.text}>Favorties</Text>
                <FlatList 
                style={style.productlist}
                numColumns={1}
                data={datas}
                renderItem={renderFvItem}
                keyExtractor={item => String(item.id)}
                ListFooterComponent={<View style={{height:200}}/>}/>

            {/* </ScrollView> */}
        </SafeAreaView>
    );
};
export default React.memo(Favourite);
