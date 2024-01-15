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
    viewType?: 'icon' | 'primary' | 'secondary' | 'error' | 'link' | 'nav',
    buttonStyles?: {},
    onPress?: () => void,
    children?: ReactNode,
    isDisabled?: boolean,
}

const Button: FC<ButtonProps> = (props) => {
    const {
        icon,
        text = '',
        viewType = 'primary',
        buttonStyles,
        onPress = () => {},
        children,
        isDisabled = false
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
            case 'error':
                return colors.red400;
            default:
                return !isDisabled ? colors.blue300 : colors.blue200;
        }
    };

    const getColorByViewType = () => {
        switch (viewType) {
            case 'error':
                return colors.red500;
            default:
                return !isDisabled ? colors.white : colors.white200;
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

    const getButtonContent = () => {
        switch (viewType) {
            case 'icon':
                return icon;
            case 'nav':
                return children;
            case 'link':
            default:
                return <Text style={{ color: getColorByViewType() }}>{text}</Text>;
        }
    }

    return (
      <SafeAreaView>
          <Pressable
              onPress={!isDisabled ? onPress : () => {}}
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
              {getButtonContent()}
          </Pressable>
      </SafeAreaView>
    )
}

export default Button;
