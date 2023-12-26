// External deps
import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

// Internal deps
import useTheme from "../../hooks/useTheme";

const MoreIcon: FC = (props) => {
    const { focused } = props;
    const { colors } = useTheme();

    const backColor = focused ? colors.blue300 : colors.gray500;

    return (
        <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path
                d="M9.99992 11.6673C10.9204 11.6673 11.6666 10.9211 11.6666 10.0007C11.6666 9.08018 10.9204 8.33398 9.99992 8.33398C9.07944 8.33398 8.33325 9.08018 8.33325 10.0007C8.33325 10.9211 9.07944 11.6673 9.99992 11.6673Z"
                fill={backColor}
            />
            <Path
                d="M15.8334 11.6673C16.7539 11.6673 17.5001 10.9211 17.5001 10.0007C17.5001 9.08018 16.7539 8.33398 15.8334 8.33398C14.9129 8.33398 14.1667 9.08018 14.1667 10.0007C14.1667 10.9211 14.9129 11.6673 15.8334 11.6673Z"
                fill={backColor}
            />
            <Path
                d="M4.16667 11.6673C5.08714 11.6673 5.83333 10.9211 5.83333 10.0007C5.83333 9.08018 5.08714 8.33398 4.16667 8.33398C3.24619 8.33398 2.5 9.08018 2.5 10.0007C2.5 10.9211 3.24619 11.6673 4.16667 11.6673Z"
                fill={backColor}
            />
        </Svg>
    )
}

export default MoreIcon;
