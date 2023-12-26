// External deps
import React, { FC, Dispatch, SetStateAction } from "react";
import {TextInput, TouchableOpacity, View} from "react-native";

// Internal deps
import useTheme from "../../../../hooks/useTheme";
import SendIcon from "../../../../assets/icons/SendIcon";
import Button from "../../Button/Button";

// Local deps
import styles from "./styles";

type SendMessageProps = {
    message: string,
    setMessage: Dispatch<SetStateAction<string>>,
}

const SendMessage: FC<SendMessageProps> = (props) => {
    const {
        message,
        setMessage,
    } = props;

    const { colors, iconButtonSize, gap} = useTheme();

    const style = styles(gap, iconButtonSize, colors.blue600, colors.white);

    return (
        <View style={style.sendMessage}>
            <TextInput
                style={style.field}
                placeholder="Enter your message"
                onChangeText={setMessage}
                value={message}
                placeholderTextColor={colors.gray600}
            />
            {
                !!message.length && (
                    <Button
                        viewType="icon"
                        icon={<SendIcon />}
                        buttonStyles={style.sendButton}
                    />
                )}
        </View>
    )
}

export default SendMessage;
