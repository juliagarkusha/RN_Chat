import {
    Dimensions,
    StyleSheet
} from "react-native";

const styles = (textPrimaryColor, textSecondaryColor, gap) => StyleSheet.create({
    appInfo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: Dimensions.get('window').width - gap*2,
        marginBottom: gap*3,
    },
    appLogo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
    },
    appText: {
        alignItems: 'center',
    },
    container: {
        width: Dimensions.get('window').width - gap*2,
        marginLeft: gap,
    },
    button: {
        width: Dimensions.get('window').width - gap*2,
        height: 56,
        marginBottom: gap,
        fontSize: 16
    },
    textPrimary: {
        color: textPrimaryColor,
        fontSize: 32,
        lineHeight: 40,
    },
    textSecondary: {
        color: textSecondaryColor,
        fontSize: 16,
        lineHeight: 24,
    },
});

export default styles;

