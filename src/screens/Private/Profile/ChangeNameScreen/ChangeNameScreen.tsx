// External deps
import React, { FC } from "react";
import { SafeAreaView, Text } from "react-native";

// Internal deps
import useTheme from "../../../../hooks/useTheme";

// Local deps
import styles from "./styles";

const ChangeNameScreen: FC = () => {
    const { list, gap } = useTheme();
    const style= styles(gap);

    return (
        <SafeAreaView style={list}>
            <Text>ChangeNameScreen</Text>
        </SafeAreaView>
    )
}

export default ChangeNameScreen;
