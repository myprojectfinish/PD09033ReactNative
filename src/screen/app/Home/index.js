import React,{useState, useEffect} from 'react';
import { ScrollView,Text,FlatList, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { style } from './style';
import Header from '../../../components/Header';

import CategoryBox from '../../../components/CategoryBox';
import ProductHomeItem from '../../../components/ProductHomeItem';
const Home = ({navigation}) =>{
    const [keyword,setKeyword] = useState('');
    const [filteredProducts, setFilteredProducts] = useState();
    const [selectedCategory, setSelectedCategory] = useState();
    // console.log('key',keyword) kiem tra phan tim kiem co nhan gia trị hk
    //chuyen trang product details
    //get data product
    const getAPIPro = async() =>{
        const url = 'http://172.16.55.156:3000/product';
        let result = await fetch(url);
        result = await result.json();
        if(result){
            const filtered = result.filter(product => product.title.toLowerCase().includes(keyword.toLowerCase()));
            setFilteredProducts(filtered);
        }

    };
    //get data categorey
    const getAPICate = async() =>{
        const url = 'http://172.16.55.156:3000/categories';
        let result = await fetch(url);
        result = await result.json();
        if(result){
            setSelectedCategory(result);
        }

    };
    useEffect(() => {
        getAPICate();
    }, []);
    // begin search
    useEffect(() =>{
        getAPIPro();
        // if(selectedCategory && !keyword){
        //     const updatedProducts = filteredProducts.filter((product) => product?.category ===selectedCategory);
        //     setFilteredProducts(updatedProducts);
        // }else if(selectedCategory && keyword){
        //     const updatedProducts = filteredProducts.filter((product) => product?.category ===selectedCategory && product?.title?.toLowerCase().includes(keyword?.toLowerCase()));
        //     setFilteredProducts(updatedProducts);
        // }else if(!selectedCategory && keyword){
        //     const updatedProducts = filteredProducts.filter((product) => product?.title?.toLowerCase().includes(keyword?.toLowerCase()));
        //     setFilteredProducts(updatedProducts);
        // }else if(!selectedCategory && !keyword){
        //     setFilteredProducts(filteredProducts);
        // }
    },[selectedCategory,keyword])
    const renderCategoryItem = ({item}) =>{
        return <CategoryBox {...item}/>
    };

    const onNext=(productID)=>{
        navigation.navigate('Prodetails',{productId:productID});
    };
    const renderProductItem = ({item}) =>{
        return<ProductHomeItem onPress={() =>onNext(item.id)} {...item}/>
    };
    return(
        <SafeAreaView>
            {/* <ScrollView style={style.container}> */}
            <Header 
            showSearch
            onSearch={setKeyword}
            keyword={keyword}
            title="Find All You Need"/>
            <FlatList
            showsHorizontalScrollIndicator={false}
            style={style.list}
            horizontal
            data={selectedCategory}
            renderItem={renderCategoryItem}
            keyExtractor={(item,index) => String(index)}/>
            <FlatList 
            style={style.productlist}
            numColumns={2}
            data={filteredProducts}
            renderItem={renderProductItem}
            keyExtractor={item => String(item.id)}
            ListFooterComponent={<View style={{height:200}}/>}/>
            {/* </ScrollView> */}
        </SafeAreaView>
    );
};
export default React.memo(Home);