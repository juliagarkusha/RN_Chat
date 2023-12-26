// External deps
import React, {FC, ReactElement, ReactNode} from "react";
import { StyleSheet, View } from "react-native";

// Internal deps
import Typography from "../Typography";
import useTheme from "../../../hooks/useTheme";

//Local deps
import styles from "./styles";

type AvatarProps = {
    name: string,
    icon?: ReactNode,
    isOnline?: boolean,
    viewType?: 'chat' | 'avatar',
}

const Avatar: FC<AvatarProps> = (props): ReactElement => {
    const {
        name,
        icon,
        isOnline,
        viewType = 'chat',
    } = props;

    const { colors } = useTheme();
    const avatarStyles = styles(colors.blue500, colors.green500, colors.orange500);

    return (
        <View
            style={[avatarStyles.container, viewType === 'chat' ? avatarStyles.chat : avatarStyles.avatar]}
        >
            {isOnline && <View style={avatarStyles.onlineIndicator} />}
            {
                !!icon
                    ? <View>{icon}</View>
                    : <Typography viewType='title' text={name.slice(0, 1).toUpperCase()} />
            }
        </View>
    )
}

export default Avatar;
