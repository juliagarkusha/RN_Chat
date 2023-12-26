import {
    Dimensions,
    StyleSheet
} from "react-native";

const styles = (gap, size, color, textColor) => StyleSheet.create({
    field: {
        width: Dimensions.get('window').width - gap*2,
        borderWidth: 1,
        borderColor: color,
        backgroundColor: color,
        color: textColor,
        borderRadius: gap/2,
        padding: gap/2,
        minHeight: size,
        marginLeft: gap,
    },
    sendMessage: {

    },
    sendButton: {
        position: "absolute",
        right: gap,
        bottom: 0,
    },
});

export default styles;
