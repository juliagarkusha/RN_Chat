// External deps
import React, { FC } from "react";
import { View } from "react-native";

// Internal deps
import Typography from "../../../ui/Typography";
import { MessageType } from "../../../../types/Chat";
import Avatar from "../../../ui/Avatar/Avatar";
import ChatName from "../../Chat/ChatName";
import Date from "../../../ui/Date/Date";

// Local deps
import styles from "./styles";

type MessageItemProps = {
    body: MessageType['body'],
    senderName: MessageType['senderName'],
    date: MessageType['date'],
}

const MessageItem: FC<MessageItemProps> = (props) => {
    const {
        body,
        senderName,
        date,
    } = props;

    return (
        <View style={styles.message}>
            <View style={styles.row}>
                <Avatar name={senderName} viewType="avatar" />
                <View style={styles.info}>
                    <ChatName name={senderName} />
                    <Date date={date} viewType="md" />
                </View>
            </View>
            <View style={styles.text}>
                <Typography text={body} viewType="title" />
            </View>
        </View>
    )
}

export default MessageItem;
