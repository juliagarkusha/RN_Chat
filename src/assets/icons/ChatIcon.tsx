// External deps
import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

// Internal deps
import useTheme from "../../hooks/useTheme";

const ChatIcon: FC = (props) => {
    const { focused } = props;
    const { colors } = useTheme();

    const backColor = focused ? colors.blue300 : colors.gray500;

    return (
        <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M15.25 7.58336C15.2529 8.68325 14.9959 9.76826 14.5 10.75C13.912 11.9265 13.0081 12.916 11.8895 13.6078C10.771 14.2995 9.48187 14.6662 8.16667 14.6667C7.06678 14.6696 5.98176 14.4126 5 13.9167L0.25 15.5L1.83333 10.75C1.33744 9.76826 1.08047 8.68325 1.08333 7.58336C1.08384 6.26815 1.45051 4.97907 2.14227 3.86048C2.83402 2.7419 3.82354 1.838 5 1.25002C5.98176 0.754133 7.06678 0.497156 8.16667 0.500024H8.58333C10.3203 0.59585 11.9609 1.32899 13.1909 2.55907C14.421 3.78915 15.1542 5.42973 15.25 7.16669V7.58336Z"
                  fill={backColor}
            />
        </Svg>
    )
}

export default ChatIcon;
