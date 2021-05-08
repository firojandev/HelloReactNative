/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import AppHeader from './src/components/screens/headers/AppHeader';
import AddTodo from './src/components/screens/home/addTodo';
import TodoItem from './src/components/screens/home/TodoItem';

const App = () => {

  const [todos, setTodos] = useState([
    {text:'Buy coffe', key:'1'},
    {text:'Play football', key:'2'},
    {text:'Sing a song', key:'3'},
    {text:'Drink a tea', key:'4'},

  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }

  const submitHandler = (text) => {

    if(text.length > 3){
      setTodos((prevTodos) => {
        return [
          {text: text, key: Math.random.toString() },
          ...prevTodos
        ]
      });
    }else{
      Alert.alert('Opps!','Must be greater than 3 charachter',[
        {text:'Understood',onPress:() => console.log('alert closed')}
      ]);
    }

    
  }

  return (
    <SafeAreaView style={styles.container}>

      <TouchableWithoutFeedback onPress= {() => {
        Keyboard.dismiss();
      }}>
       <View>
         

      {/* header */}
     <AppHeader />

     {/* body */}
     <View style = {styles.content}>

       <AddTodo submitHandler = {submitHandler} />

       <View style={styles.list}>

         <FlatList 
         data={todos}
         renderItem={({item}) => (
           <TodoItem item={item} pressHandler={ pressHandler } />
         )}
         />
       </View>

     </View>
     </View> 
     </TouchableWithoutFeedback>
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff'
  },

  content: {
    padding: 20,

  },
  list: {
    padding: 20,
  }
  
});

export default App;
