import React, { ReactElement, ReactNode } from "react";
import {StyleSheet, View} from "react-native";
import {COLORS} from "../../theme/colors";

type TextOverflowContainerProps = {
    children: ReactNode,
    maxSize?: number,
}

const TextOverflowContainer = (TextOverflowContainerProps): ReactElement => {
    const {
        children,
        maxSize = 100,
    } = TextOverflowContainerProps;

    const styles = StyleSheet.create({
        container: {
            maxWidth: maxSize
        },
    });

    return (
        <View style={styles.container}>{children}</View>
    )
}

export default TextOverflowContainer;
