// External deps
import React, { FC } from "react";
import { SafeAreaView, Text } from "react-native";

// Internal deps
import useTheme from "../../../hooks/useTheme";

// Local deps
import styles from "./styles";

type TextPlaceholderProps = {
    text: string,
}

const TextPlaceholder: FC<TextPlaceholderProps> = (props) => {
    const { text } = props;
    const { colors, gap } = useTheme();
    const style = styles(colors.white200, gap);

    return (
        <SafeAreaView style={style.block}>
            <Text style={style.text}>{text}</Text>
        </SafeAreaView>
    )
}

export default TextPlaceholder;
