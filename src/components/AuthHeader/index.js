import React from 'react';
import { Pressable, View,Image,Text} from 'react-native';
import { style } from '../AuthHeader/style';
const AuthHeader =({title,onPress}) =>{
    return(
        <View style={style.container}>
            <Pressable onPress={onPress}>
                <Image
                style={style.iconBack}
                source={require('../../assets/icons/icon.png')}></Image>
            </Pressable>
            <Text style={style.title}>{title}</Text>
        </View>
    );
};
export default AuthHeader;