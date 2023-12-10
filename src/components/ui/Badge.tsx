// External deps
import React, { FC } from "react";
import {StyleSheet, Text, View} from "react-native";

// Internal deps
import useTheme from "../../hooks/useTheme";

type BadgeProps = {
    text: string,
}

const Badge: FC<BadgeProps> = (props) => {
    const {
        text,
    } = props;
    const { colors } = useTheme();
    const styles = StyleSheet.create({
        container: {
            display: "flex",
            justifyContent: "center",
            alignItems: 'center',
            minWidth: 17,
            height: 17,
            borderRadius: 32,
            backgroundColor: colors.blue200,
            marginVertical: 4,
        },
        text: {
            fontSize: 12,
            color: colors.white,
            padding: 2
        }
    });

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

export default Badge;
