// External deps
import React, {
    FC,
    useCallback,
    useState,
    useRef,
    useEffect
} from "react";
import {
    FlatList,
    View,
    Text,
    Share,
    TouchableWithoutFeedback,
    NativeScrollEvent,
    NativeSyntheticEvent,
    StyleSheet, Dimensions,
} from "react-native";
import dayjs, { Dayjs } from 'dayjs';

// Internal deps
import Pagination from "../../ui/Slider/Pagination/Pagination";
import Button from "../../ui/Button/Button";
import useTheme from "../../../hooks/useTheme";

export type ItemType = {
    id: number;
    name: string;
    link: string;
    date: Dayjs;
};

const totalList: ItemType[] = [
    { id: 1702818503705, name: 'scheduled meeting 1', date: dayjs().add(1, 'days'), link: 'https://service/autolink.to/1' },
    { id: 2502818503687, name: 'scheduled meeting 2', date: dayjs().add(2, 'days'), link: 'https://service/autolink.to/2' },
    { id: 1802818503702, name: 'scheduled meeting 3', date: dayjs().add(5, 'days'), link: 'https://service/autolink.to/3' },
    { id: 5702818503704, name: 'scheduled meeting 4', date: dayjs().add(4, 'days'), link: 'https://service/autolink.to/4' },
    { id: 8702819503706, name: 'scheduled meeting 5', date: dayjs().add(1, 'days'), link: 'https://service/autolink.to/5' },
    { id: 3702818503705, name: 'scheduled meeting 6', date: dayjs().add(6, 'days'), link: 'https://service/autolink.to/6' },
    { id: 4702818503563, name: 'scheduled meeting 7', date: dayjs().add(8, 'days'), link: 'https://service/autolink.to/7' },
    { id: 1702817503705, name: 'scheduled meeting 8', date: dayjs().add(3, 'days'), link: 'https://service/autolink.to/8' },
    { id: 5702818503708, name: 'scheduled meeting 9', date: dayjs().add(2, 'days'), link: 'https://service/autolink.to/9' },
    { id: 2702818503705, name: 'scheduled meeting 10', date: dayjs().add(4, 'days'), link: 'https://service/autolink.to/10' },
    { id: 1702818503734, name: 'scheduled meeting 11', date: dayjs().add(1, 'days'), link: 'https://service/autolink.to/11' },
    { id: 5702818503701, name: 'scheduled meeting 12', date: dayjs().add(8, 'days'), link: 'https://service/autolink.to/12' },
    { id: 7702818503775, name: 'scheduled meeting 13', date: dayjs().add(9, 'days'), link: 'https://service/autolink.to/13' },
    { id: 6702818503707, name: 'scheduled meeting 14', date: dayjs().add(2, 'days'), link: 'https://service/autolink.to/14' },
    { id: 8702818503798, name: 'scheduled meeting 15', date: dayjs().add(3, 'days'), link: 'https://service/autolink.to/15' },
]

const MeetingsSlider: FC = () => {
    const pageSize = 5
    const pageCount = totalList.length * pageSize;
    const selectedIndexRef = useRef<number>(0);
    const flatListRef = useRef<FlatList>();
    const autoTimerRef = useRef<NodeJS.Timeout>();
    const refreshTimerRef = useRef<NodeJS.Timeout>();
    const pageRef = useRef<number>(1);
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const [items, setItems] = useState<ItemType[]>(totalList.slice(0, pageSize * pageRef.current));
    const { colors, gap, borderRadius } = useTheme();
    const { width } = Dimensions.get('screen');

    const styles = StyleSheet.create({
        slider: { height: 200 },
        slide: {
            width: width - gap*2,
            backgroundColor: colors.blue700,
            marginHorizontal: gap,
            padding: gap,
            borderRadius: borderRadius,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
        },
        textContainer: {
            flexDirection: "row",
            marginBottom: gap/2,
        },
        text: {
            color: colors.white,
        },
        textSecondary: {
            color: colors.gray600,
        }
    })

    const renderItem = ({item}) => {
        return (
            <TouchableWithoutFeedback onPress={async () => {
                try {
                    const result = await Share.share({
                        message: `Link to join meeting "${item.name}" ${item.link}`,
                        title: item.name,
                    });
                    if (result.action === Share.sharedAction) {
                        if (result.activityType) {
                            console.log('debug inProgress: ');
                        } else {
                            console.log('debug done: ');
                        }
                    }
                } catch (e) {
                    console.log(e);
                }


            }}>
                <View style={styles.slide}>
                    <View>
                        <View style={styles.textContainer}>
                            <Text style={styles.textSecondary}>Name: </Text>
                            <Text style={styles.text}>{item.name}</Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.textSecondary}>Date: </Text>
                            <Text style={styles.text}>{item.date.format('DD.MM.YYYY HH:MM')}</Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.textSecondary}>ID: </Text>
                            <Text style={styles.text}>{item.id}</Text>
                        </View>
                    </View>
                    <View>
                        <Button
                            text="Start"
                            onPress={() => {console.log(1111);}}
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    };

    const onScrollHandler = useCallback((event: NativeSyntheticEvent<NativeScrollEvent>): void => {
        const { nativeEvent } = event;
        const currentIndex = Math.round(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        setSelectedIndex(currentIndex);
        autoStep();
    }, []);

    const onEndReachedHandler = (): void => {
        setItems((prevState) => {
            pageRef.current++;
            if ((pageRef.current) === pageCount) {
                pageRef.current--
                return prevState;
            }

            return [
                ...prevState,
                ...totalList.slice(prevState.length, pageSize * pageRef.current),
            ];
        });
    }

    const autoStep = (nextIndex: number = selectedIndexRef.current + 1, delay: number = 5000) => {
        clearTimeout(autoTimerRef.current);
        autoTimerRef.current = setTimeout(() => {
            if (nextIndex < flatListRef.current.props.data.length) {
                flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
            }
        }, delay);
    }

    useEffect(() => {
        autoStep();

        return () => {
            clearTimeout(refreshTimerRef.current);
            clearTimeout(autoTimerRef.current);
        }
    }, []);

    useEffect(() => {
        selectedIndexRef.current = selectedIndex;
    }, [selectedIndex])

    return (
        <View style={styles.slider}>
            <FlatList
                ref={flatListRef}
                data={items}
                renderItem={renderItem}
                horizontal
                pagingEnabled
                keyExtractor={(item) => item.id}
                extraData={selectedIndex}
                ListEmptyComponent={() => (
                    <Text>any item for this search</Text>
                )}
                onScroll={onScrollHandler}
                onEndReached={onEndReachedHandler}

            />
            <Pagination length={items.length} activeIndex={selectedIndex}/>
        </View>
    )
}

export default MeetingsSlider;
