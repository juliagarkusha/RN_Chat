import {
    StyleSheet,
    Dimensions,
} from "react-native";
import { CONSTANTS } from "../../../../utils/constants";

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        margin: 16,
        width: Dimensions.get('window').width - CONSTANTS.GAP*2,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: CONSTANTS.GAP/2,
    },
    textInput: {
        width: Dimensions.get('window').width - CONSTANTS.GAP*3 - CONSTANTS.GAP/2 - 40*2,
        borderWidth: 1,
        borderColor: "#ccc",
        color: "#ffffff",
        borderRadius: 8,
        padding: 8,
        marginRight: CONSTANTS.GAP,
        minHeight: 40
    },
});

export default styles;
