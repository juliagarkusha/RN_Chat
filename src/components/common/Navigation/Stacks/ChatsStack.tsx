// External deps
import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { observer } from "mobx-react";

// Internal deps
import ChatListScreen from "../../../../screens/Chats/ChatListScreen/ChatListScreen";
import ChatScreen from "../../../../screens/Chats/ChatScreen/ChatScreen";
import CreateChatScreen from "../../../../screens/Chats/CreateChat/CreateChatScreen";
import Button from "../../../ui/Button/Button";
import GoBackIcon from "../../../../assets/icons/GoBackIcon";
import ChatName from "../../Chat/ChatName";
import useChats from "../../../../hooks/useChats";
import ContactsList from "../../Contacts/ContactsList";
import ChannelsList from "../../Chat/ChannelsList";
import chatsStore from "../../../../store/Chats";

const ChatsStack: FC = () => {
    const ChatsStack = createNativeStackNavigator();

    const onCreateChat = () => {
        chatsStore.setChats({
            "id": Date.now(),
            "name": chatsStore.newChatInfo.chatName,
            "isChannel": chatsStore.newChatInfo.isChannel,
            "isPrivate": true,
            "isMuted": false,
            "lastMessage": {},
            "unreadMessagesCount": 0,
            "removed": false,
            "members": [1701330503359]
        });
    }

    return (
        <ChatsStack.Navigator>
            <ChatsStack.Screen
                name="Chat List"
                component={observer(ChatListScreen)}
                options={{
                    headerShown: false,
                }}
            />
            <ChatsStack.Screen
                name="Chat"
                component={ChatScreen}
                options={({ navigation, route }) => ({
                    headerTitle: () => <ChatName name={chatsStore.getChatById.name} />,
                    headerLeft: () => <Button viewType="icon" icon={<GoBackIcon />} onPress={() => navigation.goBack()}/>,
                    presentation: "fullScreenModal",
                })}
            />
            <ChatsStack.Screen name="Contacts list screen" component={ContactsList} />
            <ChatsStack.Screen name="Channels list screen" component={ChannelsList} />
            <ChatsStack.Screen
                name="Create chat"
                component={CreateChatScreen}
                options={({ navigation, route }) => ({
                    presentation: "fullScreenModal",
                    headerLeft: () => <Button viewType="icon" icon={<GoBackIcon />} onPress={() => navigation.goBack()}/>,
                    headerRight: () => <Button viewType="link" text="Create" onPress={() => {
                        navigation.goBack();
                        onCreateChat();
                    }}/>
                })}
            />
        </ChatsStack.Navigator>
    )
}

export default ChatsStack;
