// External deps
import React, { FC } from "react";
import { SafeAreaView, Text } from "react-native";

// Internal deps
import useTheme from "../../../hooks/useTheme";

// Local deps
import styles from "./styles";

type AlertProps = {
    text: string,
}

const Alert: FC<AlertProps> = (props) => {
    const { text } = props;
    const { colors, gap } = useTheme();
    const style = styles(colors.red400, colors.red500, gap);

    return (
        <SafeAreaView style={style.alert}>
            <Text style={style.text}>{text}</Text>
        </SafeAreaView>
    )
}

export default Alert;
