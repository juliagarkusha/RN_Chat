// External deps
import React, { FC } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { BlurView } from 'expo-blur';

// Internal deps
import ChatsProvider from "../../../contexts/Chats";
import ThemeProvider from "../../../contexts/Theme";
import TabsNavigator from "./Tabs/TabsNavigator";
import useTheme from "../../../hooks/useTheme";
import useAppState from "../../../hooks/useAppState";

const Navigator: FC = () => {
    const { colors, blurContainer } = useTheme();
    const appStateCurrent = useAppState();

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
                    {appStateCurrent !== 'active'
                        ? <BlurView intensity={30} tint="dark" style={blurContainer} />
                        : null
                    }
                </NavigationContainer>
            </ChatsProvider>
        </ThemeProvider>
    )
}

export default Navigator;
