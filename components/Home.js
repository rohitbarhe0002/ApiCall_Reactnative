import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";


export default function  Home (props) {
  console.log("my",props);
 return (
  <View style={styles.container}>
 <Text style={{fontSize:90}}>Home</Text>
 <Text>{props.data  }</Text>
  </View>
);
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
 

  
});


