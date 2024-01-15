// External deps
import React from "react";
import { SafeAreaView, FlatList } from "react-native";
import { observer } from "mobx-react";
import { useFocusEffect } from "@react-navigation/native";

// Internal deps
import NavButton from "../../../../components/ui/NavButton/NavButton";
import useTheme from "../../../../hooks/useTheme";
import Button from "../../../../components/ui/Button/Button";
import profileStore from "../../../../store/Profile";
import { resetAuthToken } from "../../../../utils/storage";

// Local deps
import styles from "./styles";

const ProfileScreen = ({navigation}) => {
    const { list, gap } = useTheme();
    const style = styles(gap);

    const profileSettings = [
        {
            label: 'Account',
            value: profileStore.email,
            onPress: () => {navigation.navigate('Account')},
        },
        {
            label: 'Displayed name',
            value: profileStore.nickName,
            onPress: () => {navigation.navigate('Change Name')},
        },
        {
            label: 'Status',
            value: profileStore.status,
            onPress: () => {navigation.navigate('Status')},
        },
    ]

    const onLogOut = async () => {
        await resetAuthToken();
        profileStore.logOut();
        navigation.navigate('AuthStack');
    }

    useFocusEffect(() => {
        profileStore.getUser();
    });

    return (
        <SafeAreaView style={list}>
            <FlatList
                data={profileSettings}
                renderItem={({item}) => {
                    return (
                        <NavButton
                            label={item.label}
                            value={item.value}
                            onPress={item.onPress}
                        />
                    )
                }}
            />
            <Button
                viewType='error'
                text="Log out"
                buttonStyles={style.button}
                onPress={onLogOut}
            />
        </SafeAreaView>
    )
}

export default observer(ProfileScreen);
