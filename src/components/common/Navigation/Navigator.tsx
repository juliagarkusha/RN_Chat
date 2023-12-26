// External deps
import React, { FC } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

// Internal deps
import ChatsProvider from "../../../contexts/Chats";
import ThemeProvider from "../../../contexts/Theme";
import TabsNavigator from "./Tabs/TabsNavigator";
import useTheme from "../../../hooks/useTheme";

const Navigator: FC = () => {
    const { colors } = useTheme();

    const MyTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: colors.blue900,
            card: colors.blue900,
            border: colors.blue900,
            text: colors.white,
        },
    };

    return (
        <ThemeProvider>
            <ChatsProvider>
                <NavigationContainer theme={MyTheme}>
                    <TabsNavigator />
                </NavigationContainer>
            </ChatsProvider>
        </ThemeProvider>
    )
}

export default Navigator;
