import React, { ReactElement } from "react";
import Svg, { Path, G, ClipPath, Defs, Rect } from "react-native-svg";

const SendIcon = (): ReactElement => {
    return (
        <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <G clip-path="url(#clip0_347_11031)">
                <Path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.3072 5.69288L7.7071 10.2753L0.803747 7.97383C0.321882 7.81288 -0.00275487 7.36078 1.76209e-05 6.85287C0.00282659 6.34496 0.331184 5.89563 0.81491 5.7403L18.4644 0.0565164C18.8839 -0.0783506 19.3444 0.0323301 19.6561 0.34398C19.9677 0.655629 20.0784 1.11608 19.9435 1.53564L14.2597 19.1851C14.1044 19.6688 13.6551 19.9972 13.1472 20C12.6392 20.0028 12.1871 19.6781 12.0262 19.1963L9.71361 12.2595L14.3072 5.69288Z"
                    fill="#0E78F8"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_347_11031">
                    <Rect width="20" height="20" fill="white"/>
                </ClipPath>
            </Defs>
        </Svg>

    )
}

export default SendIcon;
