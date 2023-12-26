import {
    StyleSheet,
} from "react-native";
import { CONSTANTS } from "../../../../utils/constants";

const styles = StyleSheet.create({
    message: {
        marginHorizontal: CONSTANTS.GAP,
        marginTop: CONSTANTS.GAP/4,
        marginBottom: CONSTANTS.GAP*0.75
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: CONSTANTS.GAP,
    },
    info: {
        flexDirection: 'row',
        alignItems: 'baseline',
        gap: CONSTANTS.GAP/2,
    },
    text: {
        paddingLeft: CONSTANTS.CHAT_AVATAR_SIZE+CONSTANTS.GAP
    }
});

export default styles;
