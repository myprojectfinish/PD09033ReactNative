import React,{useState}from 'react';
import { View,Text} from 'react-native';
import {style} from './style'
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input'
import Checkbox from '../../../components/Checkbox';
import Button from '../../../components/Button';
import Separator from '../../../components/Separator';
import GoogleLogin from '../../../components/GoogleLogin';
const Sigup=({navigation})=>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword]= useState('');
    const [checked, setChecked] = useState(false);
    console.log(email);
    const saveNewUser = async() =>{
      if(!checked){
        alert(`Bạn chưa đồng ý với các điều khoản`);
      }else{
        url = 'http://172.16.55.156:3000/users';
        let result = await fetch(url);
        result = await result.json()
        .then(users => {
          // Kiểm tra xem email đã tồn tại trong danh sách users hay chưa
          const existingUser = users.find(user => user.email === email);
      
          if (existingUser) {
            alert('Email đã được sử dụng. Vui lòng chọn email khác.');
          } else {
            saveData(name,email,password);
            }
        })
      }
}
// Tiếp tục đăng ký user mới
const saveData = async(name,email,password)=>{
  const url = 'http://192.168.1.6:3000/users';
  let results  = await fetch(url,{
    method:'Post',
    headers:{
        'Content-Type' : 'application/json',

    },
    body:JSON.stringify({name,email,password}),
});
    results = await results.json();
    if(results){
        alert(`Tạo tài khoản thành công`);
        navigation.navigate('Signin');
    }
}
    const onSignin=() =>{
      navigation.navigate('Signin');
    };
    const goBack=()=>{
      navigation.navigate('splash');
    };

    return(
        <View style={style.container}>
          <AuthHeader onPress={goBack} title="Sign Up"/>
          <View style={style.magrin}>
          <Input label="Name" placeHolder="Meo Nguyen" value={name} onChangeText={text => setName(text)} />
          <Input label="Email" placeHolder="meonguyenvan5102004@gmail.com" value={email} onChangeText={text => setEmail(text)}/>
          <Input isPassword label="Password" placeHolder="********" value={password} onChangeText={text => setPassword(text)}/>
          </View>
          <View style={style.checkRow}>
            <Checkbox checked={checked} onCheck={setChecked}></Checkbox>
            <Text style={style.checkText}>I agree with Terms & Privacy</Text>
          </View>
            <Button styles={style.button} title="Sign Up" onPress={saveNewUser}></Button>
            <Separator text="Or sign up with"></Separator>
            <GoogleLogin></GoogleLogin>
            <Text style={style.footerText}>
              Already have an account?
              <Text onPress={onSignin} style={style.footerlink}>
                Sign In
              </Text>
            </Text>
        </View>
    );
};
export default React.memo(Sigup);