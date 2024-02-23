import React from 'react';
import { Pressable, Text, View, Image } from 'react-native';
import {style} from './style';

const ProductHomeItem = ({title, image, price, onPress}) =>{

    return(
        <Pressable onPress={onPress} style={style.container}>
            <Image style={style.image} source={{uri: image}}/>
            <Text style={style.title}>{title}</Text>
            <Text style={style.price}>{price}</Text>
        </Pressable>
    );
}
export default React.memo(ProductHomeItem);
