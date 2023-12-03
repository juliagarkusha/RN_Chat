// External deps
import React, { ReactElement } from "react";
import {StyleSheet, Text} from "react-native";

import { COLORS } from "../../theme/colors";

type TypographyProps = {
    text: string,
    viewType?: 'title' | 'text',
    color?: string,
    isEllipSizeMode?: boolean,
}

const Typography = (TypographyProps): ReactElement => {
    const {
        text = '',
        viewType = 'text',
        color,
        isEllipSizeMode = false,
    } = TypographyProps;

    const styles = StyleSheet.create({
        text: {
            color: color ?? COLORS.white,
            fontSize: viewType === 'title' ? 16 : 12,
            lineHeight: viewType === 'title' ? 24 : 16,
        },
    });

    if (isEllipSizeMode) {
        return (
            <Text style={styles.text} ellipsizeMode="tail" numberOfLines={1}>
                {text}
            </Text>
        )
    }

    return (
        <Text style={styles.text}>
            {text}
        </Text>
    )
}

export default Typography;
