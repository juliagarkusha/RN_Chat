// External deps
import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Internal deps
import SettingsScreen from "../../../../screens/SettingsScreen";

const SettingsStack: FC = () => {
    const SettingsStack = createNativeStackNavigator();

    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen
                name="Settings screen"
                component={SettingsScreen}
            />
        </SettingsStack.Navigator>
    )
}

export default SettingsStack;
