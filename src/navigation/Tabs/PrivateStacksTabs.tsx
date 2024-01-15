// External deps
import React, { FC } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { observer } from "mobx-react";

// Internal deps
import ChatsStack from "../Stacks/Private/ChatsStack";
import MeetingsStack from "../Stacks/Private/MeetingsStack";
import ContactsStack from "../Stacks/Private/ContactsStack";
import ProfileStack from "../Stacks/Private/ProfileStack";
import ChatIcon from "../../assets/icons/ChatIcon";
import VideoIcon from "../../assets/icons/VideoIcon";
import PeopleIcon from "../../assets/icons/PeopleIcon";
import MoreIcon from "../../assets/icons/MoreIcon";
import useTheme from "../../hooks/useTheme";
import chatsStore from "../../store/Chats";

const PrivateStacksTabs: FC = () => {
    const Tabs = createBottomTabNavigator();
    const { colors } = useTheme();

    return (
        <Tabs.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.blue300,
                tabBarInactiveTintColor: colors.gray500,
                tabBarLabelStyle: { fontSize: 12,}
            }}
            barStyle={{ backgroundColor: '#000' }}
        >
            <Tabs.Screen
                name="Chats"
                options={{
                    tabBarIcon: ChatIcon,
                    tabBarBadge: chatsStore.chats.length > 0 ? chatsStore.chats.length : null,
                    tabBarBadgeStyle: { backgroundColor: colors.blue900, color: colors.white, borderColor: colors.white }
                }}
                component={ChatsStack}
            />
            <Tabs.Screen
                name="Meetings"
                options={{ tabBarIcon: VideoIcon }}
                component={MeetingsStack}
            />
            <Tabs.Screen
                name="Contacts"
                options={{ tabBarIcon: PeopleIcon }}
                component={ContactsStack}
            />
            <Tabs.Screen
                name="Profile"
                options={{ tabBarIcon: MoreIcon }}
                component={ProfileStack}
            />
        </Tabs.Navigator>
    )
}

export default observer(PrivateStacksTabs);
