import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import Card from '../../../components/Card';
import { CardType, ListProps } from '../../../components/types';

const SubscribePlanHome = () => {
    const returnDate = (date: Date) => {
        let dateString = '';
        const year = String(date.getFullYear());
        const month = String(date.getMonth());
        const day = String(date.getDate());

        dateString = year + '년 ' + month + '월 ' + day + '일';

        return dateString;
    };

    const renderLog = ({ item, index }: { item: ListProps; index: number }) => {
        return (
            <View style={styles.rowContainer}>
                <Text style={{ textAlign: 'left' }}>{returnDate(item.date)}</Text>
                <Text style={{ textAlign: 'left' }}>{item.description}</Text>
                <Text style={{ textAlign: 'right' }}>{item.price}</Text>
            </View>
        );
    };

    return (
        <>
            <Card type={CardType.PLAN} />
            <View></View>
            <FlatList
                data={dummy}
                renderItem={renderLog}
                contentContainerStyle={{ width: 779, borderColor: '#00000030', borderWidth: 0.5 }}
                ListHeaderComponent={
                    <>
                        <View style={[styles.rowContainer, { backgroundColor: '#5B6676' }]}>
                            <Text style={{ color: 'white', textAlign: 'left' }}>
                                {returnDate(new Date(2020, 1, 3))} ~ {returnDate(new Date(2121, 2, 5))}
                            </Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Button
                                    containerStyle={styles.Tag}
                                    title="저장"
                                    type="clear"
                                    titleStyle={{ color: 'white', fontSize: 14 }}
                                />
                                <Button
                                    containerStyle={styles.Tag}
                                    title="프린트"
                                    type="clear"
                                    titleStyle={{ color: 'white', fontSize: 14 }}
                                />
                            </View>
                        </View>
                        <View style={styles.row2}>
                            <Text style={{ textAlign: 'right' }}>미결제 잔액 : 37,284원</Text>
                        </View>
                        <View style={styles.rowContainer}>
                            <Text style={styles.TagFont}>날짜</Text>
                            <Text style={styles.TagFont}>설명</Text>
                            <Text style={styles.TagFont}>금액</Text>
                        </View>
                    </>
                }
            />
        </>
    );
};

export default SubscribePlanHome;

const dummy: ListProps[] = [
    {
        date: new Date(2020, 1, 31),
        description: '자동결제',
        price: 50000,
    },
    {
        date: new Date(1990, 12, 31),
        description: '수동결제 Vis** **** ****',
        price: 150000,
    },
    {
        date: new Date(2002, 6, 29),
        description: '정기결제 CustomerID: HJ',
        price: 23300,
    },
    {
        date: new Date(2030, 11, 21),
        description: '수동결제 Vis** **** ****',
        price: 3000,
    },
    {
        date: new Date(2021, 2, 28),
        description: '수동결제 Vis** **** ****',
        price: 15500,
    },
];

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 46,
        borderBottomColor: '#00000030',
        borderBottomWidth: 0.5,
        padding: 5,
    },
    row2: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 46,
        borderBottomColor: '#00000030',
        borderBottomWidth: 0.5,
        padding: 5,
    },
    Tag: {
        marginHorizontal: 5,
        borderRadius: 20,
        borderColor: 'white',
        borderWidth: 0.1,
        height: 25,
        justifyContent: 'center',
    },
    TagFont: {
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 24,
        color: '#979797',
        textAlign: 'left',
    },
});
