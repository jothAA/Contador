import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [count, setCount] = useState(0)
  const handlerSum = () => setCount (count + 1)
  return (
    <View style={styles.container}>
      <Text>Contador</Text>
      <Text>O valor do neymar é {count} </Text>
      <Button title='Somar' onPress={handlerSum}></Button>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  Text: { 
    
  }
});
