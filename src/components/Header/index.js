import React,{useState} from 'react';
import { View,Text,Image,Pressable } from 'react-native';
import {style} from '../Header/style';
import Input from '../Input';
const Header = ({title, onBackPress,onLogout,showLogout, showSearch, onSearch, keyword, showBack}) =>{
    const [showSearchInput, setShowSearchInput] = useState(false);

    const onSeachClick=() =>{
        setShowSearchInput(s =>!s)
    }
    return(
        <View style={style.mainContainer}>
            <View style={style.container}>
                {showBack ? (
                    <Pressable onPress={onBackPress} hitSlop={20}>
                        <Image style={style.image} source={require('../../assets/icons/icon.png')}/>
                    </Pressable>
                ): showSearch ? (
                    <Pressable onPress={onSeachClick} hitSlop={20}>
                        <Image style={style.image} source={require('../../assets/icons/ri_search-2-line.png')}/>
                    </Pressable>
                ):<View style={style.space}/>}

                <Text style={style.title}>{title}</Text>
                {showLogout ? (
                    <Pressable onPress={onLogout} hitSlop={20}>
                    <Image style={style.image} source={require('../../assets/icons/ri_search-2-line.png')}/>
                </Pressable>
            ):<View style={style.space}/>}
            </View>
            {showSearchInput ? (
                <Input onChangeText={onSearch} value={String(keyword)} placeHolder="Type your keyword..."/>
            ) : null}
        </View>
    );
};
export default React.memo(Header);