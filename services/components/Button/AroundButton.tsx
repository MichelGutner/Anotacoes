import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../colors/colors';

type Props = {
    iconName: string;
    size: number;
    color: any;
    style: any;
    onPress: any;
}

const AroundButton = ({ iconName, size, color, style, onPress }: Props) => {
    return (
        <TouchableOpacity
         onPress={onPress}
        >
            <Icon
                name={iconName}
                size={size}
                color={color || colors.DARKGREEN}
                style={[styles.icon, { ...style }]}
            />
        </TouchableOpacity>

    )
}

export default AroundButton;


const styles = StyleSheet.create({
    icon: {
        padding: 15,
        borderRadius: 4,
        width: '30%',
        borderWidth: 0.3
    }
})