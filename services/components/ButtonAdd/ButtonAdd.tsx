import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../colors/colors';

const ButtonAdd = ({ onPress }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.6}
            onPress={onPress}>
            <Icon
                name='pluscircle'
                size={50}
                color={colors.ORANGESPLASH}
            />
        </TouchableOpacity>
    )
}

export default ButtonAdd

const styles = StyleSheet.create({
    container: {
        marginRight: 30,
        marginBottom: 5,
    }
})
