import { FC, useRef, useState, useEffect } from "react";
import { AppState, AppStateStatus } from "react-native";

const useAppState: FC = () => {
    const appState = useRef(AppState.currentState);
    const [ appStateCurrent, setAppStateCurrent ] = useState<AppStateStatus>(appState.current);

    const onAppStateCurrent = (nextAppState): void => {
        appState.current = nextAppState;
        setAppStateCurrent(appState.current);
    }

    useEffect((): () => void => {
        const subscription = AppState.addEventListener('change', (nextAppState) => {
            onAppStateCurrent(nextAppState);
        });

        return (): void => {
            subscription.remove();
        };
    }, []);

    return appStateCurrent;
}

export default useAppState;
