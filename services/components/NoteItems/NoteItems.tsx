import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from '../colors/colors';
import HeaderIcon from '../headerIcons/headerIcon';

const width = Dimensions.get('window').width - 15


const formatDate = (ms: string | number | Date) => {
    const date = new Date(ms);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    return `${day}/${month}/${year} - ${hours}:${min}:${sec}`
}

const NoteItems = ({ item, onPress }: any) => {
    const { title, description, time } = item;
    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.6}
            onPress={onPress}>
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text
                    numberOfLines={1} 
                    style={styles.description}>{description}</Text>
                <Text style={styles.time}>{formatDate(time)}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default NoteItems

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width,
        height: 90,
        backgroundColor: colors.white,
        marginTop: 5,
        marginLeft: 7,
        marginBottom: 5,
        borderRadius: 20,
        shadowColor: colors.DARKORANGE,
        elevation: 2,
    },
    title: {
        fontSize: 22,
        marginLeft: 20,
        marginTop: 10,
        fontWeight: 'bold',
        color: colors.BLACK
    },
    description: {
        marginLeft: 20,
        fontSize: 15,
        opacity: 0.6,
    },
    time: {
        marginLeft: 20,
        fontSize: 12,
        opacity: 0.6,
        marginTop: 2,
    },
})
