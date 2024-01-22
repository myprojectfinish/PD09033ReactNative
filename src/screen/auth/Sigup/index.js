import React,{useState}from 'react';
import { View,Text} from 'react-native';
import {style} from './style'
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input'
import Checkbox from '../../../components/Checkbox';
import Button from '../../../components/Button';
import Separator from '../../../components/Separator';
import GoogleLogin from '../../../components/GoogleLogin';
const Sigup=()=>{
    const [checked, setChecked] = useState(false);
    const onSignin=() =>{
      console.log('Test Sign in');
    };
    return(
        <View style={style.container}>
          <AuthHeader title=" Sign Up"/>
          <View style={style.magrin}>
          <Input label="Name" placeHolder="Meo Nguyen"/>
          <Input label="Email" placeHolder="meonguyenvan5102004@gmail.com"/>
          <Input isPassword label="Password" placeHolder="********"/>
          </View>
          <View style={style.checkRow}>
            <Checkbox checked={checked} onCheck={setChecked}></Checkbox>
            <Text style={style.checkText}>I agree with Terms & Privacy</Text>
          </View>
            <Button styles={style.button} title="Sign Up"></Button>
            <Separator text="Or sign up with"></Separator>
            <GoogleLogin></GoogleLogin>
            <Text style={style.footerText}>
              Already have an account?
              <Text onPress={onSignin} style={style.footerlink}>
                Sign Up
              </Text>
            </Text>
        </View>
    );
};
export default React.memo(Sigup);