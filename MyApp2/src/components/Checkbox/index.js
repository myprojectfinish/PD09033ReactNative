import React from 'react';
import {TouchableOpacity,Image,View } from 'react-native';
import { style } from '../Checkbox/style';
const checkBox =({checked,onCheck})=>{
    return(
        <TouchableOpacity
        activeOpacity={1}
        onPress={() => onCheck(!checked)}
        style ={style.container}>
            {checked ?(
                <View style ={style.innerContainer}>
                    <Image
                    style={style.checkIcon}
                    source={require('../../assets/icons/icon_check.png')}></Image>
                </View>
            ) : null}
        </TouchableOpacity>
    );
};
export default React.memo(checkBox);