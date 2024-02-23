import React from 'react';
import { Pressable, View, Text, Image } from 'react-native'
import {style} from '../CategoryBox/style'

const CategoryBox = ({title, image, onPress}) =>{
    return(
        <Pressable onPress={onPress} style={style.container}>
            <View style={style.imageContainer}>
                <Image style={style.image} source={{uri: image}} />
            </View>
            <Text style={style.title}>{title}</Text>
        </Pressable>
    );
};
export default React.memo(CategoryBox);
