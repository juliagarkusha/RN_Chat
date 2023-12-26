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
import useChats from "../../hooks/useChats";
import ChatCard from "../../components/common/Chat/ChatCard/ChatCard";
import useTheme from "../../hooks/useTheme";
import ChatHeader from "../../components/common/Chat/ChatHeader/ChatHeader";

const ChatListScreen: FC = ({ navigation }) => {
    console.log('debug navigation ChatListScreen: ', navigation);
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
        navigation.navigate("Chat", {chatId: id});
    }

    return (
        <SafeAreaView style={styles.list}>
            <ChatHeader />
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
                        <TouchableOpacity onPress={() => goToChat(item.id)}>
                            <ChatCard
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
                        </TouchableOpacity>
                    )
                }}
            />
        </SafeAreaView>
    )
}

export default ChatListScreen;
