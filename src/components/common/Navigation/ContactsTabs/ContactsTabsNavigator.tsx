// External deps
import React, { FC } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Internal deps
import ChatsStack from "../Stacks/ChatsStack";
import MeetingsStack from "../Stacks/MeetingsStack";
import ContactsStack from "../Stacks/ContactsStack";
import SettingsStack from "../Stacks/SettingsStack";
import ChatIcon from "../../../../assets/icons/ChatIcon";
import VideoIcon from "../../../../assets/icons/VideoIcon";
import PeopleIcon from "../../../../assets/icons/PeopleIcon";
import MoreIcon from "../../../../assets/icons/MoreIcon";
import useTheme from "../../../../hooks/useTheme";

const ContactsTabsNavigator: FC = () => {
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
                options={{ tabBarIcon: ChatIcon }}
                tabBarActiveTintColor={{ color: "red" }}
                component={ChatsStack}
            />
            <Tabs.Screen
                name="Meetings"
                options={{ tabBarIcon: VideoIcon }}
                component={MeetingsStack}
            />
        </Tabs.Navigator>
    )
}

export default ContactsTabsNavigator;
