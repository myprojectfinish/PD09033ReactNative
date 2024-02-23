import React, { useEffect,useState } from 'react';
import {Image} from 'react-native';
import Splash from '../MyApp2/src/screen/auth/Splash';
import Sigup from './src/screen/auth/Sigup';
import Sigin from '../MyApp2/src/screen/auth/Sigin';
import Favourite from '../MyApp2/src/screen/app/Favourite';
import Home from './src/screen/app/Home';
import Profile from '../MyApp2/src/screen/app/Profile';
import ProductDetails from './src/screen/app/ProductDetails';
import MyListing from './src/screen/app/MyListing';
import Setting from './src/screen/app/Setting';
import CreateListing from './src/screen/app/CreateListing';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Tabs = ({route})=> (<Tab.Navigator 
  screenOptions={({route}) =>({
    tabBarIcon: ({focused}) =>{
      let icon;
      if(route.name==='Home'){
        icon = focused
          ? require('./src/assets/icons/clarity_home.png')
          :require('./src/assets/icons/clarity_home-solid.png');
      } else if(route.name==='Favorties'){
        icon = focused
          ? require('./src/assets/icons/marker.png')
          :require('./src/assets/icons/marker1.png');
      } else if(route.name==='Profile'){
        icon = focused
          ? require('./src/assets/icons/bi_person-fill.png')
          :require('./src/assets/icons/bi_person.png');
      }
      return <Image style={{width:24, height:24}} source={icon}/>;
    },
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {borderTopColor:"#DADADA"},
  })}
>
  <Tab.Screen name='Home' component={Home} />
  <Tab.Screen name='Favorties' component={Favourite} />
  <Tab.Screen name='Profile' component={Profile} initialParams={{ usId: route.params?.usId }} />
  </Tab.Navigator>
  );
const App = ()=> {
  // const [isSignedIn, setIsSignedIn] = useState(false);

  // const getAPI = async () => {
  //   const url = 'http://192.168.1.6:3000/using';
  //   const id = 1;
  //   let result = await fetch(`${url}/${id}`);
  //   result = await result.json();
  //   // console.log(result);
  //   if (result.status==="true") {
  //     setIsSignedIn(true);
  //   } else{
  //     setIsSignedIn(false);
  //   }
  // };
  // useEffect(() => {
  //     getAPI();
  //   }, []);
  return (
  <NavigationContainer>
    <Stack.Navigator>
            <Stack.Screen name="splash" component={Splash} options={{headerShown: false}} initialRouteName="splash" />
            <Stack.Screen name="Signin" component={Sigin} options={{headerShown: false}} />
            <Stack.Screen name="Signup" component={Sigup} options={{headerShown: false}}/>
            <Stack.Screen name="Tabs" component={Tabs} options={{headerShown: false}} />
            <Stack.Screen name='Prodetails' component={ProductDetails} options={{headerShown: false}}/>
            <Stack.Screen name='MyList' component={MyListing} options={{headerShown: false}}/>
            <Stack.Screen name='Setting' component={Setting} options={{headerShown: false}}/>
            <Stack.Screen name='Create' component={CreateListing} options={{headerShown:false}}/>
      </Stack.Navigator>
  </NavigationContainer>
  );
};
 export default App;