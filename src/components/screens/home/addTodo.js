import React, { useState } from 'react'
import { Button, TextInput, View } from 'react-native'
import styles from './Styles';

export default function addTodo({submitHandler}) {

    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }

    return (
        <View>

            <TextInput 
            style = {styles.input}
            placeholder='New todo...' 
            onChangeText={changeHandler}
            />

            <Button onPress={() => submitHandler(text)} title='add todo' color='coral' />
            
        </View>
    )
}
