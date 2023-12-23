// External deps
import React, { FC } from "react";
import { SafeAreaView } from "react-native";

// Internal deps
import useTheme from "../hooks/useTheme";
import Typography from "../components/ui/Typography";

const ContactsScreen: FC = () => {
    const { list } = useTheme();

    return (
        <SafeAreaView style={list}>
            <Typography viewType="title" text="Contacts screen" />
        </SafeAreaView>
    )
}

export default ContactsScreen;
