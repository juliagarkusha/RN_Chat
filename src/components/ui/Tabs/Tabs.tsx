// External deps
import React, {FC, useState} from "react";
import {
    View,
} from "react-native";

// Internal deps
import Button from "../Button/Button";
import useTheme from "../../../hooks/useTheme";

// Local deps
import styles from "./styles";

enum TabsButtonName {
    LEFT,
    RIGHT
}

type TabButtonProps = {
    text: string,
}

type TabsProps = {
    buttonLeft: TabButtonProps,
    buttonRight: TabButtonProps,
    activeTab?: TabsButtonName,
    componentLeft: FC,
    componentRight: FC,
}

const Tabs: FC<TabsProps> = (props) => {
    const {
      buttonLeft,
      buttonRight,
      activeTab,
      componentLeft: ComponentLeft,
      componentRight: ComponentRight,
    } = props;

    const { gap } = useTheme();
    const [ activeTabName, setActiveTabName ] = useState<TabsButtonName>(activeTab ?? TabsButtonName.LEFT);
    const style = styles(gap);

    const onLeftButtonPress = () => {
        setActiveTabName(TabsButtonName.LEFT);
    }

    const onRightButtonPress = () => {
        setActiveTabName(TabsButtonName.RIGHT);
    }

    return (
        <View>
            <View style={style.tabButtonsView}>
                <Button
                    text={buttonLeft.text}
                    viewType={TabsButtonName.LEFT === activeTabName ? 'primary' : 'secondary'}
                    buttonStyles={style.tabButtonLeft}
                    onPress={onLeftButtonPress}
                />
                <Button
                    text={buttonRight.text}
                    viewType={TabsButtonName.RIGHT === activeTabName ? 'primary' : 'secondary'}
                    buttonStyles={style.tabButtonRight}
                    onPress={onRightButtonPress}
                />
            </View>
            {activeTabName === TabsButtonName.LEFT && <ComponentLeft />}
            {activeTabName === TabsButtonName.RIGHT && <ComponentRight />}
        </View>
    )
}

export default Tabs;
