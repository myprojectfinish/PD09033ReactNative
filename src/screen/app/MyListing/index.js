import React, { useState,useEffect } from 'react';
import { FlatList, ScrollView,Text,View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { style } from '../MyListing/style';
import MyListItem from '../../../components/MyListItem';
const MyListing =({navigation}) =>{
    const [datas,setData] = useState();
    const getAPIFv = async () => {
        const url = 'http://172.16.55.156:3000/product';
        let result = await fetch(url);
        result = await result.json();
        if (result) {
          setData(result);
        }
      };
      useEffect(() => {
        getAPIFv();
    });
    //click vào sản phẩm thì sẽ đến trang details
    const onNext=(productID)=>{
        navigation.navigate('Prodetails',{productId:productID});
    };
    // khi click xoa
    const updateProductStatus = async(productIDs) => {
        try {
          const url = `http://172.16.55.156:3000/product`;
          const id = productIDs;
          const response = await fetch(`${url}/${id}`,{
            method:'Delete',
        });
        result = await result.json();
        if(result){
            getAPIFv(productIDs);
        }
        } catch (error) {
          console.error('EDelete fails', error);
        }
      };
    const renderFvItem = ({item})=>{
        return<MyListItem onPress={() =>onNext(item.id)} onDelete={()=>updateProductStatus(item.id)} {...item}/>
    }
    return(
        <SafeAreaView style={style.container}>
            {/* <ScrollView > */}
                <Text style={style.text}>My Listings</Text>
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
export default React.memo(MyListing);
