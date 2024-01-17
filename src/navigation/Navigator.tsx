// External deps
import React, { FC } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BlurView } from 'expo-blur';

// Internal deps
import ChatsProvider from "../contexts/Chats";
import ThemeProvider from "../contexts/Theme";
import useTheme from "../hooks/useTheme";
import useAppState from "../hooks/useAppState";
import PrivateStacksTabs from "./Tabs/PrivateStacksTabs";
import AuthStack from "./Stacks/Auth/AuthStack";

const Navigator: FC = () => {
    const { colors, blurContainer } = useTheme();
    const appStateCurrent = useAppState();
    const AppStack = createNativeStackNavigator();

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
                    <AppStack.Navigator
                        initialRouteName='AuthStack'
                        screenOptions={{ headerShown: false}}
                    >
                        <AppStack.Screen
                            name="MainTabs"
                            component={PrivateStacksTabs}
                        />
                        <AppStack.Screen
                            name="AuthStack"
                            component={AuthStack}
                        />
                    </AppStack.Navigator>
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
