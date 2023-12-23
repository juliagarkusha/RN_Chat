// External deps
import React, {FC} from "react";
import { StyleSheet, Text } from "react-native";
import dayjs from "dayjs";

// Internal deps
import useTheme from "../../../hooks/useTheme";

//Local deps
import styles from "./styles";

type DateProps = {
    date: string,
    viewType: 'sm' | 'md',
}

const Date: FC<DateProps> = (props) => {
    const {
        date,
        viewType,
    } = props;
    const { colors } = useTheme();
    const dateStyles = styles(colors.gray500);

    return (
        <Text style={[dateStyles.date, viewType === 'sm' ? dateStyles.dateSm : dateStyles.dateMd]}>
            {dayjs(date).format('MMM D, YYYY')}
        </Text>
    )
}

export default Date;
