import { StyleSheet } from "react-native";
export const style = StyleSheet.create({
    container:{
        paddingTop:15,
        paddingLeft:15,
        paddingRight:15,
        flexDirection:'column',
        flex:1,
    },
    nextcontainer:{
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
    },
    name:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:10,
        marginTop:10,
        color:'black',
    },
    email:{
        fontSize:16,
        marginBottom:10,
        color:'black',
    },
    another:{
        padding:15,
        height:'900',
        flex:1,
    },
    touch:{
        padding:10,
        height:80,
        flexDirection: 'row', // Sắp xếp theo hàng ngang
        justifyContent: 'space-between', // Các thành phần sẽ được căn giữa dọc theo hàng ngang
        alignItems: 'center', // Các thành phần sẽ được căn giữa ngang theo cột
        backgroundColor:'white',
        margin:10,
        borderRadius:10,
        //đổ bóng
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 10, // Cho Android
    },
    button:{
        position:'absolute',
        bottom:10,
        width:'100%',
    },
    big:{
        fontSize:20,
        fontWeight:'bold',
        color:'blue',
    },
    small:{
        fontSize:14,
        color:'black',
    }
});