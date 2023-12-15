// External deps
import React, { FC, ReactNode } from "react";
import {
    SafeAreaView,
    Pressable,
    Text,
    ViewStyle,
} from "react-native";

// Internal deps
import useTheme from "../../hooks/useTheme";

type ButtonProps = {
    text?: string,
    icon: ReactNode,
    viewType: 'icon' | 'primary',
    onPress?: () => void,
}

const Button: FC<ButtonProps> = (props) => {
    const {
        icon,
        text = '',
        viewType = 'primary',
        onPress = () => {},
    } = props;

    const { colors, iconButtonSize, borderRadius } = useTheme();

    const getButtonStyles = (): ViewStyle => {
        if (viewType === 'icon') {
            return {
                backgroundColor: colors.blue600,
                justifyContent: 'center',
                alignItems: 'center',
            };
        }

        return { backgroundColor: 'red' };
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
                      width: iconButtonSize,
                      height: iconButtonSize,
                      borderRadius: borderRadius,
                  },
              ]}>
              {viewType === 'icon' ? icon : <Text>{text}</Text> }
          </Pressable>
      </SafeAreaView>
    )
}

export default Button;
