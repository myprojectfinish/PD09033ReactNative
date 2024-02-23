import React from "react";
import { Text, TouchableOpacity } from 'react-native'
import {style} from './style'

const Buttons=({title,onPress,styles}) =>{
const handlePress=() =>{
    console.log('Text even button bla bla')
}
return (
    <TouchableOpacity
    onPress={onPress}
    style ={[style.container,styles]}
    >
    <Text style={style.textContent}>{title} </Text>
    </TouchableOpacity>
);
}
export default React.memo(Buttons);