// External deps
import React, { FC } from "react";
import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { observer } from "mobx-react";

// Internal deps
import ChatItem from "./ChatItem/ChatItem";
import useTheme from "../../../hooks/useTheme";
import { useNavigation } from "@react-navigation/native";
import chatsStore from "../../../store/Chats";

const ChannelsList: FC = () => {
    const navigation = useNavigation();
    const { colors } = useTheme()
    const channels = chatsStore.chats.filter(item => item.isChannel);

    const styles = StyleSheet.create({
        list: {
            paddingVertical: 16,
            flex: 1,
            backgroundColor: colors.blue900,
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
        },
    });

    const goToChat = () => {
        navigation.navigate("Chat");
    }

    return (
        <SafeAreaView style={styles.list}>
            <FlatList
                data={channels}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => goToChat()}>
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

export default observer(ChannelsList);
