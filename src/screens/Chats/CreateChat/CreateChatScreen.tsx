// External deps
import React, {FC, useState} from "react";
import {
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity, View
} from "react-native";

// Internal deps
import useTheme from "../../../hooks/useTheme";

// Local deps
import styles from "./styles";

const CreateChatScreen: FC = ({ navigation }) => {
    console.log('debug navigation ChatListScreen: ', navigation);
    const [ chatName, setChatName ] = useState('');
    const [isPrivate, setPrivate] = useState(false);
    const [isPublic, setPublic] = useState(false);
    const { colors, gap } = useTheme();
    console.log('debug isPrivate: ', isPrivate);
    console.log('debug isPublic: ', isPublic);
    const style = styles(gap, colors.white, isPrivate ? colors.blue300 : colors.blue600, isPublic ? colors.blue300 : colors.blue600);

    const goToChat = (id: string) => {
        navigation.navigate("Chat", {chatId: id});
    }

    const handleCheckboxChange = (checkboxType) => {
        setPrivate(checkboxType === 'privateChannel');
        setPublic(checkboxType === 'publicChannel');
    };

    return (
        <SafeAreaView style={style.container}>
            <View style={style.field}>
                <Text style={style.label}>Chat name</Text>
                <TextInput
                    style={style.input}
                    placeholder="For example: NEW CHAT"
                    onChangeText={setChatName}
                    value={chatName}
                    placeholderTextColor={colors.gray600}
                />
            </View>
            <TouchableOpacity
                style={style.checkbox}
                onPress={() => handleCheckboxChange('privateChannel')}
            >
                <View style={[style.checkboxCheck, style.checkPrivateBg]} />
                <Text style={style.checkboxLabel}>Private channel</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={style.checkbox}
                onPress={() => handleCheckboxChange('publicChannel')}
            >
                <View style={[style.checkboxCheck, style.checkPublicBg]} />
                <Text style={style.checkboxLabel}>Public channel</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default CreateChatScreen;
