// External deps
import React, { FC } from "react";
import { ActivityIndicator, SafeAreaView } from "react-native";

// Internal deps
import useTheme from "../../../hooks/useTheme";

// Local deps
import styles from "./styles";

const Loader: FC = () => {
    const { list, colors } = useTheme();
    const style = styles();

    return (
        <SafeAreaView style={[list, style.loader]}>
            <ActivityIndicator size="large" color={colors.white} />
        </SafeAreaView>
    )
}

export default Loader;
