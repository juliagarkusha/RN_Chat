import {
    Dimensions,
    StyleSheet
} from "react-native";

const styles = (gap, inputBg, textSecondaryColor, textPrimaryColor, errorColor, isShowEmailError, isShowPasswordError) => StyleSheet.create({
    signIn: {
        width: Dimensions.get('window').width - gap*2,
        marginLeft: gap,
    },
    form: {
        marginTop: gap*1.5,
    },
    inputError: {
        color: errorColor,
        marginTop: gap/2,
    },
    emilField: {
        marginBottom: gap,
    },
    passwordInput: {
        borderColor: isShowPasswordError ? errorColor : inputBg,
    },
    emailInput: {
        borderColor: isShowEmailError ? errorColor : inputBg,
    },
    passwordField: {
        position: "relative",
        marginBottom: gap,
    },
    passwordIcon: {
        position: "absolute",
        right: gap/2,
        bottom: 1,
        height: 54
    },
    label: {
        color: textSecondaryColor,
        marginBottom: gap/2,
    },
    input: {
        width: Dimensions.get('window').width - gap*2,
        height: 56,
        fontSize: 16,
        backgroundColor: inputBg,
        paddingHorizontal: gap,
        borderRadius: 12,
        color: textPrimaryColor,
        borderStyle: 'solid',
        borderWidth: 1,
    },
    button: {
        width: Dimensions.get('window').width - gap*2,
        height: 56,
        marginVertical: gap*1.5,
        fontSize: 16,
    },
});

export default styles;
