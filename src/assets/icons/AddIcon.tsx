import React, { ReactElement } from "react";
import Svg, { Path } from "react-native-svg";

const AddIcon = (): ReactElement => {
    return (
        <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M10 4.1665V15.8332" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M4.16669 10H15.8334" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>
    )
}

export default AddIcon;
