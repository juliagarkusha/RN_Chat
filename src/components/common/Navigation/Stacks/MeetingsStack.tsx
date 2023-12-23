// External deps
import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Internal deps
import MeetingsScreen from "../../../../screens/MeetingsScreen";

const MeetingsStack: FC = () => {
    const MeetingsStack = createNativeStackNavigator();

    return (
        <MeetingsStack.Navigator>
            <MeetingsStack.Screen
                name="Meetings Screen"
                component={MeetingsScreen}
            />
        </MeetingsStack.Navigator>
    )
}

export default MeetingsStack;
