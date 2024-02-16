import { View, Text } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Home = () => {
  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text style={{color:'blue', fontWeight:'bold', fontSize:25,}}>Home</Text>
    </View>
  )
}

export default Home