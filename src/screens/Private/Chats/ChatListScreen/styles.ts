import {
    StyleSheet,
    Dimensions,
} from "react-native";

const style = (gap, blue) => StyleSheet.create({
    list: {
        paddingVertical: 16,
        flex: 1,
        backgroundColor: blue,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    modalButton: {
        height: 60,
        width: (Dimensions.get('window').width - gap*2),
        fontSize: 24,
    }
});

export default style;
