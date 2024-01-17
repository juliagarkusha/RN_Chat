// External deps
import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { observer } from "mobx-react";

// Internal deps
import SignIn from "../../../screens/Auth/SignIn/SignIn";
import StartScreen from "../../../screens/Auth/StartScreen/StartScreen";
import Button from "../../../components/ui/Button/Button";
import GoBackIcon from "../../../assets/icons/GoBackIcon";

const AuthStack: FC = () => {
    const AuthStack = createNativeStackNavigator();

    return (
        <AuthStack.Navigator >
            <AuthStack.Screen
                name="Start Screen"
                component={StartScreen}
                options={{
                    headerShown: false,
                }}
            />
            <AuthStack.Screen
                name="Sign in"
                component={SignIn}
                options={({ navigation, route }) => ({
                    headerLeft: () => <Button viewType="icon" icon={<GoBackIcon />} onPress={() => navigation.goBack()} />,
                })}
            />
        </AuthStack.Navigator>
    )
}

export default AuthStack;
