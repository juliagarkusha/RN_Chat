// External deps
import React, { FC } from "react";
import {StyleSheet, Text} from "react-native";

import useTheme from "../../hooks/useTheme";

type TypographyProps = {
    text: string,
    viewType?: 'title' | 'text',
    color?: string,
    isEllipSizeMode?: boolean,
    lineThrough: boolean,
}

const Typography: FC<TypographyProps> = (props) => {
    const {
        text = '',
        viewType = 'text',
        color,
        isEllipSizeMode = false,
        lineThrough = false,
    } = props;
    const { colors } = useTheme();

    const styles = StyleSheet.create({
        text: {
            color: color ?? colors.white,
            fontSize: viewType === 'title' ? 16 : 12,
            lineHeight: viewType === 'title' ? 24 : 16,
            textDecorationLine: lineThrough ? 'line-through' : 'none',
            textDecorationStyle: 'solid'
        },
    });

    console.log('debug text: ', text);
    console.log('debug lineThrough: ', lineThrough);

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
