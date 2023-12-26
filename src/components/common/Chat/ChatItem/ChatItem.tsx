// External deps
import React, { FC } from "react";
import { StyleSheet, View } from "react-native";

// Internal deps
import Avatar from "../../../ui/Avatar/Avatar";
import LockIcon from "../../../../assets/icons/LockIcon";
import MessageCircleIcon from "../../../../assets/icons/MessageCircleIcon";
import ChatName from "../ChatName";
import useTheme from "../../../../hooks/useTheme";

// Local deps
import styles from "./styles";

type ChatItemProps = {
    id: string,
    name: string,
    isPrivate: boolean,
}

const ChatItem: FC<ChatItemProps> = (props) => {
    const {
        id,
        name,
        isPrivate,
    } = props;

    const { gap } = useTheme();
    const style = styles(gap);

    return (
        <View id={id} style={style.chat}>
            <Avatar icon={isPrivate ? <LockIcon /> : <MessageCircleIcon />} name={name} />
            <ChatName name={name} />
        </View>
    )
}

export default ChatItem;
