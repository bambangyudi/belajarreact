import React from 'react';
import {
  Text, View, ScrollView, Image, TextInput
} from 'react-native';


const App = () => {
  return(
    <ScrollView>
       <View style={{width:100, backgroundColor:'#0abde3'}}>
        <Text>Bambang</Text>
        <Home/>
        <Gambar/>
        <Text>Yudi</Text>
        <Text>Nugraha</Text>
      </View>
      <View>
        <Text>Nama</Text>
        <TextInput></TextInput>
        <Text>Kelas</Text>
        <TextInput></TextInput>
      </View>
    </ScrollView>
  );
};

const Home = () =>{
  return <Text>Lorem bos</Text>;
}

const Gambar = () =>{
  return <Image source={{uri:'http://placeimg.com/100/100/tech'}} style={{width:100, height:100}}/>;
}

export default App;
