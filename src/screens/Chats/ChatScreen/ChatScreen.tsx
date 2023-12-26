// External deps
import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { useRoute } from "@react-navigation/native";

// Internal deps
import { MessageType } from "../../../types/Chat";
import useChats from "../../../hooks/useChats";
import useTheme from "../../../hooks/useTheme";
import useKeyboardHeight from "../../../hooks/useKeyboardHeight";
import MessageItem from "../../../components/common/Message/MessageItem/MessageItem";
import SendMessage from "../../../components/ui/Fields/SendMessage/SendMessage";

// Local deps
import styles from "./styles";

const ChatScreen = () => {
    const route = useRoute();
    const { gap } = useTheme();
    const [ messages, setMessages ] = useState<MessageType[]>([]);
    const [ message, setMessage ] = useState('');
    const { getMessagesByChatId } = useChats();
    const keyboardHeight = useKeyboardHeight();
    const style = styles(gap, keyboardHeight);

    useEffect(() => {
        const messages = getMessagesByChatId(route.params.chatId);
        setMessages(messages.reverse());
    }, [])

    return (
        <View style={style.chatBody}>
            <View style={style.list}>
                <FlatList
                    inverted
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
            <SendMessage
                message={message}
                setMessage={setMessage}
            />
        </View>
    )
}

export default ChatScreen;
