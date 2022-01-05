import React from 'react'
import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import AroundButton from '../Button/AroundButton';
import colors from '../colors/colors';
import HeaderIcon from '../headerIcons/headerIcon';

const width = Dimensions.get('window').width - 30

const SearchBar = ({ value, onChangeText, onClear, containerStyle }) => {
    return (
        <View style={[styles.container, { ...containerStyle }]}>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                placeholder='Pesquise suas Tarefas'
                style={styles.searchBar}
            />
            <TouchableOpacity>
                {value ?
                    <Icon
                        name='close'
                        size={22}
                        color={colors.BLACK}
                        onPress={onClear}
                        style={{ position: 'absolute', right: 30, bottom: 10 }}
                    /> : null}
            </TouchableOpacity>

        </View>
    )
}

export default SearchBar;

const styles = StyleSheet.create({
    searchBar: {
        width: width,
        backgroundColor: colors.GREY,
        height: 40,
        borderRadius: 20,
        paddingLeft: 20,
        fontSize: 18,
        marginLeft: 15,
        marginTop: 20,
        opacity: 0.7,
    },
    container: {
        justifyContent: 'center'
    },
    clearIcon: {
        position: 'absolute',
        right: 10,
    }
})
