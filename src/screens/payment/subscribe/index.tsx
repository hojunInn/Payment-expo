import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { Surface } from 'react-native-paper';
import { ListProps } from '../../../components/types';
import { SubscribeNavProps } from '../../../navigation/types/SubscribeStackParams';
import { returnDate } from '../../../utils/datetime';
interface ContainerInputs {
    title: string;
    description: string;
    buttonTitle?: string;
    buttonPressed?: () => void;
}

const SubscribePlanHome = ({ navigation, route }: SubscribeNavProps<'SubscribePlanHome'>) => {
    const renderLog = ({ item, index }: { item: ListProps; index: number }) => {
        return (
            <View style={styles.rowContainer}>
                <Text style={{ textAlign: 'left', width: 250 }}>{returnDate(item.date)}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
                    <Text style={{ textAlign: 'left' }}>{item.description}</Text>
                    <Text style={{ textAlign: 'right' }}>{item.price}</Text>
                </View>
            </View>
        );
    };

    const container = (input: ContainerInputs) => {
        return (
            <View style={{ marginHorizontal: 15, marginVertical: 10 }}>
                <Text style={styles.titleFont}>{input.title}</Text>
                <View style={styles.smallContainer}>
                    <Text>{input.description}</Text>
                    {input.buttonTitle && (
                        <Button
                            buttonStyle={styles.ButtonTag}
                            type="clear"
                            title={input.buttonTitle}
                            onPress={input.buttonPressed}
                            titleStyle={styles.buttonFont}
                        />
                    )}
                </View>
            </View>
        );
    };

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Surface style={styles.container}>
                    {container({
                        title: '사용중인 요금제',
                        description: '프리미엄 요금제',
                        buttonTitle: '구독취소',
                        buttonPressed: () => {},
                    })}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        {container({ title: '상태', description: '활성' })}
                        {container({
                            title: '라이선스',
                            description: '17개',
                            buttonTitle: '변경',
                            buttonPressed: () => {
                                navigation.navigate('PaySubscribe');
                            },
                        })}
                        {container({ title: '결제방법', description: '자동결제' })}
                        {container({ title: '예상 월간 청구액', description: '102,000원' })}
                    </View>
                </Surface>

                <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-between', marginBottom: 30 }}>
                    <Text style={{ fontWeight: '500', fontSize: 24, lineHeight: 24 }}>거래 내역</Text>
                    <Button
                        style={[styles.Tag, { borderWidth: 0, backgroundColor: '#5B667610' }]}
                        icon={<Icon name="tune" color="#00000060" />}
                        title="필터"
                        type="clear"
                        titleStyle={{
                            fontWeight: '700',
                            fontSize: 14,
                            lineHeight: 16,
                            letterSpacing: 0.5,
                            color: '#00000060',
                        }}
                    />
                </View>

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
                                        onPress={() => {}}
                                        title="저장"
                                        type="clear"
                                        titleStyle={{ color: 'white', fontSize: 14 }}
                                    />
                                    <Button
                                        containerStyle={styles.Tag}
                                        onPress={() => {}}
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
                                <Text style={{ textAlign: 'left', width: 250 }}>날짜</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
                                    <Text style={{ textAlign: 'left' }}>설명</Text>
                                    <Text style={{ textAlign: 'right' }}>금액</Text>
                                </View>
                            </View>
                        </>
                    }
                />
            </ScrollView>
        </View>
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
    smallContainer: {
        flexDirection: 'row',
        alignItems: 'center',
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
    container: {
        width: 550,
        paddingHorizontal: 50,
        paddingVertical: 30,
        marginVertical: 30,
        alignSelf: 'center',
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
    ButtonTag: {
        marginHorizontal: 5,
        borderRadius: 20,
        borderColor: '#979797',
        height: 25,
        borderWidth: 0.1,
    },
    titleFont: {
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 24,
        color: '#979797',
        textAlign: 'left',
    },
    buttonFont: {
        fontSize: 12,
        color: 'black',
    },
});
