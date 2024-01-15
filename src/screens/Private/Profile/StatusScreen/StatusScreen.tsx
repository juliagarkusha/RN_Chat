// External deps
import React, { FC } from "react";
import { SafeAreaView, Text } from "react-native";

// Internal deps
import useTheme from "../../../../hooks/useTheme";

// Local deps
import styles from "./styles";

const StatusScreen: FC = () => {
    const { list, gap } = useTheme();
    const style= styles(gap);

    return (
        <SafeAreaView style={list}>
            <Text>StatusScreen</Text>
        </SafeAreaView>
    )
}

export default StatusScreen;
