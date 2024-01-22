import React from 'react';
import { Pressable, View,Image,Text} from 'react-native';
import { style } from '../AuthHeader/style';
const authHeader =({title,onBackPress}) =>{
    return(
        <View style={style.container}>
            <Pressable onBackPress={onBackPress}>
                <Image
                style={style.iconBack}
                source={require('../../assets/icons/icon.png')}></Image>
            </Pressable>
            <Text style={style.title}>{title}</Text>
        </View>
    );
};
export default authHeader;