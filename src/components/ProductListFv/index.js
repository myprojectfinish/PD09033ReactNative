import React from 'react';
import { Pressable, Text, View, Image, TouchableOpacity } from 'react-native';
import {style} from '../ProductListFv/style';

const ProductListFv = ({title, image, price, onPress,onDelete}) =>{

    return(
        <Pressable onPress={onPress} >
            <View style={style.container}>
            <Image style={style.image} source={{uri: image}}/>
            <View style={style.textContainer}>
            <Text style={style.title}>{title}</Text>
            <Text style={style.price}>{price}</Text>
            </View>
            <TouchableOpacity style={style.deleteIconContainer} onPress={onDelete}>
                <Image style={style.icon}source={require('../../assets/icons/icondelete.png')}/>
            </TouchableOpacity>
            </View>
        </Pressable>
    );
}
export default React.memo(ProductListFv);