import {
    StyleSheet
} from "react-native";

const styles = (gap) => StyleSheet.create({
    chat: {
        marginHorizontal: gap,
        marginBottom: gap,
        flexDirection: "row",
        alignItems: 'center',
        gap: gap,
    },
});

export default styles;
