import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ButtonAdd = ({ onPress }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.7}
            onPress={onPress}>
            <Icon
                name='plus-circle'
                size={55}
            />
        </TouchableOpacity>
    )
}

export default ButtonAdd

const styles = StyleSheet.create({
    container: {
        alignSelf: 'flex-end',
        marginRight: 30,
        marginBottom: 20,
    }
})
