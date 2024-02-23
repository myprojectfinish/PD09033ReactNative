import React,{useState} from 'react';
import { View, Text,TextInput, Pressable,Image} from 'react-native';
import {style} from '../Input/style'
const input=({label, placeHolder,isPassword,value, onChangeText})=>{
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const onEyePress =() =>{
        setIsPasswordVisible(!isPasswordVisible);
    };
    return(
        <View style={style.container}>
            <Text style={style.label}>{label}</Text>
            <View style={style.inputContainer}>
                <TextInput
                value={value} onChangeText={onChangeText} 
                secureTextEntry={isPassword && !isPasswordVisible}
                placeholder={placeHolder} style={style.input}/>
                {isPassword ? (
                    <Pressable onPress={onEyePress}>
                        <Image
                        style ={style.eye}
                        source={isPasswordVisible 
                            ? require('../../assets/icons/eye.png')
                            : require('../../assets/icons/eye_closed.png')}
                        />
                    </Pressable>
                ):null}
            </View>
        </View>
    );
};
export default input;