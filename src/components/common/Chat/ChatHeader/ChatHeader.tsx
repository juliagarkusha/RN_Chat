// External deps
import React, { useState } from "react";
import {View, TextInput, Text} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Animated, { StretchInX, FadeOut } from "react-native-reanimated";

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
    const [ isSearchVisible, setIsSearchVisible ] = useState(false);
    const { colors } = useTheme();
    const navigation = useNavigation();

    return (
        <View style={styles.header}>
            <View style={styles.headerRow}>
                { isSearchVisible &&
                  <Animated.View entering={StretchInX} exiting={FadeOut}>
                    <TextInput
                      style={styles.textInput}
                      placeholder="Search"
                      onChangeText={setSearchValue}
                      value={searchValue}
                      placeholderTextColor={colors.gray600}
                    />
                  </Animated.View>
                }
                <View style={styles.actions}>
                    <Button
                        viewType="icon"
                        icon={<SearchIcon />}
                        onPress={() => setIsSearchVisible(!isSearchVisible)}
                    />
                    <Button
                        viewType="icon"
                        icon={<AddIcon />}
                        onPress={() => navigation.navigate("Create chat")}
                    />
                </View>
            </View>
        </View>
    );
};

export default ChatHeader;
