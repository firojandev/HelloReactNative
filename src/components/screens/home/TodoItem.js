import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './Styles';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const TodoItem = ({item, pressHandler}) => {
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
          
          <MaterialCommunityIcons name="delete" size='24' color='#333'/>

           <Text style={styles.item}> {item.text} </Text>
            
        </TouchableOpacity>
    );
};

export default TodoItem;