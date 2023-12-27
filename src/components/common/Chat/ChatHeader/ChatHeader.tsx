// External deps
import React from "react";
import {View, TextInput, Text} from "react-native";
import { useNavigation } from "@react-navigation/native";

// Internal deps
import Button from "../../../ui/Button/Button";
import AddIcon from "../../../../assets/icons/AddIcon";
import useTheme from "../../../../hooks/useTheme";
import useChats from "../../../../hooks/useChats";

//Local deps
import styles from "./styles";

const ChatHeader = () => {
    const { searchValue, setSearchValue } = useChats();
    const { h1, colors } = useTheme();
    const navigation = useNavigation();

    return (
        <>
            <View style={styles.header}>
                <View style={styles.actions}>
                    <Text style={h1}>Chat</Text>
                    <Button
                        viewType="icon"
                        icon={<AddIcon />}
                        onPress={() => navigation.navigate("Create chat")}
                    />
                </View>
                <View style={styles.search}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Search"
                        onChangeText={setSearchValue}
                        value={searchValue}
                        placeholderTextColor={colors.gray600}
                    />
                </View>
            </View>
        </>
);
};

export default ChatHeader;
