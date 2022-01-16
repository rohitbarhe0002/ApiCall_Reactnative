import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  Image
} from 'react-native'

class App extends Component {
constructor(){
  super();
  this.state={
   
    data:[]
  }
}
componentDidMount(){
  this.callApi();
}
submit(){
console.log(this.state.password);
}
async callApi(){
  const resp = await fetch('https://fakestoreapi.com/products')
  const respjson = await resp.json();
  this.setState({data:respjson})

}
 render() {
   console.log(this.state.data);
    return (
      <View  style={{alignItems:'flex-start'}}>
        <Text style={{textAlign:'center',fontSize:30}}> Basic Form </Text>
 <TextInput 
  style={styles.TextBox}   
  placeholder='Enter-name' 
 onChangeText={(text)=>{this.setState({name:text})}}>
 </TextInput>
  <TextInput 
  style={styles.TextBox}  
  secureTextEntry={true} 
  placeholder='Enter-password' 
 onChangeText={(text)=>{this.setState({password:text})}}>
 </TextInput>

  <TextInput 
  style={styles.TextBox}   
  placeholder='Enter-address' 
 onChangeText={(text)=>{this.setState({address:text})}}>
 </TextInput>

 <Button onPress={()=>{this.submit()}} title='submit' style={{textAlign:'center'}}></Button>
 
 <FlatList data={this.state.data} renderItem={({item})=>
 <>
 <Text>{item.category}</Text><br/>
   <Image
          style={styles.tinyLogo}
        source={item.image}
      /><br/>
      <Text>{item.description}</Text>
      </>
}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  TextBox: {
  borderColor:'skyblue',
  borderWidth:2,
  padding:10,
  marginHorizontal:20,
  marginVertical:25,

    
  },
   tinyLogo: {
    width: 400,
    height: 250,
  },

})

export default App;



