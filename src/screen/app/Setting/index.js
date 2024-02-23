import React, { useState,useEffect} from 'react';
import { Modal,ScrollView,Text,View ,Image, TouchableOpacity,Alert,TextInput} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { style } from './style';
import Buttons from '../../../components/Buttons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRoute } from '@react-navigation/native';
const Setting =({navigation}) =>{
    const route = useRoute();
    const { setid} = route.params;
    //Lấy thông tin người đăng nhập gán cho profile
    const [data,setData] = useState();
    const [openDialog, setOpenDialog] = useState(false);

    const getAPIU = async(setid) =>{
        const url = 'http://172.16.55.156:3000/users';
        const id = setid;
        const response = await fetch(`${url}/${id}`);
        if(response.ok){
            const result = await response.json();
            setData(result);
        }
    };
    useEffect(() => {
        getAPIU(setid);
      }, [setid]); 
    const handleUpddate = data =>{
        setOpenDialog(true);

    };
    //code update
const UpdateModel = () =>{ 
    const [name,setName] = useState(undefined);
    const [email,setEmail] = useState(undefined);
    useEffect(()=>{
        if(data){
            setName(data.name);
            setEmail(data.email);
        }
    },[data]);
    const updateUser = async() =>{
        const url = 'http://172.16.55.156:3000/users';
        const ids = setid;
        let result  = await fetch(`${url}/${ids}`,{
            method:'Put',
            headers:{
                'Content-Type' : 'application/json',
    
            },
            body: JSON.stringify({name,email}),
        });
            result = await result.json();
        if(result){
            getAPIU();
            setOpenDialog(false);
        }
    };
    return(
        <View style={style.modelContent}>
            <TextInput style={style.input}
             placeholder="Enter name"
            value={name}
            onChangeText={text => setName(text)}></TextInput>
             <TextInput style={style.input} placeholder='Enter email' value={email}
            onChangeText={text => setEmail(text)}></TextInput>
            <View style={style.buttonGroup}>
                <TouchableOpacity style={style.button2} onPress={updateUser}>
                    <Text style={style.buttonText}>Update</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.button2}>
                    <Text style={style.buttonText} onPress={() =>setOpenDialog(false)}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
 };
    return(
        <SafeAreaView style={style.container}>
            {/* <ScrollView > */}
                <View style={style.nextcontainer}>
                <Text style={style.text}>Setting</Text>
                </View>
                <View style={style.nextcontainer}>
                <Text style={style.title1}>Personal Information</Text>
                <TouchableOpacity onPress={handleUpddate}><Image style={style.iconedit} source={require('../../../assets/icons/iconedit.png')}/></TouchableOpacity>
                </View>
               
                <View style={style.another}>
                    <TouchableOpacity style={style.touch}>
                        <View>
                        <Text style={style.small}>Name</Text>
                        <Text style={style.big}>{data?data.name:'Loading'}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.touch}>
                        <View>
                        <Text style={style.small}>Email</Text>
                        <Text style={style.big}>{data?data.email:'Loading'}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <Text style={style.titleHelp}>Help Center</Text>
                <View style={style.another}>
                    <TouchableOpacity style={style.touch2}>
                        <View>
                        <Text style={style.big}>FAQ</Text>
                        </View>
                        <Icon name="angle-right" size={30} color="blue" />
                    </TouchableOpacity>
                    <TouchableOpacity style={style.touch2}>
                        <View>
                        <Text style={style.big}>Contact Us</Text>
                        </View>
                        <Icon name="angle-right" size={30} color="blue" />
                    </TouchableOpacity>
                    <TouchableOpacity style={style.touch2}>
                        <View>
                        <Text style={style.big}>Privacy & Terms</Text>
                        </View>
                        <Icon name="angle-right" size={30} color="blue" />
                    </TouchableOpacity>
                </View>
            {/* </ScrollView> */}
            <Modal visible={openDialog} transparent={true}>
            <UpdateModel
            setOpenDialog={setOpenDialog}
            selectedUser={data}
            getAPI={getAPIU}>
            </UpdateModel>
        </Modal>
        </SafeAreaView>
    );
};

export default React.memo(Setting);