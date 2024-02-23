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
    iconedit:{
        width:20,
        height:20,
        resizeMode:'contain',
    },
    name:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:10,
        marginTop:10,
        color:'black',
    },
    title1:{
        fontSize:20,
        marginBottom:5,
        color:'black',
        paddingLeft:10,
    },
    titleHelp:{
        fontSize:20,
        marginBottom:5,
        color:'black',
        paddingLeft:10,
    },
    another:{
        padding:15,
        height:'900',
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
    touch2:{
        padding:10,
        height:50,
        flexDirection: 'row', // Sắp xếp theo hàng ngang
        justifyContent: 'space-between', // Các thành phần sẽ được căn giữa dọc theo hàng ngang
        alignItems: 'center', // Các thành phần sẽ được căn giữa ngang theo cột
        backgroundColor:'white',
        margin:10,
        fontWeight:'bold',
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
        fontSize:18,
        color:'blue',
    },
    small:{
        fontSize:14,
        color:'black',
    },
    //model update
    //style cho model 
    modelContent:{
        backgroundColor:'white',
        padding:16,
        marginTop:100,
        borderRadius:8,
    },
    input:{
        height:40,
        borderColor:'gray',
        borderWidth:1,
        borderRadius:4,
        paddingHorizontal:8,
        marginBottom:16,
    },
    buttonGroup:{
        flexDirection:'row',
        justifyContent:'center',
    },
    button2:{
        paddingVertical:12,
        paddingHorizontal:16,
        marginHorizontal:8,
        backgroundColor:'blue',
        borderRadius:8,
    },
});