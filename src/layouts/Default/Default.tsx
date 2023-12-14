// External deps
import React, {PropsWithChildren, FC} from "react";
import { SafeAreaView, StyleSheet } from "react-native";

// Internal deps
import useTheme from "../../hooks/useTheme";
import ChatHeader from "../../components/common/Chat/ChatHeader/ChatHeader";

const Default: FC<PropsWithChildren> = ({ children }) => {
    const { colors, gap } = useTheme();

    const styles = StyleSheet.create({
        list: {
            paddingVertical: gap,
            flex: 1,
            backgroundColor: colors.blue900,
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
        },
    });

    return (
        <SafeAreaView style={styles.list}>
            <ChatHeader />
            {children}
        </SafeAreaView>
    )
}

export default Default;
