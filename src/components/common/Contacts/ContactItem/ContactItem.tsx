// External deps
import React, { FC } from "react";
import { StyleSheet, View } from "react-native";

// Internal deps
import Avatar from "../../../ui/Avatar/Avatar";
import ChatName from "../../Chat/ChatName";
import useTheme from "../../../../hooks/useTheme";

// Local deps
import styles from "./styles";

type ContactItemProps = {
    id: string,
    name: string,
    isOnline: boolean,
}

const ContactItem: FC<ContactItemProps> = (props) => {
    const {
        id,
        name,
        isOnline,
    } = props;

    const { gap } = useTheme();
    const style = styles(gap);

    return (
        <View id={id} style={style.chat}>
            <Avatar name={name} isOnline={isOnline}/>
            <ChatName name={name} />
        </View>
    )
}

export default ContactItem;
