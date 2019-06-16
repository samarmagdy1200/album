import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

const Button = (props) => {
    return(
        <View><TouchableOpacity>{props.children}</TouchableOpacity></View>
    )
}


/*const styles = StyleSheet.create({
    buttonStyle: {
      flex: 1,
      alignSelf: 'stretch',
      borderColor: '#09C',
      borderWidth: 1,
      borderRadius: 2,
      margin: 5
    }
  })*/
export default Button;