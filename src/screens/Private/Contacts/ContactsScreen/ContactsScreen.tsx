// External deps
import React, { FC } from "react";
import { SafeAreaView } from "react-native";
import { observer } from "mobx-react";

// Internal deps
import useTheme from "../../../../hooks/useTheme";
import Tabs from "../../../../components/ui/Tabs/Tabs";
import ContactsList from "../../../../components/common/Contacts/ContactsList";
import ChannelsList from "../../../../components/common/Chat/ChannelsList";
import chatsStore from "../../../../store/Chats";

// Local deps
import styles from "./styles";

const ContactsScreen: FC = () => {
    const { list, gap } = useTheme();
    const contactsStyles = styles(gap);
    const channels = chatsStore.chats.filter(item => item.isChannel);

    return (
        <SafeAreaView style={[list, contactsStyles.contacts]}>
            <Tabs
              buttonLeft={{ text: 'Contacts' }}
              buttonRight={{ text: `Channels(${channels.length})` }}
              componentLeft={ContactsList}
              componentRight={ChannelsList}
            />
        </SafeAreaView>
    )
}

export default observer(ContactsScreen);
