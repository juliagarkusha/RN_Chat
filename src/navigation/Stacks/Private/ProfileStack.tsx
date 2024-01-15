// External deps
import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Internal deps
import ProfileScreen from "../../../screens/Private/Profile/ProfileScreen/ProfileScreen";
import AccountScreen from "../../../screens/Private/Profile/AccountScreen/AccountScreen";
import ChangeNameScreen from "../../../screens/Private/Profile/ChangeNameScreen/ChangeNameScreen";
import StatusScreen from "../../../screens/Private/Profile/StatusScreen/StatusScreen";
import GoBackIcon from "../../../assets/icons/GoBackIcon";
import Button from "../../../components/ui/Button/Button";
import SignIn from "../../../screens/Auth/SignIn/SignIn";

const ProfileStack: FC = () => {
    const ProfileStack = createNativeStackNavigator();

    return (
        <ProfileStack.Navigator initialRouteName='My Profile'>
            <ProfileStack.Screen
                name="My Profile"
                component={ProfileScreen}
            />
            <ProfileStack.Screen
                name="Account"
                component={AccountScreen}
                options={({navigation}) => ({
                    headerLeft: () => <Button viewType="icon" icon={<GoBackIcon />} onPress={() => navigation.goBack()}/>,
                })}
            />
            <ProfileStack.Screen
                name="Change Name"
                component={ChangeNameScreen}
                options={({navigation}) => ({
                    headerLeft: () => <Button viewType="icon" icon={<GoBackIcon />} onPress={() => navigation.goBack()}/>,
                })}
            />
            <ProfileStack.Screen
                name="Status"
                component={StatusScreen}
                options={({navigation}) => ({
                    headerLeft: () => <Button viewType="icon" icon={<GoBackIcon />} onPress={() => navigation.goBack()}/>,
                })}
            />
        </ProfileStack.Navigator>
    )
}

export default ProfileStack;
