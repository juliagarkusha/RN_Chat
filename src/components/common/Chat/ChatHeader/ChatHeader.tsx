// External deps
import React, { useState } from "react";
import { View, TextInput } from "react-native";

// Internal deps
import Modal from "../../../ui/Modal";
import Button from "../../../ui/Button";
import AddIcon from "../../../../assets/icons/AddIcon";
import Search from "../../../../assets/icons/Search";
import useChats from "../../../../hooks/useChats";

//Local deps
import styles from "./styles";

const ChatHeader = () => {
    const [ modalVisible, setModalVisible ] = useState(false);
    const [ searchVisible, setSearchVisible ] = useState(false);

    const { searchValue, setSearchValue } = useChats();

    const onCloseModal = (): void => {
        setModalVisible(false);
    };

    return (
        <>
            <View style={styles.header}>
                {searchVisible && (
                    <TextInput
                        style={styles.textInput}
                        placeholder="Type here..."
                        onChangeText={setSearchValue}
                        value={searchValue}
                    />
                )}
                <View style={styles.actions}>
                    <Button
                        viewType="icon"
                        icon={<AddIcon />}
                        onPress={() => setModalVisible(true)}
                    />
                    <Button
                        viewType="icon"
                        icon={<Search />}
                        onPress={() => setSearchVisible(!searchVisible)}
                    />
                </View>
            </View>
            <Modal
                isModalVisible={modalVisible}
                closeModal={onCloseModal}
            />
        </>
);
};

export default ChatHeader;
