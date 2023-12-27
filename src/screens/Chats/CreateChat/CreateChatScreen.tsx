// External deps
import React, { FC } from "react";
import {
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity, View
} from "react-native";
import { observer } from "mobx-react";

// Internal deps
import useTheme from "../../../hooks/useTheme";
import chatsStore from "../../../store/Chats";

// Local deps
import styles from "./styles";

const CreateChatScreen: FC = ({ navigation }) => {
    const { colors, gap } = useTheme();
    const style = styles(gap, colors.white, !!chatsStore.newChatInfo.isChannel ? colors.blue300 : colors.blue600);

    const handleCheckboxChange = (): void => {
        chatsStore.setNewChatInfo(chatsStore.newChatInfo.chatName, !chatsStore.newChatInfo.isChannel);
    };

    return (
        <SafeAreaView style={style.container}>
            <View style={style.field}>
                <Text style={style.label}>Chat name</Text>
                <TextInput
                    style={style.input}
                    placeholder="For example: NEW CHAT"
                    onChangeText={(name) => chatsStore.setNewChatInfo(name)}
                    value={chatsStore.newChatInfo.chatName}
                    placeholderTextColor={colors.gray600}
                />
            </View>
            <TouchableOpacity
                style={style.checkbox}
                onPress={handleCheckboxChange}
            >
                <View style={[style.checkboxCheck, style.checkPrivateBg]} />
                <Text style={style.checkboxLabel}>This is a channel</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default observer(CreateChatScreen);
