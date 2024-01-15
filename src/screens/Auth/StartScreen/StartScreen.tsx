// External deps
import React, { FC, useState } from "react";
import {
    SafeAreaView,
    Text,
    View,
} from "react-native";
import { useFocusEffect } from '@react-navigation/native';

// Internal deps
import useTheme from "../../../hooks/useTheme";
import Button from "../../../components/ui/Button/Button";
import Logo from "../../../components/common/Logo/Logo";
import Loader from "../../../components/ui/Loader/Loader";
import profileStore from "../../../store/Profile";
import { getAuthToken } from "../../../utils/storage";

// Local deps
import styles from "./styles";

const StartScreen: FC = ({navigation}) => {
    const { list, gap, colors } = useTheme();
    const style = styles(colors.white, colors.gray500, gap);
    const [ isLoading, setIsLoading ] = useState<boolean>(true);

    useFocusEffect(() => {
        (async () => {
            const token = await getAuthToken();
            if (token) {
                profileStore.setAuthToken(token);
                navigation.navigate('MainTabs');
                return;
            }
           setIsLoading(false);
        })()
    })

    if (isLoading) {
        return <Loader />
    }

    return (
        <SafeAreaView style={[list, style.container]}>
            <View style={style.appInfo}>
                <View style={style.appLogo}>
                    <Logo />
                </View>
                <View style={style.appText}>
                    <Text style={style.textPrimary}>Welcome</Text>
                    <Text style={style.textSecondary}>Getting started with an account</Text>
                </View>
            </View>
            <View>
                <Button
                    viewType="primary"
                    text="Join the conference"
                    buttonStyles={style.button}
                    onPress={() => {}}
                />
                <Button
                    viewType="secondary"
                    text="Sign up"
                    buttonStyles={style.button}
                    onPress={() => {}}
                />
                <Button
                    viewType="secondary"
                    text="Sign in"
                    buttonStyles={style.button}
                    onPress={() => navigation.navigate('Sign in')}
                />
            </View>
        </SafeAreaView>
    )
}

export default StartScreen;
