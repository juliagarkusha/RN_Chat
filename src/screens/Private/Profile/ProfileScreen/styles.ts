import {
    Dimensions,
    StyleSheet
} from "react-native";

const styles = (gap) => StyleSheet.create({
    button: {
        width: Dimensions.get('window').width - gap*2,
        marginLeft: gap,
    },
});

export default styles;
