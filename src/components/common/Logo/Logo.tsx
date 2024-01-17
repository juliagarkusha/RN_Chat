// External deps
import React, { FC } from "react";
import {StyleSheet, Text, View} from "react-native";

// Internal deps
import useTheme from "../../../hooks/useTheme";

// Local deps
import styles from "./styles";

const Logo: FC = () => {
    const { colors, gap } = useTheme();
    const style = styles(colors.gray500, gap);

    return (
        <View style={style.container}>
            <Text style={style.logo}>
                App
            </Text>
        </View>
    )
}

export default Logo;
