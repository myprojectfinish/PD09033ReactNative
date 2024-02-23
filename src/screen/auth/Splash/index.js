import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import {style} from './style'
import Button from '../../../../src/components/Button';

const Splash = ({navigation}) => {
return(
    <View style={style.container}> 
        <Image
        resizeMode='contain'
        style ={style.img}
        source={require('../../../assets/images/SplashScreen.png')}
        /> 
        <View style ={style.titlecontainer}>
        <Text style={style.title}>You'll Find</Text>
        <Text style={[style.title,style.innerTitle]}>All you need</Text>
        <Text style={style.title}>Here!</Text>
        </View>
        <Button title={`Sign Up`}
        onPress={() => navigation.navigate('Signup')}></Button>
        <Pressable  onPress={() => navigation.navigate('Signin')}> 
            <Text style={style.footerText}> Sign In</Text>
        </Pressable>
    </View>
);
};
export default React.memo(Splash);