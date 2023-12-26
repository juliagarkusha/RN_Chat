// External deps
import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Internal deps
import ChatListScreen from "../../../../screens/Chats/ChatListScreen";
import ChatScreen from "../../../../screens/Chats/ChatScreen/ChatScreen";
import MeetingsListScreen from "../../../../screens/Meetings/MeetingsListScreen";
import Button from "../../../ui/Button/Button";
import GoBackIcon from "../../../../assets/icons/GoBackIcon";
import CloseIcon from "../../../../assets/icons/CloseIcon";
import ChatName from "../../Chat/ChatName";
import useChats from "../../../../hooks/useChats";
import ContactsList from "../../Contacts/ContactsList";
import ChannelsList from "../../Chat/ChannelsList";

const ChatsStack: FC = () => {
    const ChatsStack = createNativeStackNavigator();
    const { getChatById } = useChats();

    return (
        <ChatsStack.Navigator>
            <ChatsStack.Screen
                name="Chat List"
                component={ChatListScreen}
                options={{
                    headerShown: false,
                }}
            />
            <ChatsStack.Screen
                name="Chat"
                component={ChatScreen}
                options={({ navigation, route }) => ({
                    headerTitle: () => <ChatName name={getChatById(route.params.chatId).name} />,
                    headerLeft: () => <Button viewType="icon" icon={<GoBackIcon />} onPress={() => navigation.goBack()}/>,
                    presentation: "fullScreenModal",
                })}
            />
            <ChatsStack.Screen name="Contacts list screen" component={ContactsList} />
            <ChatsStack.Screen name="Channels list screen" component={ChannelsList} />
            <ChatsStack.Screen
                name="Meetings List"
                component={MeetingsListScreen}
                options={({ navigation }) => ({
                    presentation: "modal",
                    headerRight: () => <Button viewType="icon" icon={<CloseIcon />} onPress={() => navigation.goBack()}/>
                })}
            />
        </ChatsStack.Navigator>
    )
}

export default ChatsStack;
