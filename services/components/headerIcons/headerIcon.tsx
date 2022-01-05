import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

type Props = {
    iconName: string;
    size: number;
    style: any;
    onPress: any;
}

const HeaderIcon = ({ iconName, size, style, onPress }: Props) => {
    return (
        <TouchableOpacity
            onPress={onPress}>
            <Icon
                style={style}
                name={iconName}
                size={size}
            />
        </TouchableOpacity>

    )
}

export default HeaderIcon;



const styles = StyleSheet.create({})
