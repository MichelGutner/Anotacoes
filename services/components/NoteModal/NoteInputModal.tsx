import React, { useEffect, useState } from 'react'
import { Modal, StatusBar, Text, TextInput, View } from 'react-native'
import colors from '../colors/colors'
import HeaderIcon from '../headerIcons/headerIcon'

import { styles } from './styles'

type Props = {
    visible: boolean;
    onClose: any;
    onSubmit: any;
    isEdit: boolean;
    note: any;
}

const NoteInputModal = ({ visible, onClose, onSubmit, isEdit, note }: Props) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleChangeText = (text: React.SetStateAction<string>, valueFor: string) => {
        if (valueFor === 'title') setTitle(text);
        if (valueFor === 'description') setDescription(text);
    }

    const handleSubmit = () => {
        if (!title.trim() && !description.trim()) return onClose();

        if (isEdit) {
            onSubmit(title, description, Date.now());
        } else {
            onSubmit(title, description);
            setTitle('');
            setDescription('');
        }
        onClose();
    };


    const closeModal = () => {
        setTitle('');
        setDescription('');
        onClose();
    }

    useEffect(() => {
        if (isEdit) {
            setTitle(note.title);
            setDescription(note.description);
        }
    }, [isEdit]);


    return (
        <Modal
            style={styles.container}
            visible={visible}
            animationType='fade'
        >
            <StatusBar barStyle='dark-content' backgroundColor={colors.WITHOUT} />
            <View style={styles.container}>
                <HeaderIcon
                    style={styles.headerIcon}
                    iconName='chevron-left'
                    size={27}
                    onPress={closeModal} />
                <HeaderIcon
                    style={styles.headerIcon2}
                    iconName='corner-up-left'
                    size={25}
                    onPress={() => { }} />
                {title.length || description.length > 0 ? (
                    <HeaderIcon
                        style={styles.headerIcon3}
                        iconName='check'
                        size={25}
                        onPress={handleSubmit} />
                ) : <HeaderIcon
                    style={styles.headerIcon3}
                    iconName='corner-up-right'
                    size={25}
                    onPress={handleSubmit} />}

            </View>
            <View>
                <TextInput
                    value={title}
                    onChangeText={text => handleChangeText(text, 'title')}
                    style={styles.title}
                    placeholder='Titulo'
                />
                <TextInput
                    multiline
                    value={description}
                    onChangeText={text => handleChangeText(text, 'description')}
                    style={styles.textBody}
                    placeholder='📝começe a escrever'
                />
            </View>
        </Modal>
    )
}

export default NoteInputModal;
