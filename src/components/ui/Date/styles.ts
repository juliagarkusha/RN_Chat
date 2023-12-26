import {StyleSheet} from "react-native";

const styles = (dateColor) => StyleSheet.create({
    date: {
        color: dateColor,
    },
    dateSm: {
        fontSize: 12,
    },
    dateMd: {
        fontSize: 14,
        lineHeight: 20
    },
});

export default styles;
