import {
    StyleSheet,
    Dimensions,
} from "react-native";
import { CONSTANTS } from "../../../../utils/constants";

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        margin: 16,
        gap: CONSTANTS.GAP*2,
        width: Dimensions.get('window').width - CONSTANTS.GAP*2,
    },
    actions: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: CONSTANTS.GAP/2,
    },
    textInput: {
        width: Dimensions.get('window').width - CONSTANTS.GAP*4 - 80,
        borderWidth: 1,
        borderColor: "#34394B",
        backgroundColor: "#34394B",
        color: "#ffffff",
        borderRadius: 8,
        padding: 8,
        minHeight: 40,
        marginRight: 24,
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: Dimensions.get('window').width - CONSTANTS.GAP*2,
    }
});

export default styles;
