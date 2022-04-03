import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Alert
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  
  var [counter,setValue] = useState(0);

  const click = () => {
    
  setValue  
  (counter = counter +  1)

  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>You have clicked {counter} times
      </Text>
      <Button title='Click' onPress={click}></Button>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text :{
    color:'#fff',
    margin:10,
  },
});
