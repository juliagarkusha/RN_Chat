// External deps
import React, { ReactElement } from "react";
import {StyleSheet, Text, View} from "react-native";

// Internal deps
import { COLORS } from "../../theme/colors";

type BadgeProps = {
    text: string,
}

const Badge = (BadgeProps): ReactElement => {
    const {
        text,
    } = BadgeProps;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        minWidth: 17,
        height: 17,
        borderRadius: 32,
        backgroundColor: COLORS.blue200,
        marginVertical: 4,
    },
    text: {
        fontSize: 12,
        color: COLORS.white,
        padding: 2
    }
});

export default Badge;
