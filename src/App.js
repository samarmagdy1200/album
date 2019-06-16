

import React, {Component} from 'react';
import { View,Image,Text,StyleSheet} from 'react-native';
import CardSection from './CardSection';
import Button from './Button';


export default class App extends Component {
  render() {
    return (
      <View>
      <CardSection>
            <View>
              <Image style={styles.image} source={require('./image/d.jpg')}/>
            </View>
            
            <View style={styles.text}>
              <Text style={styles.albumName}>hkhhh</Text>
              <Text style={styles.name}>amr</Text>
            </View>
                                                                                                                                                                                                                                                        
      </CardSection>

      <CardSection>
              <Image style={{flex:1}} source={require('./image/d.jpg')}/>
      </CardSection>

      <CardSection>
              <Button><Text>Click Here</Text></Button>
      </CardSection>
      </View>

    );                                                                                                               
  }
} 
const styles = StyleSheet.create({
 
  image: {
    
    width:50,
    height:50,
    borderRadius: 50,
    marginRight: 20
  },
  text: {
    flex:2
  },
  albumName: {
    color: 'red'
  },
  name: {
    color: 'green'
  }
});