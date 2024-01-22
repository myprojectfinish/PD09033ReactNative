import React,{useState}from 'react';
import { ScrollView,Text, View} from 'react-native';
import { style } from '../Sigin/style'
import AuthHeader from '../../../components/AuthHeader';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';
import GoogleLogin from '../../../components/GoogleLogin';
import Separator from '../../../components/Separator';

const Sigin =(navigation)=>{
    const onSignUp=()=>{
        console.log('test');
    };
    const onBack=()=>{
        navigation.goBack();
    };
    return(
        <ScrollView style={style.container}>
            <AuthHeader onBackPress={onBack} title="Sign In"/>
            <View>
            <Input label="E-mail" placeHolder="meonguyenvan"/>
            <Input isPassword label="Password" placeHolder="******"/>
            </View>
            <Button style = {style.button} title="Sign In"/>
            <Separator text="Or sign in with"/>
            <GoogleLogin/>
            <Text style={style.footerText}>
                Don't have an account?
                <Text onPress={onSignUp} style={style.footerlink}>
                    {''}Sign Up
                </Text>
            </Text>
            
            
        </ScrollView>
    );
};
export default React.memo(Sigin);