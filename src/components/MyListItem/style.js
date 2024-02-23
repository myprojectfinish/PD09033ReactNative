import {Dimensions,StyleSheet } from "react-native";
const {width} = Dimensions.get('window');
export const style = StyleSheet.create({
    container: {
        flexDirection: 'row', // Sắp xếp theo hàng ngang
        justifyContent: 'space-between', // Các thành phần sẽ được căn giữa dọc theo hàng ngang
        alignItems: 'center', // Các thành phần sẽ được căn giữa ngang theo cột
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        borderRadius:10,
      },
      image: {
        width: 50,
        height: 50,
        marginRight: 10,
      },
      textContainer: {
        flex: 1, // Đưa cột 2 (title và price) để nó chiếm hết phần còn lại
      },
      title: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      price: {
        fontSize: 14,
        color: '#888',
      },
      deleteIconContainer: {
        width: 30,
        alignItems: 'flex-end', // Các thành phần sẽ được căn giữa theo cột dọc
      },
      icon:{
        width:20,
        height:20,
        resizeMode: 'contain',
      }
    
});