// External deps
import React, { FC } from "react";
import { Text, View } from "react-native";

// Internal deps
import Button from "../Button/Button";
import useTheme from "../../../hooks/useTheme";

// Local deps
import styles from "./styles";
import GoToIcon from "../../../assets/icons/GoToIcon";

type NavButtonProps = {
    label?: string,
    value?: string,
    onPress?: () => void,
}

const NavButton: FC<NavButtonProps> = (props) => {
    const {
        label,
        value,
        onPress = () => {},
    } = props;

    const { colors, gap } = useTheme();
    const style = styles(colors.blue600, gap, colors.white, colors.gray500);

    const buttonContent = () => (
        <View style={style.container}>
            <View>
                <Text style={[style.text, style.label]}>{label}</Text>
            </View>
            <View style={style.row}>
                <Text style={[style.text, style.value]}>{value}</Text>
                <GoToIcon />
            </View>
        </View>
    )

    return (
        <Button
            viewType='nav'
            buttonStyles={style.button}
            onPress={onPress}
            children={buttonContent()}
        />
    )
}

export default NavButton;
