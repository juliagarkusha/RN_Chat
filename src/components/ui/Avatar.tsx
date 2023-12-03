// External deps
import React, { ReactElement, ReactNode } from "react";
import { StyleSheet, View } from "react-native";

// Internal deps
import { COLORS } from "../../theme/colors";
import { CONSTANTS } from "../../theme/constants";
import Typography from "./Typography";

type AvatarProps = {
    name: string,
    icon?: ReactNode,
    isOnline?: boolean,
}

const Avatar = (AvatarProps): ReactElement => {
    const {
        name,
        icon,
        isOnline,
    } = AvatarProps;

    return (
        <View style={styles.avatar}>
            {isOnline && <View style={styles.onlineIndicator} />}
            {
                !!icon
                    ? <View>{icon}</View>
                    : <Typography viewType='title' text={name.slice(0, 1).toUpperCase()} />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    avatar: {
        width: CONSTANTS.CHAT_AVATAR_SIZE,
        height: CONSTANTS.CHAT_AVATAR_SIZE,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: COLORS.blue500,
        borderWidth: 1,
        borderRadius: 12
    },
    onlineIndicator: {
        position: "absolute",
        top: -2,
        right: -2,
        width: 10,
        height: 10,
        backgroundColor: COLORS.green500,
        borderRadius: 5,
    },
});

export default Avatar;
