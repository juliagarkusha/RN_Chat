import {
    StyleSheet
} from "react-native";

const styles = (gap) => StyleSheet.create({
    chat: {
        flexDirection: "row",
        alignItems: 'center',
        gap: gap,
        paddingHorizontal: gap,
        marginBottom: gap,
        paddingTop: gap/8
    },
});

export default styles;
