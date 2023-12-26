// External deps
import React, { FC, createContext, PropsWithChildren } from "react";

type ColorsType = Record<string, string>;

type ShadowType = {
    shadowColor;
    shadowOffset: {
        width: number;
        height: number;
    };
    shadowOpacity: number;
    shadowRadius: number;
    elevation: number;
}

type ThemePropsType = {
    colors: ColorsType;
    gap: number;
    iconButtonSize: number;
    borderRadius: number;
    shadow: (width: number, height: number, radius: number , color: string, opacity: number) => ShadowType | {};
    list: {},
    blurContainer: {}
}

const defaultValue: ThemePropsType = {
    colors: {
        blue900: '#1B202E',
        blue700: '#242838',
        blue600: '#34394B',
        blue500: '#303447',
        blue300: '#0E78F8',
        blue200: 'rgba(14, 120, 248, 0.54)',
        gray600: '#8A8F9B',
        gray500: '#C7CCD6',
        green500: '#3BA55D',
        orange500: '#E98510',
        white: '#ffffff',
    },
    gap: 16,
    iconButtonSize: 40,
    borderRadius: 12,
    shadow: () => ({}),
    list: {
        paddingVertical: 16,
        flex: 1,
        backgroundColor: '#1B202E',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    blurContainer: {
        flex: 1,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        overflow: 'hidden',
        borderRadius: 20,
        zIndex: 9999
    }
}

export const ThemeContext = createContext<ThemePropsType>(defaultValue);

const ThemeProvider: FC<PropsWithChildren> = (props) => {
    const { children } = props;
    const shadow: ThemePropsType['shadow'] = (width = 1, height = 1, radius = 4, color = '#000', opacity = 0.15): ShadowType => {
        const interpolate = (i, a, b, a2, b2) => (i - a) * (b2 - a2) / (b - a) + a2;
        return {
            shadowColor: color,
            shadowOffset: {
                width,
                height,
            },
            shadowOpacity: opacity,
            shadowRadius: parseFloat(interpolate(radius, 1, 38, 1, 16).toFixed(2)),
            elevation: radius + 1,
        };
    };

    return (
        <ThemeContext.Provider
            value={{
                colors: defaultValue.colors,
                gap: defaultValue.gap,
                iconButtonSize: defaultValue.iconButtonSize,
                borderRadius: defaultValue.borderRadius,
                shadow,
                list: defaultValue.list,
                blurContainer: defaultValue.blurContainer,
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;
