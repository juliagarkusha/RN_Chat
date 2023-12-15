// External deps
import React, { FC, ReactNode } from "react";
import { View, StyleSheet, Dimensions } from "react-native";

// Internal deps
import useTheme from "../../hooks/useTheme";

type CardProps = {
    children: ReactNode,
    id: string,
}

const Card: FC<CardProps> = (props) => {
    const {
        children,
        id
    } = props;
    const { shadow, gap, colors } = useTheme();
    const styles = StyleSheet.create({
        card: {
            display: "flex",
            width: Dimensions.get('window').width,
            alignSelf: 'stretch',
            gap: gap,
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            backgroundColor: colors.blue900,
            paddingVertical: 12,
            paddingHorizontal: gap,
            marginVertical: 4,
        },
        shadow: shadow(-2, 4, 3, '#171717', 0.4),
    });

    return (
        <View id={id} style={[styles.card, styles.shadow]}>{children}</View>
    )
}


export default Card;
