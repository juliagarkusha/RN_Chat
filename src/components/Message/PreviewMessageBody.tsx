// External deps
import React, {FC, ReactElement} from "react";
import { Dimensions } from "react-native";

// Internal deps
import { CONSTANTS } from "../../utils/constants.ts";
import Typography from "../ui/Typography";
import TextOverflowContainer from "../ui/TextOverflowContainer";
import useTheme from "../../hooks/useTheme";

type PreviewMessageBodyProps = {
    message?: string,
}

const PreviewMessageBody: FC<PreviewMessageBodyProps> = (props) => {
    const {
        message = '',
    } = props;
    const { colors, gap } = useTheme();

    return (
        <TextOverflowContainer
            maxSize={Dimensions.get('window').width - CONSTANTS.CHAT_AVATAR_SIZE - CONSTANTS.CHAT_BADGE_SIZE - gap*3}
        >
            <Typography
                text={message}
                color={colors.gray500}
                isEllipSizeMode
            />
        </TextOverflowContainer>
    )
}

export default PreviewMessageBody;
