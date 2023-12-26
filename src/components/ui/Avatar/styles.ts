import {StyleSheet} from "react-native";
import { CONSTANTS } from "../../../utils/constants";

const styles = (borderColor, bgColor, avatarBg) => StyleSheet.create({
    container: {
        width: CONSTANTS.CHAT_AVATAR_SIZE,
        height: CONSTANTS.CHAT_AVATAR_SIZE,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    chat: {
        borderColor: borderColor,
        borderWidth: 1,
        borderRadius: 12
    },
    avatar: {
        borderRadius: 50,
        backgroundColor: avatarBg,
    },
    onlineIndicator: {
        position: "absolute",
        top: -2,
        right: -2,
        width: 10,
        height: 10,
        backgroundColor: bgColor,
        borderRadius: 5,
    },
});

export default styles;
