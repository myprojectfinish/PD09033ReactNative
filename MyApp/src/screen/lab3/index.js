import React,{Component, useState} from 'react';
import {View,Text, TextInput,} from 'react-native';
import {styles} from './style';


const Lab3 = () => {
  const [name,setName] =useState('');
  const [phone,setPhone] =useState('');
  const [password,setPassword]=useState('');
  return (
    <View>
      <TextInput
      // value='name'
      onChangeText={setName}
      placeholder="Nhập họ tên"
      style={[styles.tipStyle,styles.form]}/>
      <TextInput
      // value='phone'
      onChangeText={setPhone}
      placeholder="Nhập số điện thoại"
      keyboardType='phone-pad'
      style={styles.tipStyle}/>
       <TextInput
      // value='password'
      onChangeText={setPassword}
      placeholder="Nhập mật khẩu"
      secureTextEntry={true}
      style={styles.tipStyle}/>
      <View style ={styles.container}>
      {/* Line 1 */}
      <Text style={styles.baseText}>
        Em vào đời bằng{' '}
        <Text style = {[styles.boldText,styles.red]}>vang đỏ </Text> anh vào
        đời bằng{' '}
        <Text style = {[styles.boldText,styles.yellow]}>nước trà</Text>
      </Text>
      {/* Line 2 */}
      <Text style={styles.baseText}>
        Bằng cơn mưa thơm{' '}
        <Text style = {[styles.boldText,styles.sizeh,styles.italicText]}>mùi đất{' '}</Text>{' '}
        và{' '}
        <Text style = {[styles.sizem,styles.italicText]}>bằng hoa dại mọc trước nhà</Text>
      </Text>
      {/* Line 3 */}
      <Text 
       style = {
        [styles.baseText,
        styles.italicText,
        styles.boldText,
        styles.gray,]
      }>
       Em vào đời bằng kế hoạch anh vào đời bằng mộng mơ
      </Text>
      {/* Line 4 */}
      <Text style={styles.baseText}>
        Lý trí em là{''}
        <Text style = {styles.styleText}>{' '} công cụ {' '}</Text> còn trái tim anh là
       <Text style = {styles.styleText}>{' '} động cơ {' '}</Text>
      </Text>
      {/* Line 5 */}
      <Text style = {[styles.baseText,styles.right]}>
        Em vào đời nhiều đồng nghiệp anh vào đời nhiều thân tình
      </Text>
      {/* Line 6 */}
      <Text 
      style ={[
        styles.baseText,
        styles.styleTexth,
      ]}>
        Anh chỉ muốn chân tình đạp đất không muốn đạp ai dưới chân mình
      </Text>
       {/* Line 7 */}
       <Text 
      style ={[
        styles.baseText,
        styles.styleTextt,
      ]}>
      Em vào đời bằng<Text style ={styles.white}> mây trắng</Text> em
      vào đời bằng<Text style ={styles.yellow}>nắng xanh</Text>
      </Text>
      {/* Line 8 */}
      <Text 
      style ={[
        styles.baseText,
        styles.styleTextt,
      ]}>
      Em vào đời bằng<Text style ={styles.yellow}>đại lộ</Text> và con
      đường đó giờ<Text style ={styles.white}>vắng anh</Text>
      </Text>
    </View>
    </View>
    
  );
};

export default Lab3;