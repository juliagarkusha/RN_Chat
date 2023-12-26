// External deps
import React, { useState } from "react";
import { View, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Internal deps
import Button from "../../../ui/Button";
import AddIcon from "../../../../assets/icons/AddIcon";
import Search from "../../../../assets/icons/Search";
import useChats from "../../../../hooks/useChats";

//Local deps
import styles from "./styles";

const ChatHeader = () => {
    const [ searchVisible, setSearchVisible ] = useState(false);

    const { searchValue, setSearchValue } = useChats();
    const navigation = useNavigation();

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
                        onPress={() => navigation.navigate("Meetings List")}
                    />
                    <Button
                        viewType="icon"
                        icon={<Search />}
                        onPress={() => setSearchVisible(!searchVisible)}
                    />
                </View>
            </View>
        </>
);
};

export default ChatHeader;
