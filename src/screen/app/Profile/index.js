import React, { useState,useEffect} from 'react';
import { ScrollView,Text,View ,Image, TouchableOpacity,Alert} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { style } from './style';
import Buttons from '../../../components/Buttons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRoute } from '@react-navigation/native';
const Profile =({navigation}) =>{
        const onBack=(updateSignedInStatus)=>{
        updateSignedInStatus(false);
    };
    const route = useRoute();
    const { usId} = route.params;
    // const id = usId;
    //Lấy thông tin người đăng nhập gán cho profile
    const [data,setData] = useState();
    const getAPIU = async(usId) =>{
        const url = 'http://172.16.55.156:3000/users';
        const id = usId;
        const response = await fetch(`${url}/${id}`);
        if(response.ok){
            const result = await response.json();
            setData(result);
        }
    };
    useEffect(() => {
        getAPIU(usId);
      }, [usId]); 
        const handleLogout = () => {
          Alert.alert(
            'Xác nhận đăng xuất',
            'Bạn chắc chắn muốn đăng xuất?',
            [
              {
                text: 'Hủy',
                style: 'cancel',
              },
              {
                text: 'Đăng xuất',
                onPress: () => {
                  navigation.navigate('Signup');
                },
              },
            ],
            { cancelable: true }
          );
    };
        const nextMyListing=() =>{
            navigation.navigate('MyList');
        };
        const nextSetting=()=>{
            const settingid = usId;
            navigation.navigate('Setting',{setid:settingid});
        };
        const nextCreate = ()=>{
          navigation.navigate('Create');
        }
        //lưu só lượng sản phẩm
        const [number,setNumber]= useState(0);
        //lấy số lượng sản phẩm từ url
        const getAPINB = async () => {
            try {
              const url = 'http://172.16.55.156:3000/product';
              const response = await fetch(url);
        
              if (response.ok) {
                const result = await response.json();
                // Lấy số sản phẩm từ mảng product và cập nhật state
                setNumber(result.length);
              } else {
                console.error('Failed to fetch product data');
              }
            } catch (error) {
              console.error('Error fetching product data:', error);
            }
          };
        
          useEffect(() => {
            getAPINB();
          }, [number]);
    return(
        <SafeAreaView style={style.container}>
            {/* <ScrollView > */}
                <View style={style.nextcontainer}>
                <Text style={style.text}>Profile</Text>
                <TouchableOpacity onPress={handleLogout}><Image style={style.iconLogout} source={require('../../../assets/icons/logout.png')}/></TouchableOpacity>
                </View>
                <Text style={style.name}>{data? data.name :'Loading...'}</Text>
                <Text style={style.email}>{data? data.email :'Loading...'}</Text>
                <View style={style.another}>
                    <TouchableOpacity style={style.touch} onPress={nextMyListing}>
                        <View>
                        <Text style={style.big}>My Listings</Text>
                        <Text style={style.small}>Already have {number} listings</Text>
                        </View>
                        <Icon name="angle-right" size={30} color="blue" />
                    </TouchableOpacity>
                    <TouchableOpacity style={style.touch} onPress={nextSetting}>
                        <View style={style.title}>
                        <Text style={style.big}>Setting</Text>
                        <Text style={style.small}>Account,FAQ,Contact</Text>
                        </View>
                        <Icon name="angle-right" size={30} color="blue" />
                    </TouchableOpacity>
                    <Buttons title="Add a new listing" styles={style.button} onPress={nextCreate}/>
                </View>
            {/* </ScrollView> */}
        </SafeAreaView>
    );
};
export default React.memo(Profile);