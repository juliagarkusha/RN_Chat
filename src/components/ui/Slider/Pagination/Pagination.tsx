import React, { FC } from 'react';
import {View, StyleSheet, ScrollView} from "react-native";
import useTheme from "../../../../hooks/useTheme";

type PaginationPropsType = {
    length,
    activeIndex,
}

const Pagination: FC<PaginationPropsType> = (props) => {
    const { colors } = useTheme();
    const Styles = StyleSheet.create({
        container: {
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            height: 50,
        },
        dot: {
            width: 10,
            height: 10,
            marginHorizontal: 5,
            borderRadius: 10,
        },
        passive: {
            backgroundColor: colors.gray500,
        },
        active: {
            backgroundColor: colors.blue200,
        }
    });

    const { length, activeIndex } = props;
    return (
        <ScrollView contentContainerStyle={Styles.container}>
            {[...Array(length).keys()].map((_,index) => (
                <View key={index} style={[Styles.dot, activeIndex === index ? Styles.active : Styles.passive]} />
            ))}
        </ScrollView>
    )
}

export default Pagination;
