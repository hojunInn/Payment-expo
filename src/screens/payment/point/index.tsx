import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TextInput } from 'react-native';
import { Button, Divider, Icon } from 'react-native-elements';
import { Surface } from 'react-native-paper';
import Card from '../../../components/Card';
import { CardType, PointData } from '../../../components/types';
import { numberWithCommas } from '../../../utils/money';

const PayPointHomeScreen = () => {
    const [price, setPrice] = useState(0);
    console.log('🚀 Output --->>> price', price);
    const [showOtherPrice, setShowOtherPrice] = useState(false);
    const renderTags = ({ item, index }: { item: number; index: number }) => {
        return (
            <>
                <Button
                    type="clear"
                    title={`${item}만원`}
                    titleStyle={{ color: 'black', fontSize: 12 }}
                    onPress={() => setPrice(item * 10000)}
                    containerStyle={styles.priceTag}
                />
            </>
        );
    };
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Surface style={styles.container}>
                <View>
                    <Button
                        title="포인트 구매"
                        type="clear"
                        titleStyle={{ color: 'white', fontWeight: '800' }}
                        buttonStyle={{ backgroundColor: '#FB8C00' }}
                        containerStyle={{ width: 200, alignSelf: 'center', marginBottom: 20 }}
                    />
                    <Text style={{ alignSelf: 'center' }}>일정의 금액을 구매하는 결제방식</Text>
                </View>
            </Surface>

            <Surface style={styles.container}>
                <View>
                    <Text style={{ alignSelf: 'center' }}>구매하실 포인트를 선택해주세요</Text>
                    <FlatList
                        data={[10, 20, 30, 50, 100, 300]}
                        renderItem={renderTags}
                        contentContainerStyle={styles.rowContainer}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Button
                            type="clear"
                            title="다른금액"
                            titleStyle={{
                                alignSelf: 'center',
                                textDecorationLine: 'underline',
                                color: showOtherPrice ? '#FB8C00' : '#00000060',
                            }}
                            onPress={() => setShowOtherPrice(!showOtherPrice)}
                        />
                        <Icon name="check-circle" color={showOtherPrice ? '#FB8C00' : '#00000060'} />
                    </View>
                    {showOtherPrice && (
                        <View style={styles.otherPriceContainer}>
                            <Text style={{ alignSelf: 'center', marginBottom: 15 }}>
                                구매하실 포인트를 입력해주세요
                            </Text>
                            <TextInput
                                selectionColor="#000000"
                                placeholder="0"
                                placeholderTextColor="#5B667625"
                                style={[styles.inputFont]}
                                // keyboardType="number-pad"
                                textAlign="center"
                                onFocus={() => setPrice(0)}
                                clearTextOnFocus={true}
                                value={numberWithCommas(price)}
                                maxLength={10}
                                onChangeText={(text) => {
                                    setPrice(Number(text));
                                }}
                            />
                            <Divider style={{ height: 1 }} />
                        </View>
                    )}
                </View>
            </Surface>
            <Button
                title="결제"
                titleStyle={{ color: 'white', fontWeight: '800' }}
                buttonStyle={{ width: 132, backgroundColor: '#FB8C00' }}
            />
        </View>
    );
};

export default PayPointHomeScreen;

const styles = StyleSheet.create({
    container: {
        width: 550,
        paddingHorizontal: 50,
        paddingVertical: 62,
        marginVertical: 20,
    },
    rowContainer: {
        flexDirection: 'row',
        marginVertical: 15,
    },
    priceTag: {
        flexDirection: 'row',
        padding: 5,
        marginHorizontal: 5,
        borderRadius: 20,
        borderColor: '#00000030',
        borderWidth: 0.5,
    },
    otherPriceContainer: {
        width: 190,
        height: 90,
        borderBottomColor: '#00000030',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    inputFont: {
        fontWeight: '400',
        lineHeight: 36,
        letterSpacing: -0.3,
        fontSize: 34,
        color: '#FB8C00',
        textAlign: 'center',
        marginBottom: 10,
    },
});
