import { CONSTANTS } from "./constants";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getAuthToken = async (): Promise<string | undefined> => {
    return (await AsyncStorage.getItem(CONSTANTS.AUTH_TOKEN)) || undefined;
};

export const saveAuthToken = async (token: string): Promise<void> => {
    await AsyncStorage.setItem(CONSTANTS.AUTH_TOKEN, token);
};

export const resetAuthToken = async (): Promise<void> => {
    await AsyncStorage.removeItem(CONSTANTS.AUTH_TOKEN);
};
