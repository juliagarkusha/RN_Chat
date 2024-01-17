import {
    StyleSheet,
    Dimensions,
} from "react-native";

const styles = (logoTextColor, gap) => StyleSheet.create({
    container: {
        width: (Dimensions.get('window').width - gap*2)/2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        fontSize: 80,
        color: logoTextColor,
    },
});

export default styles;
