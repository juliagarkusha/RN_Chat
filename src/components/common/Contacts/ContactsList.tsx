// External deps
import React, {FC, useRef, useState} from "react";
import {
    FlatList,
    RefreshControl,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
} from "react-native";

// Internal deps
import useTheme from "../../../hooks/useTheme";
import { useNavigation } from "@react-navigation/native";
import ContactItem from "./ContactItem/ContactItem";
import mockMembers from "../../../mocks/members.json";

// Local deps
import styles from "./"

const ContactsList: FC = () => {
    const navigation = useNavigation();
    const { colors } = useTheme()

    const styles = StyleSheet.create({
        list: {
            paddingVertical: 16,
            flex: 1,
            backgroundColor: colors.blue900,
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
        },
    });

    const goToContact = (id: string) => {
     //   navigation.navigate("Chat", { chatId: id });
    }

    return (
        <SafeAreaView style={styles.list}>
            <FlatList
                data={mockMembers}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => goToContact(item.id)}>
                            <ContactItem
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                isOnline={item.isOnline}
                            />
                        </TouchableOpacity>
                    )
                }}
            />
        </SafeAreaView>
    )
}

export default ContactsList;

