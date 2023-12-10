// External deps
import React, { ReactElement, ReactNode } from "react";
import { View, StyleSheet, Dimensions } from "react-native";

// Internal deps
import { CONSTANTS } from "../../theme/constants";
import { COLORS } from "../../theme/colors";

type CardProps = {
    children: ReactNode,
    id: number,
}

const Card = (CardProps): ReactElement => {
    const {
        children,
        id
    } = CardProps;

    return (
        <View id={id} style={[styles.card, styles.shadow]}>{children}</View>
    )
}

const styles = StyleSheet.create({
    card: {
        display: "flex",
        width: Dimensions.get('window').width,
        alignSelf: 'stretch',
        gap: CONSTANTS.GAP,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: COLORS.blue900,
        paddingVertical: 12,
        paddingHorizontal: CONSTANTS.GAP,
        marginVertical: 4,
    },
    shadow: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
    },
});


export default Card;
