import { StyleSheet, Dimensions } from "react-native";

const styles = (textColor, gap) => StyleSheet.create({
    block: {
        width: (Dimensions.get('window').width - gap*2),
        marginLeft: gap,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: gap*2,
        paddingHorizontal: gap
    },
    text: {
        color: textColor,
        textAlign: 'center'
    }
});

export default styles;
