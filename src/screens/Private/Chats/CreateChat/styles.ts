import {
    StyleSheet,
    Dimensions
} from "react-native";
import {CONSTANTS} from "../../../../utils/constants";

const styles = (gap, textColor) => StyleSheet.create({
    container: {
        marginTop: gap*2,
    },
    field: {
        width: Dimensions.get('window').width - CONSTANTS.GAP*2,
        marginLeft: gap,
    },
    input: {
        borderWidth: 1,
        borderColor: "#34394B",
        backgroundColor: "#34394B",
        color: textColor,
        borderRadius: 8,
        padding: 8,
        minHeight: 40,
        marginBottom: gap,
    },
    label: {
        fontSize: 16,
        lineHeight: 24,
        color: '#8A8F9B',
        paddingBottom: gap/2,
    },
    contactsLabel: {
        fontSize: 16,
        lineHeight: 24,
        color: '#8A8F9B',
        paddingBottom: gap/2,
        marginLeft: gap,
    },
    checkbox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: gap,
        marginBottom: gap,
    },
    checkboxCheck: {
        width: 24,
        height: 24,
        borderColor: 'black',
        borderWidth: 1,
        marginRight: 8,
        borderRadius: gap/8,
        borderBlockColor: 'textColor',
        borderRightColor: 'textColor'
    },
    checkboxContainer: {
        backgroundColor: "",
        borderColor: "#1B202E"
    },
    checkboxLabel: {
        fontSize: 16,
        lineHeight: 24,
        color: textColor,
        marginLeft: gap,
    }
});

export default styles;
