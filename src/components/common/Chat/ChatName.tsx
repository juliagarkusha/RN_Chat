// External deps
import React, { FC } from "react";
import { Dimensions  } from "react-native";

// Internal deps
import { CONSTANTS } from "../../../utils/constants";
import Typography from "../../ui/Typography";
import TextOverflowContainer from "../../ui/TextOverflowContainer";

type ChatNameProps = {
    name: string;
    removed: boolean;
}

const ChatName: FC<ChatNameProps> = (props) => {
    const {
        name,
        removed = false,
    } = props;

    return (
        <TextOverflowContainer
            maxSize={Dimensions.get('window').width - CONSTANTS.CHAT_AVATAR_SIZE - CONSTANTS.CHAT_DATE_SIZE - CONSTANTS.GAP*3}
        >
            <Typography
                text={name}
                viewType="title"
                isEllipSizeMode
                lineThrough={removed}
            />
        </TextOverflowContainer>
    )
}



export default ChatName;
