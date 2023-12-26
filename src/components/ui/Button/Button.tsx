// External deps
import React, { FC, ReactNode } from "react";
import {
    SafeAreaView,
    Pressable,
    Text,
    ViewStyle,
} from "react-native";

// Internal deps
import useTheme from "../../../hooks/useTheme";

type ButtonProps = {
    text?: string,
    icon?: ReactNode,
    viewType?: 'icon' | 'primary' | 'secondary',
    buttonStyles?: {},
    onPress?: () => void,
}

const Button: FC<ButtonProps> = (props) => {
    const {
        icon,
        text = '',
        viewType = 'primary',
        buttonStyles,
        onPress = () => {},
    } = props;

    const { colors, iconButtonSize, borderRadius } = useTheme();

    const getButtonStyles = (): ViewStyle => {
        if (viewType === 'icon') {
            return {
                backgroundColor: colors.blue600,
                justifyContent: 'center',
                alignItems: 'center',
                width: iconButtonSize,
            };
        }

        return {
            backgroundColor: viewType === 'secondary' ? colors.blue600 : colors.blue300,
            justifyContent: 'center',
            alignItems: 'center',
            width: 65,
        };
    };

    return (
      <SafeAreaView>
          <Pressable
              onPress={onPress}
              android_ripple={{ color: colors.blue800, borderless: false }}
              style={({pressed}) => [
                  getButtonStyles(),
                  {
                      opacity: pressed ? 0.8 : 1,
                      height: iconButtonSize,
                      borderRadius: borderRadius,
                  },
                  buttonStyles,
              ]}>
              {viewType === 'icon' ? icon : <Text style={{ color: colors.white }}>{text}</Text> }
          </Pressable>
      </SafeAreaView>
    )
}

export default Button;
