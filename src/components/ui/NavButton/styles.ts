import {
    Dimensions,
    StyleSheet
} from "react-native";

const styles = (buttonBg, gap, textColor, secondTextColor) => StyleSheet.create({
    button: {
        backgroundColor: buttonBg,
        width: Dimensions.get('window').width - gap*2,
        marginLeft: gap,
        marginBottom: gap,
    },
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: gap,
    },
    text: {
        fontSize: 16,
        lineHeight: 24,
    },
    label: {
        color: secondTextColor,
    },
    value: {
        color: textColor,
    },
    row: {
        flexDirection: 'row',
        alignItems: "center",
        gap: gap/2
    },
});

export default styles;
