// External deps
import React, { FC } from "react";
import {SafeAreaView, View} from "react-native";

// Internal deps
import useTheme from "../../../hooks/useTheme";
import Tabs from "../../../components/ui/Tabs/Tabs";
import ContactsList from "../../../components/common/Contacts/ContactsList";
import ChannelsList from "../../../components/common/Chat/ChannelsList";

// Local deps
import styles from "./styles";

const ContactsScreen: FC = () => {
    const { list, gap } = useTheme();
    const contactsStyles = styles(gap);

    return (
        <SafeAreaView style={[list, contactsStyles.contacts]}>
            <Tabs
              buttonLeft={{ text: 'Contacts' }}
              buttonRight={{ text: 'Channels' }}
              componentLeft={ContactsList}
              componentRight={ChannelsList}
            />

        </SafeAreaView>
    )
}

export default ContactsScreen;
