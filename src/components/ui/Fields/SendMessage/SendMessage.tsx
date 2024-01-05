// External deps
import React, { FC } from "react";
import {TextInput, View} from "react-native";
import { observer } from "mobx-react";

// Internal deps
import useTheme from "../../../../hooks/useTheme";
import SendIcon from "../../../../assets/icons/SendIcon";
import Button from "../../Button/Button";
import messagesStore from "../../../../store/Messages";
import chatsStore from "../../../../store/Chats";

// Local deps
import styles from "./styles";

type SendMessageProps = {
    chatId: number,
}

const SendMessage: FC<SendMessageProps> = () => {
    const { colors, iconButtonSize, gap} = useTheme();

    const style = styles(gap, iconButtonSize, colors.blue600, colors.white);

    return (
        <View style={style.sendMessage}>
            <TextInput
                style={style.field}
                placeholder="Enter your message"
                onChangeText={(text) => messagesStore.setSendMessageBody(text)}
                value={messagesStore.sendMessageBody}
                placeholderTextColor={colors.gray600}
            />
            {
                !!messagesStore.sendMessageBody.length && (
                    <Button
                        viewType="icon"
                        icon={<SendIcon />}
                        buttonStyles={style.sendButton}
                        onPress={() => {
                            messagesStore.sendMessage(chatsStore.currentChatId)
                        }}
                    />
                )}
        </View>
    )
}

export default observer(SendMessage);
