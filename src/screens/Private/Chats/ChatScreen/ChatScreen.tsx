// External deps
import React, { useEffect } from "react";
import { FlatList, View } from "react-native";
import { observer } from "mobx-react";

// Internal deps
import useTheme from "../../../../hooks/useTheme";
import useKeyboardHeight from "../../../../hooks/useKeyboardHeight";
import MessageItem from "../../../../components/common/Message/MessageItem/MessageItem";
import SendMessage from "../../../../components/ui/Fields/SendMessage/SendMessage";
import chatsStore from "../../../../store/Chats";
import messagesStore from "../../../../store/Messages";

// Local deps
import styles from "./styles";

const ChatScreen = () => {
    const { gap } = useTheme();
    const keyboardHeight = useKeyboardHeight();
    const style = styles(gap, keyboardHeight);

    useEffect(() => {
        messagesStore.setMessages(chatsStore.currentChatId);
    }, [])

    return (
        <View style={style.chatBody}>
            <View style={style.list}>
                <FlatList
                    inverted
                    data={messagesStore.messages}
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
            <SendMessage />
        </View>
    )
}

export default observer(ChatScreen);
