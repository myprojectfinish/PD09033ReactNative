import React,{useState}from 'react';
import { ScrollView,Text, View} from 'react-native';
import { style } from '../Sigin/style'
import AuthHeader from '../../../components/AuthHeader';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';
import GoogleLogin from '../../../components/GoogleLogin';
import Separator from '../../../components/Separator';
const Sigin =({navigation})=>{
    const [email, setEmail] = useState('');
    const [password, setPassword]= useState('');
    console.log(email);
    const onSignUp=()=>{
        navigation.navigate('Signup')
    };
    const onBack=()=>{
        navigation.goBack();
    };
    // Thực hiện đẩy trạng thái lên API
    // const postData = async (url = 'http://192.168.1.6:3000/using', data = {}) => {
    //     const id =1;
    //     const response = await fetch(`${url}/${id}`, {
    //       method: 'Put',
    //       mode: 'cors',
    //       cache: 'no-cache',
    //       credentials: 'same-origin',
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       redirect: 'follow',
    //       referrerPolicy: 'no-referrer',
    //       body: JSON.stringify(data)
    //     });
    //     return await response.json();
    //   };
    // //Gửi trạng thái đăng nhập lên API
    // const updateSignedInStatus = async (status) => {
    //     const url = 'http://172.16.55.156:3000/using';
    //     const data = { status: status};
        
    //     const response = await postData(url, data);
    //     console.log(response); 
    //   };
    const onMenu=(usID) =>{
        navigation.navigate('Tabs',{usId:usID});
        // console.log(usID);
      };
    const checkLogin = async() =>{ 
        url = 'http://172.16.55.156:3000/users';
          try {
            const response = await fetch(url);
            const users = await response.json();
    
            const existingUser = users.find(user => user.email === email);
            const existingPass = users.find(user => user.password === password);
    
            if (existingUser && existingPass) {
                const exuser = users.find(user => user.email === email && user.password === password);
                if (exuser) {
                    alert('Đăng nhập thành công');
                    onMenu(exuser.id);
                } else {
                    alert('Có lỗi xảy ra khi xác thực người dùng');
                }
            } else {
                alert('Thông tin tài khoản bị sai. Vui lòng kiểm tra lại');
            }
        } catch (error) {
            console.error('Lỗi khi fetch dữ liệu:', error);
            // Xử lý lỗi nếu cần
            alert('Có lỗi xảy ra khi đăng nhập. Vui lòng thử lại sau');
        }
    };
    return(
        <ScrollView style={style.container}>
            <AuthHeader  title="Sign In" onPress={onBack}/>
            <View style={style.margin}>
            <Input label="E-mail" placeHolder="meonguyenvan" value={email} onChangeText={text => setEmail(text)}/>
            <Input isPassword label="Password" placeHolder="******" value={password} onChangeText={text => setPassword(text)}/>
            </View>
            <Button style = {style.button} title="Sign In" onPress={checkLogin}/>
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