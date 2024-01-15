// External deps
import React, { FC, useState } from "react";
import {
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { CheckBox } from 'react-native-elements';
import { observer } from "mobx-react";

// Internal deps
import useTheme from "../../../../hooks/useTheme";
import chatsStore from "../../../../store/Chats";

// Local deps
import styles from "./styles";

const CreateChatScreen: FC = ({ navigation }) => {
    const { colors, gap } = useTheme();
    const [ isChecked, setChecked ] = useState<boolean>(false);
    const [ chatName, setChatName ] = useState<string>('');
    const style = styles(gap, colors.white);

    const handleCheckboxChange = (): void => {
        setChecked(!isChecked);
        chatsStore.setNewChatInfo(chatName, !isChecked);
    };

    const onChangeChatName = (name) => {
      setChatName(name);
      chatsStore.setNewChatInfo(chatName, !isChecked);
    }

    return (
        <SafeAreaView style={style.container}>
            <View style={style.field}>
                <Text style={style.label}>Chat name</Text>
                <TextInput
                    style={style.input}
                    placeholder="For example: NEW CHAT"
                    onChangeText={onChangeChatName}
                    value={chatName}
                    placeholderTextColor={colors.gray600}
                />
            </View>
            <CheckBox
                title="This is a channel"
                checked={isChecked}
                onPress={handleCheckboxChange}
                containerStyle={style.checkboxContainer}
                textStyle={style.checkboxLabel}
            />
        </SafeAreaView>
    )
}

export default observer(CreateChatScreen);
