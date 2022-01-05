import AsyncStorage from '@react-native-community/async-storage';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { useNotes } from '../Contexts/NoteProvider/NoteProvider';
import HeaderIcon from '../headerIcons/headerIcon';
import NoteInputModal from '../NoteModal/NoteInputModal';


const width = Dimensions.get('window').width -40

const NoteDetails = props => {
    const [note, setNote] = useState(props.route.params.notes);
    const [showModal, setShowModal] = useState(false);
    const { setNotes } = useNotes();
    const [isEdit, setIsEdit] = useState(false);

    const deletNotes = async () => {
        const result = await AsyncStorage.getItem('notes')
        let notes = [];
        if (result !== null) notes = JSON.parse(result)
        const newNotes = notes.filter(n => n.id !== note.id)
        setNotes(newNotes)
        await AsyncStorage.setItem('notes', JSON.stringify(newNotes))
        props.navigation.goBack();
    }

    const handleUpdate = async (title, description, time) => {
        const result = await AsyncStorage.getItem('notes');
        let notes = [];
        if (result !== null) notes = JSON.parse(result);

        const newNotes = notes.filter(n => {
            if (n.id === note.id) {
                n.title = title;
                n.description = description;
                n.isUpdated = true;
                n.time = time;

                setNote(n);
            }
            return n;
        });

        setNotes(newNotes);
        await AsyncStorage.setItem('notes', JSON.stringify(newNotes));
        props.navigation.goBack();
    };

    const handleOnClose = () => setShowModal(false);

    const openEditModal = () => {
        setIsEdit(true);
        setShowModal(true);
    };

    return (
        <View>
            <View style={styles.container}>
                <HeaderIcon 
                    style={styles.headerIcon}
                    iconName='chevron-left'
                    size={27}
                    onPress={() => props.navigation.navigate('NotePage')}/>
                <HeaderIcon 
                    style={styles.headerIcon2}
                    iconName='trash-2'
                    size={25}
                    onPress={deletNotes}/>
                    <HeaderIcon 
                        style={styles.headerIcon3}
                        iconName='edit-3'
                        size={25}
                        onPress={openEditModal}/>
            </View>
            <View>
                <Text style={styles.title}>{note.title}</Text>
                <Text style={styles.textBody}>{note.description}</Text>
            </View>
            <NoteInputModal
                isEdit={isEdit}
                note={note}
                onClose={handleOnClose}
                onSubmit={handleUpdate}
                visible={showModal}
            />
        </View>
    )
}

export default NoteDetails;

const styles = StyleSheet.create({
    container:{
        marginLeft: 10,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerIcon:{
        marginLeft: 20,
    },
    headerIcon2:{
        marginLeft: 150
    },
    headerIcon3:{
        marginRight: 60,
    },
    title:{
        fontSize: 26,
        opacity: 0.5,
        marginLeft: 20,
        marginTop: 20,
        borderBottomWidth: 0.3,
        width: width,
    },
    textBody:{
        fontSize: 16,
        opacity: 1,
        marginLeft: 20,
        marginTop: 10,
    }
})