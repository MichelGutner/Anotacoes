import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import colors from '../colors/colors'

const NoteFound = () => {
    return (
        <View style={[StyleSheet.absoluteFill, styles.container]}>
            <Icon 
                name='frowno'
                size={90}
                color={colors.BLACK}/>
            <Text style={{marginTop: 15, fontSize: 20}}>Não existe</Text>
        </View>
    )
}

export default NoteFound;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.5,
        zIndex: -1
    }
})
