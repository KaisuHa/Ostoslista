import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';




export default function App() {
  const [text, setText] = useState('');
  const [data, setData] = useState([]);

  const addProduct = () => {
    setData([...data, {key: text}]);
    setText('');
  }

  const clearList = (data) => {
      setData('');
  }


  return (
    <View style={styles.container}>
      <TextInput style={{width: 200, borderWidth: 1, marginTop: 250, marginBottom: 50}} 
      value = {text}
      onChangeText = {text => setText(text)}
      />
      <StatusBar style="auto" />
      <View style={{flexDirection:'row', marginBottom: 10}}>
      <Button title="ADD" onPress={addProduct} /> 
      <Button title="CLEAR" onPress={()=>clearList(data)}/> 
      </View>
      <Text>Shopping list</Text>
      <FlatList
      data={data}
      renderItem = {({ item }) => <Text> { item.key }</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
