// External deps
import React, { useEffect, useState } from "react";
import {FlatList, RefreshControl, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import { useRoute } from "@react-navigation/native";

// Internal deps
import { MessageType } from "../../../types/Chat";
import useChats from "../../../hooks/useChats";
import MessageItem from "../../../components/common/Message/MessageItem/MessageItem";

// Local deps
import styles from "./styles";

const ChatScreen = () => {
    const route = useRoute();
    const [ messages, setMessages ] = useState<MessageType[]>([]);

    const { getMessagesByChatId } = useChats();


    useEffect(() => {
        const messages = getMessagesByChatId(route.params.chatId);
        setMessages(messages);
    }, [])

    return (
        <View style={styles.list}>
            <FlatList
                // refreshControl={(
                //     <RefreshControl
                //         onRefresh={onRefreshHandler}
                //         refreshing={refreshing}
                //         tintColor={colors.white}
                //     />
                // )}
                data={messages}
                renderItem={({item}) => {
                    return (
                        <MessageItem
                            body={item.body}
                            senderName={item.sender.name}
                            date={item.date}
                        />
                    )
                }}
            />
        </View>
    )
}

export default ChatScreen;
