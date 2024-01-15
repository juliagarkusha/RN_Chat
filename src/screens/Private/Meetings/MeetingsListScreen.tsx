// External deps
import React, { FC } from "react";
import { SafeAreaView } from "react-native";

// Internal deps
import MeetingsSlider from "../../../components/common/Meeting/MeetingsSlider";

// Local deps
import styles from "./styles";

const MeetingsListScreen: FC = () => {

    return (
        <SafeAreaView style={styles.container}>
            <MeetingsSlider />
        </SafeAreaView>
    )
}

export default MeetingsListScreen;
