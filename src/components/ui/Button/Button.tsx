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
    viewType?: 'icon' | 'primary' | 'secondary' | 'link',
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

    const getBgByViewType = () => {
        switch (viewType) {
            case 'secondary':
                return colors.blue600;
            case 'icon':
                return colors.blue600;
            case 'link':
                return colors.blue900;
            default:
                return colors.blue300;
        }
    };

    const getButtonStyles = (): ViewStyle => {
        if (viewType === 'icon') {
            return {
                justifyContent: 'center',
                alignItems: 'center',
                width: iconButtonSize,
            };
        }

        return {
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
                      backgroundColor: getBgByViewType(),
                  },
                  buttonStyles,
              ]}>
              {viewType === 'icon' ? icon : <Text style={{ color: viewType === 'link' ? colors.blue300 : colors.white }}>{text}</Text> }
          </Pressable>
      </SafeAreaView>
    )
}

export default Button;
