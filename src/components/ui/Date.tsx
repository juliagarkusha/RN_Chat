// External deps
import React, { ReactElement } from "react";
import { StyleSheet, Text } from "react-native";
import dayjs from "dayjs";

// Internal deps
import { COLORS } from "../../theme/colors";

type DateProps = {
    date: string,
}

const Date = (DateProps): ReactElement => {
    const {
        date,
    } = DateProps;

    return (
        <Text style={styles.date}>
            {dayjs(date).format('MMM D, YYYY')}
        </Text>
    )
}

const styles = StyleSheet.create({
    date: {
        color: COLORS.gray500,
        fontSize: 12,
    },
});

export default Date;
