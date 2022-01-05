import AsyncStorage from '@react-native-community/async-storage'
import React, { useState } from 'react'
import { View, Text, ImageBackground, StyleSheet, TextInput, Dimensions } from 'react-native'
import AroundButton from '../../components/Button/AroundButton'
import colors from '../../components/colors/colors'


const width = Dimensions.get('window').width -40

const Intro = ({onFinish}) => {
    const [name, setName] = useState('');

    const handleChangeText = text => setName(text);

    const handleSubmit = async () => {
        const user = { name: name}
        await AsyncStorage.setItem('user', JSON.stringify(user));
        if(onFinish) onFinish();
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../../assets/images/intro.jpg')}
                resizeMode='cover'
                style={styles.imageBackground}
            >
                <Text style={styles.textIntro}>
                    Primeiro,{'\n'}precisamos saber seu nome
                </Text>
                <TextInput
                    value={name}
                    style={styles.textInput}
                    placeholder='Entre com seu nome'
                    onChangeText={handleChangeText}
                />
                <AroundButton 
                    iconName='arrow-right'
                    size={18}
                    color={colors.TRANSPARENT}
                    style={styles.icon}
                    onPress={handleSubmit}
                    />
            </ImageBackground>
        </View>

    )
}

export default Intro;


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
        justifyContent: 'center'
    },
    textInput:{
        width: width,
        borderWidth: 0.25,
        alignSelf:  'center',
        fontSize: 22,
        paddingLeft: 10,
    },
    textIntro:{
        fontSize: 22,
        marginLeft: 20,
        marginBottom: 10
    },
    icon:{
        alignSelf: 'center',
        marginTop: 15
    }
})