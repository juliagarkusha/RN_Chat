// External deps
import React, { useState } from "react";
import {SafeAreaView, Text, TextInput, View} from "react-native";
import { observer } from "mobx-react";

// Internal deps
import Button from "../../../components/ui/Button/Button";
import useTheme from "../../../hooks/useTheme";
import EyeOffIcon from "../../../assets/icons/EyeOffIcon";
import EyeOutlineIcon from "../../../assets/icons/EyeOutlineIcon";
import Alert from "../../../components/ui/Alert/Alert";
import profileStore from "../../../store/Profile";
import { saveAuthToken } from "../../../utils/storage";

// Local deps
import styles from "./styles";

const SignIn = ({navigation}) => {
    const [ userEmail, setUserEmail ] = useState<string>('');
    const [ userPassword, setUserPassword ] = useState<string>('');
    const [ isPasswordVisible, setIsPasswordVisible ] = useState<boolean>(true);
    const [ isShowEmailError, setIsShowEmailError ] = useState<boolean>(false);
    const [ isShowPasswordError, setIsShowPasswordError ] = useState<boolean>(false);
    const { list, gap, colors } = useTheme();
    const style = styles(gap, colors.blue600, colors.gray600, colors.white, colors.red500, isShowEmailError, isShowPasswordError);

    const validateForm = (): boolean => {
        setIsShowEmailError(!userEmail.length);
        setIsShowPasswordError(!userPassword.length);

        return !isShowEmailError && !isShowPasswordError;
    };

    const onChangeEmail = (text: string): void => {
        profileStore.resetAuthError();
        setUserEmail(text);
        setIsShowEmailError(!text.length);
    };

    const onChangePassword = (text: string): void => {
        profileStore.resetAuthError();
        setUserPassword(text);
        setIsShowPasswordError(!text.length);
    };

    const onLogIn = async (): Promise<void> => {
        if(!validateForm()) {
            return;
        }

        profileStore.logIn({email: userEmail, password: userPassword});

        if (!!profileStore.authToken) {
            await saveAuthToken(profileStore.authToken);
            navigation.navigate('MainTabs');
        }
    }

    return (
        <SafeAreaView style={[list, style.signIn]}>
            <View style={style.form}>
                <View style={style.emilField}>
                    <Text style={style.label}>E-mail</Text>
                    <TextInput
                        style={[style.input, style.emailInput]}
                        placeholder="Enter your e-mail"
                        onChangeText={onChangeEmail}
                        value={userEmail}
                        placeholderTextColor={colors.gray600}
                        autoCapitalize="none"
                    />
                    {isShowEmailError && <Text style={style.inputError}>Email is required</Text>}
                </View>
                <View style={style.passwordField}>
                    <Text style={style.label}>Password</Text>
                    <TextInput
                        style={[style.input, style.passwordInput]}
                        placeholder="Enter your password"
                        onChangeText={onChangePassword}
                        value={userPassword}
                        placeholderTextColor={colors.gray600}
                        secureTextEntry={isPasswordVisible}
                    />
                    <Button
                        viewType="icon"
                        icon={isPasswordVisible ? EyeOffIcon : EyeOutlineIcon}
                        onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                        buttonStyles={style.passwordIcon}
                    />
                    {isShowPasswordError && <Text style={style.inputError}>Password is required</Text>}
                </View>
                <Button
                    text="Sign in"
                    buttonStyles={style.button}
                    onPress={onLogIn}
                    isDisabled={isShowEmailError || isShowPasswordError}
                />
                {!!profileStore.authError && <Alert text={profileStore.authError} />}
            </View>
        </SafeAreaView>
    )
}

export default observer(SignIn);
