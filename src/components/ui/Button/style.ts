import {
    StyleSheet, ViewStyle,
} from "react-native";

const getButtonStyles = (): ViewStyle => {
    if (viewType === 'icon') {
        return {
            backgroundColor: colors.blue600,
            justifyContent: 'center',
            alignItems: 'center',
            width: iconButtonSize,
        };
    }

    return {
        backgroundColor: viewType === 'secondary' ? colors.blue600 : colors.blue300,
        justifyContent: 'center',
        alignItems: 'center',
        width: 65,
    };
};

export default styles;
