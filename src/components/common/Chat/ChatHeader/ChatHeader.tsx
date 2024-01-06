// External deps
import React, { useState } from "react";
import {View, TextInput, Text} from "react-native";
import { useNavigation } from "@react-navigation/native";

// Internal deps
import Button from "../../../ui/Button/Button";
import AddIcon from "../../../../assets/icons/AddIcon";
import SearchIcon from "../../../../assets/icons/SearchIcon";
import useTheme from "../../../../hooks/useTheme";
import useChats from "../../../../hooks/useChats";

//Local deps
import styles from "./styles";

const ChatHeader = () => {
    const { searchValue, setSearchValue } = useChats();
    const [ searchVisible, setSearchVisible ] = useState(false);
    const { h1, colors } = useTheme();
    const navigation = useNavigation();

    return (
        <View style={styles.header}>
            <View style={styles.headerRow}>
                <Text style={h1}>Chat</Text>
                <View style={styles.actions}>
                    <Button
                        viewType="icon"
                        icon={<SearchIcon />}
                        onPress={() => setSearchVisible(!searchVisible)}
                    />
                    <Button
                        viewType="icon"
                        icon={<AddIcon />}
                        onPress={() => navigation.navigate("Create chat")}
                    />
                </View>
            </View>
            { searchVisible &&
              <View style={styles.search}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Search"
                  onChangeText={setSearchValue}
                  value={searchValue}
                  placeholderTextColor={colors.gray600}
                />
              </View>
            }
        </View>
);
};

export default ChatHeader;
