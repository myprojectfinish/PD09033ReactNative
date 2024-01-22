import React from 'react';
import {Image,TouchableOpacity} from 'react-native';
import {style} from '../GoogleLogin/style';
import {GoogleSignin,statusCodes}  from '../GoogleLogin'
const gooleLogin =()=>{
    const handGoogleLogin = async () =>{
        try {
            await GoogleSignin.hasPlayServices();
            const userInfor = await GoogleSignin.signIn();
            console.log('userInfor',userInfor);
        } catch (error) {
            if(error.code===statusCodes.SIGN_IN_CANCELLED){

            }else if(error.code===statusCodes.IN_PROGRESS){

            }else if(error.code===statusCodes.PLAY_SERVICES_NOT_AVAILABLE){
                
            }
        }
    };
    return(
        <TouchableOpacity
        activeOpacity={0.6}
        onPress={handGoogleLogin}
        style={style.container}>
            <Image style={style.image}
            source={require('../../assets/icons/Vector.png')}></Image>
        </TouchableOpacity>
    );
};
export default React.memo(gooleLogin);