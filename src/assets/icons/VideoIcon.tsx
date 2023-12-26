// External deps
import React, { FC } from "react";
import Svg, { Path, ClipPath, G, Defs, Rect } from "react-native-svg";

// Internal deps
import useTheme from "../../hooks/useTheme";

const VideoIcon: FC = (props) => {
    const { focused } = props;
    const { colors } = useTheme();

    const backColor = focused ? colors.blue300 : colors.gray500;

    return (
        <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <G clip-path="url(#clip0_1708_2015)">
                <Path
                    d="M17.5001 5.95964C17.2469 5.84563 16.9658 5.80855 16.6917 5.853C16.4176 5.89745 16.1626 6.02146 15.9584 6.20964L14.1667 7.8763V6.66797C14.1667 6.00493 13.9034 5.36904 13.4345 4.9002C12.9657 4.43136 12.3298 4.16797 11.6667 4.16797H4.16675C3.50371 4.16797 2.86782 4.43136 2.39898 4.9002C1.93014 5.36904 1.66675 6.00493 1.66675 6.66797V13.3346C1.66675 13.9977 1.93014 14.6336 2.39898 15.1024C2.86782 15.5712 3.50371 15.8346 4.16675 15.8346H11.6667C12.3298 15.8346 12.9657 15.5712 13.4345 15.1024C13.9034 14.6336 14.1667 13.9977 14.1667 13.3346V12.1263L15.9668 13.793C16.2317 14.0328 16.576 14.1664 16.9334 14.168C17.1318 14.1675 17.3278 14.1249 17.5084 14.043C17.7542 13.9435 17.9648 13.7731 18.1132 13.5534C18.2616 13.3337 18.3412 13.0748 18.3418 12.8096V7.19297C18.3405 6.92688 18.2597 6.66723 18.1098 6.44743C17.9598 6.22764 17.7474 6.05776 17.5001 5.95964Z"
                    fill={backColor}
                />
            </G>
            <Defs>
                <ClipPath id="clip0_1708_2015">
                    <Rect width="20" height="20" fill="white"/>
                </ClipPath>
            </Defs>
        </Svg>

    )
}

export default VideoIcon;
