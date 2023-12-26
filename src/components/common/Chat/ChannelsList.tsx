// External deps
import React, {FC, useRef, useState} from "react";
import {
    FlatList,
    RefreshControl,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
} from "react-native";

// Internal deps
import useChats from "../../../hooks/useChats";
import ChatItem from "./ChatItem/ChatItem";
import useTheme from "../../../hooks/useTheme";
import { useNavigation } from "@react-navigation/native";

const ChannelsList: FC = () => {
    const navigation = useNavigation();
    const { colors } = useTheme()
    const { channelsData } = useChats();

    const styles = StyleSheet.create({
        list: {
            paddingVertical: 16,
            flex: 1,
            backgroundColor: colors.blue900,
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
        },
    });

    const goToChat = (id: string) => {
        navigation.navigate("Chat", { chatId: id });
    }

    return (
        <SafeAreaView style={styles.list}>
            <FlatList
                data={channelsData}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => goToChat(item.id)}>
                            <ChatItem
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                isPrivate={item.isPrivate}
                            />
                        </TouchableOpacity>
                    )
                }}
            />
        </SafeAreaView>
    )
}

export default ChannelsList;
