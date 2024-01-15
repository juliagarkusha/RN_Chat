import { StyleSheet, Dimensions } from "react-native";

const styles = (bgColor, textColor, gap) => StyleSheet.create({
    alert: {
        backgroundColor: bgColor,
        width: (Dimensions.get('window').width - gap*2),
        borderRadius: gap/2,
    },
    text: {
        color: textColor,
        paddingHorizontal: gap,
        paddingVertical: gap/2,
        textAlign: 'center'
    }
});

export default styles;
