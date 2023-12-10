// External deps
import React, {FC, ReactElement, ReactNode} from "react";
import { StyleSheet, View } from "react-native";

// Internal deps
import { CONSTANTS } from "../../utils/constants";
import Typography from "./Typography";
import useTheme from "../../hooks/useTheme";

type AvatarProps = {
    name: string,
    icon?: ReactNode,
    isOnline?: boolean,
}

const Avatar: FC<AvatarProps> = (props): ReactElement => {
    const {
        name,
        icon,
        isOnline,
    } = props;

    const { colors } = useTheme();

    const styles = StyleSheet.create({
        avatar: {
            width: CONSTANTS.CHAT_AVATAR_SIZE,
            height: CONSTANTS.CHAT_AVATAR_SIZE,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: colors.blue500,
            borderWidth: 1,
            borderRadius: 12
        },
        onlineIndicator: {
            position: "absolute",
            top: -2,
            right: -2,
            width: 10,
            height: 10,
            backgroundColor: colors.green500,
            borderRadius: 5,
        },
    });

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

export default Avatar;
