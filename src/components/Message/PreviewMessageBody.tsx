// External deps
import React, { ReactElement } from "react";
import { Dimensions } from "react-native";

// Internal deps
import { COLORS } from "../../theme/colors";
import { CONSTANTS } from "../../theme/constants";
import Typography from "../ui/Typography";
import TextOverflowContainer from "../ui/TextOverflowContainer";

type PreviewMessageBodyProps = {
    message?: string,
}

const PreviewMessageBody = (PreviewMessageBodyProps): ReactElement => {
    const {
        message = '',
    } = PreviewMessageBodyProps;

    return (
        <TextOverflowContainer
            maxSize={Dimensions.get('window').width - CONSTANTS.CHAT_AVATAR_SIZE - CONSTANTS.CHAT_BADGE_SIZE - CONSTANTS.GAP*3}
        >
            <Typography
                text={message}
                color={COLORS.gray500}
                isEllipSizeMode
            />
        </TextOverflowContainer>
    )
}

export default PreviewMessageBody;
