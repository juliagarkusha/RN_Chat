// External deps
import React from "react";
import { SafeAreaView } from "react-native";

// Internal deps
import useTheme from "../hooks/useTheme";
import Typography from "../components/ui/Typography";

const SettingsScreen = () => {
    const { list } = useTheme();

    return (
        <SafeAreaView style={list}>
            <Typography viewType="title" text="Settings Screen" />
        </SafeAreaView>
    )
}

export default SettingsScreen;
