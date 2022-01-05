import AsyncStorage from '@react-native-community/async-storage';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import ButtonAdd from '../../components/ButtonAdd/ButtonAdd';
import { useNotes } from '../../components/Contexts/NoteProvider/NoteProvider';
import NoteItems from '../../components/NoteItems/NoteItems';
import NoteInputModal from '../../components/NoteModal/NoteInputModal';
import NoteFound from '../../components/NotFound/NoteFound';
import SearchBar from '../../components/searchBar/searchBar';
import { styles } from './styles';


const NotePage = ({ user, navigation }: any) => {
    const [hour, setHour] = useState('');
    const [time, setTime] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const { notes, setNotes, findNotes } = useNotes();
    const [searchQuery, setSearchQuery] = useState('');
    const [notFound, setNoteFound] = useState(false)

    const handleSubmit = async (title: string, description: string) => {
        const note = { id: Date.now(), title, description, time: Date.now() };
        const updateNotes = [...notes, note]
        setNotes(updateNotes)
        await AsyncStorage.setItem('notes', JSON.stringify(updateNotes))
        console.log(updateNotes)
    }


    const findHour = () => {
        const Hour = new Date().getHours();
        if (Hour === 0 || Hour < 12) return setHour('Bom')
        setHour('Boa');
    }

    const findGreet = () => {
        const Time = new Date().getHours();
        if (Time === 0 || Time < 12) return setTime('dia');
        if (Time === 1 || Time < 18) return setTime('tarde');
        setTime('noite');
    }

    const openNote = notes => {
        navigation.navigate('NoteDetails', { notes });
    };

    const renderItem = ({ item }) => <NoteItems onPress={() => openNote(item)} item={item} />

    useEffect(() => {
        findHour();
        findGreet();
    }, [])

    const handleOnSearch = async (text) => {
        setSearchQuery(text);
        if (!text.trim()) {
            setSearchQuery('');
            setNoteFound(false);
            return await findNotes();
        }
        const filterNotes = notes.filter(note => {
            if (note.title.toLowerCase().includes(text.toLowerCase())) {
                return note;
            }
        })
        if (filterNotes.length) {
            setNotes([...filterNotes])
        } else {
            setNoteFound(true);
        }
    },

    handleClear = async () => {
        setSearchQuery('');
        setNoteFound(false);
        await findNotes();
    }

    return (
        <View style={styles.noteView}>
            <Text style={styles.headerText}>{`${hour} ${time} ${user.name}!`}</Text>
            <SearchBar
                value={searchQuery}
                onChangeText={handleOnSearch}
                onClear={handleClear}
            />
            <View style={styles.bodyTasks}>
                {notFound ? (<NoteFound />) :
                    (<FlatList
                        style={styles.flatList}
                        data={notes}
                        numColumns={1}
                        keyExtractor={item => item.id.toString()}
                        renderItem={renderItem}
                    />
                )}

            </View>
            <View>
                <ButtonAdd
                    onPress={() => setModalVisible(true)} />
            </View>
            <NoteInputModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                onSubmit={handleSubmit}
                isEdit={false}
                note={undefined}
            />
        </View>
    )
}

export default NotePage;
