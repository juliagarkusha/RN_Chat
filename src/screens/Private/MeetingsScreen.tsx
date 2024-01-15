// External deps
import React, { FC } from "react";
import { SafeAreaView } from "react-native";

// Internal deps
import useTheme from "../../hooks/useTheme";
import Typography from "../../components/ui/Typography";

const MeetingsScreen: FC = () => {
    const { list } = useTheme();

    return (
        <SafeAreaView style={list}>
            <Typography viewType="title" text="Meetings Screen" />
        </SafeAreaView>
    )
}

export default MeetingsScreen;
