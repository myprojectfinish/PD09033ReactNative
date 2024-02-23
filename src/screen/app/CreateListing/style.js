import { StyleSheet} from "react-native";
export const style = StyleSheet.create({
    container:{
        padding:24,
    },
    nextcontainer:{
        paddingTop:20,
        flexDirection: 'row', // Sắp xếp theo hàng ngang
        justifyContent: 'space-between', // Các thành phần sẽ được căn giữa dọc theo hàng ngang
        alignItems: 'center', // Các thành phần sẽ được căn giữa ngang theo cột
    },
    text:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
        flex:1,
    },
    iconLogout:{
        width:20,
        height:20,
        resizeMode:'contain',
    },
    get:{
        paddingTop:15,
    },
    title:{
        color:'blue',
        marginBottom:10,
    },
    touch:{
        marginBottom:20,
       
    },
    image:{
        width: 70,
        height: 90,
        position: 'relative', 
        backgroundColor: '#e0e0e0', // Màu nền hình vuông
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderStyle: 'dashed', // Đường viền nét đứt
        borderRadius: 10, // Độ cong của góc
    },
    input:{
        borderWidth:1,
        borderColor:'blue',
        height:50,
        borderRadius:10,
        padding:10,
        marginBottom:20,
    },
    picker:{
        borderWidth:1,
        borderColor:'blue',
        height:50,
        borderRadius:10,
        marginBottom:10,
    },
    inputs:{
        borderWidth:1,
        borderColor:'blue',
        height:100,
        borderRadius:10,
        padding:10,
        textAlign:'left',
        marginBottom:20,
        textAlignVertical:'top',
    },
    button:{
        backgroundColor:'blue',
        height:50,
        borderRadius:10,
        alignItems:'center',
        paddingTop:10,
    },
    buttontext:{
        fontSize: 20,
        color: 'white',
        fontWeight:'bold',
    }
});
