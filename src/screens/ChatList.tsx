// External deps
import React, {FC, useRef, useState} from "react";
import { FlatList, RefreshControl } from "react-native";

// Internal deps
import useChats from "../hooks/useChats";
import ChatItem from "../components/common/Chat/ChatItem";
import useTheme from "../hooks/useTheme";

const ChatList: FC = () => {
    const { colors } = useTheme()
    const refreshTimerRef = useRef<NodeJS.Timeout>();
    const [refreshing, setRefreshing] = useState<boolean>(false);
    const { chatsData, onUpdateDataHandler } = useChats();

    const onRefreshHandler = () => {
        clearTimeout(refreshTimerRef.current);
        setRefreshing(true);
        refreshTimerRef.current = setTimeout(() => {
            setRefreshing(false);
            onUpdateDataHandler()
        }, 3000);
    }

    return (
        <FlatList
            refreshControl={(
                <RefreshControl
                    onRefresh={onRefreshHandler}
                    refreshing={refreshing}
                    tintColor={colors.white}
                />
            )}
            data={chatsData}
            renderItem={({item}) => {
                return (
                    <ChatItem
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        members={item.members}
                        isChannel={item.isChannel}
                        isPrivate={item.isPrivate}
                        keyExtractor={(item) => item.id}
                        unreadMessagesCount={item.unreadMessagesCount}
                        lastMessageBody={item.lastMessage.body}
                        lastMessageDate={item.lastMessage.date}
                        removed={item.removed}
                    />
                )
            }}
        />
    )
}

export default ChatList;
