import {
    StyleSheet,
    Dimensions
} from "react-native";

const styles = (gap, keyboardHeight) => StyleSheet.create({
    chatBody: {
        marginTop: gap,
        marginBottom: gap*1.25,
        height: Dimensions.get('window').height - 150 - keyboardHeight,
        justifyContent: "space-between"
    },
    list: {
        height: Dimensions.get('window').height - 210 - keyboardHeight,
    },
});

export default styles;
