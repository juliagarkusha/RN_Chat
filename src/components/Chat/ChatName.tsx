// External deps
import React, { ReactElement } from "react";
import { Dimensions } from "react-native";

// Internal deps
import { CONSTANTS } from "../../theme/constants";
import Typography from "../ui/Typography";
import TextOverflowContainer from "../ui/TextOverflowContainer";

type ChatNameProps = {
    name: string,
}

const ChatName = (ChatNameProps): ReactElement => {
    const {
        name,
    } = ChatNameProps;

    return (
        <TextOverflowContainer
            maxSize={Dimensions.get('window').width - CONSTANTS.CHAT_AVATAR_SIZE - CONSTANTS.CHAT_DATE_SIZE - CONSTANTS.GAP*3}
        >
            <Typography
                text={name}
                viewType="title"
                isEllipSizeMode
            />
        </TextOverflowContainer>
    )
}

export default ChatName;
