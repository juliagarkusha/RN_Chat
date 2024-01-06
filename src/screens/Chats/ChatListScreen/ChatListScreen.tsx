// External deps
import React, {FC, useRef, useState} from "react";
import {RefreshControl, SafeAreaView, TouchableOpacity,} from "react-native";
import Animated, {
    Extrapolation,
    interpolate,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    useSharedValue,
} from "react-native-reanimated";

// Internal deps
import useChats from "../../../hooks/useChats";
import ChatCard from "../../../components/common/Chat/ChatCard/ChatCard";
import useTheme from "../../../hooks/useTheme";
import ChatHeader from "../../../components/common/Chat/ChatHeader/ChatHeader";
import chatsStore from "../../../store/Chats";
import Modal from "../../../components/ui/Modal";
import Button from "../../../components/ui/Button/Button";

// Local deps
import style from "./styles";

const ChatListScreen: FC = ({navigation}) => {
    const scrollListY = useSharedValue(0);
    const headerHeight = useSharedValue(72);
    const { colors, gap } = useTheme()
    const refreshTimerRef = useRef<NodeJS.Timeout>();
    const [refreshing, setRefreshing] = useState<boolean>(false);
    const [ deleteChatId, setDeleteChatId ] = useState('');
    const [ modalVisible, setModalVisible ] = useState(false);
    const { onUpdateDataHandler } = useChats();

    const styles = style(gap, colors.blue900);

    const animatedHeaderStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(scrollListY.value, [0, 66], [1, 0], Extrapolation.CLAMP),
            height: interpolate(scrollListY.value, [50, 116], [headerHeight.value, 0], Extrapolation.CLAMP),
        }
    })

    const onScrollListHandler = useAnimatedScrollHandler(event => {
        scrollListY.value = event.contentOffset.y;
    })

    const onRefreshHandler = () => {
        clearTimeout(refreshTimerRef.current);
        setRefreshing(true);
        refreshTimerRef.current = setTimeout(() => {
            setRefreshing(false);
            onUpdateDataHandler()
        }, 3000);
    }

    const goToChat = (id: string) => {
        chatsStore.setCurrentChatId(id);
        navigation.navigate("Chat");
    }

    const onShowDeleteModal = (id): void => {
        setModalVisible(true);
        setDeleteChatId(id);
    }

    const onDeleteCHat = (): void => {
        setModalVisible(false);
        chatsStore.deleteChatById(deleteChatId);
        setDeleteChatId('');
    };

    return (
        <SafeAreaView style={styles.list}>
            <Animated.View style={animatedHeaderStyle}>
                <ChatHeader />
            </Animated.View>
            <Animated.FlatList
                refreshControl={(
                    <RefreshControl
                        onRefresh={onRefreshHandler}
                        refreshing={refreshing}
                        tintColor={colors.white}
                    />
                )}
                data={chatsStore.chats}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity
                            onPress={() => goToChat(item.id)}
                            onLongPress={() => onShowDeleteModal(item.id)}
                        >
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
                onScroll={onScrollListHandler}
            />
            <Modal
                isModalVisible={modalVisible}
                closeModal={() => setModalVisible(false)}
            >
                <Button
                    text="Delete chat"
                    viewType='secondary'
                    onPress={onDeleteCHat}
                    buttonStyles={styles.modalButton}
                />
            < /Modal>
        </SafeAreaView>
    )
}

export default ChatListScreen;
