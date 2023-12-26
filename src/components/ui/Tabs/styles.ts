import {
    StyleSheet,
    Dimensions,
} from "react-native";

const styles = (gap) => StyleSheet.create({
    tabButtonsView: {
        margin: gap,
        flexDirection: "row",
    },
    tabButton: {

    },
    tabButtonLeft: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        width: (Dimensions.get('window').width - gap*2)/2,
    },
    tabButtonRight: {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        width: (Dimensions.get('window').width - gap*2)/2,
    },
});

export default styles;
