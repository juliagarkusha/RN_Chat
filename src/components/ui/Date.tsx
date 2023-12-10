// External deps
import React, {FC} from "react";
import { StyleSheet, Text } from "react-native";
import dayjs from "dayjs";

// Internal deps
import useTheme from "../../hooks/useTheme";

type DateProps = {
    date: string,
}

const Date: FC<DateProps> = (props) => {
    const {
        date,
    } = props;
    const { colors } = useTheme();
    const styles = StyleSheet.create({
        date: {
            color: colors.gray500,
            fontSize: 12,
        },
    });

    return (
        <Text style={styles.date}>
            {dayjs(date).format('MMM D, YYYY')}
        </Text>
    )
}

export default Date;
