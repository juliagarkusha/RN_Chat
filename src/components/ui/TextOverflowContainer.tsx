import React, { FC, ReactNode } from "react";
import {StyleSheet, View} from "react-native";

type TextOverflowContainerProps = {
    children: ReactNode,
    maxSize?: number,
}

const TextOverflowContainer: FC<TextOverflowContainerProps> = (props) => {
    const {
        children,
        maxSize = 100,
    } = props;

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
