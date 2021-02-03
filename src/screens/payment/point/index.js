import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, TextInput } from 'react-native';
import { Button, Divider, Icon } from 'react-native-elements';
import { Surface } from 'react-native-paper';
import { useCheckValidationMutation } from '../../../graphql/generated';
import { PaymentPostInput } from '../../../types';
import { numberWithCommas } from '../../../utils/money';
import { returnMerchantUid } from './functions';
import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

var IMP = window.IMP;
IMP.init('imp10942072');

const PayPointHomeScreen = () => {
    const [price, setPrice] = useState(0);
    const [showOtherPrice, setShowOtherPrice] = useState(false);
    const [checkValidation] = useCheckValidationMutation();

    const paymentInput = {
        pg: 'html5_inicis',
        pay_method: 'card',
        merchant_uid: 'hjinn' + `${new Date()}`, // 상품 고유번호 - userId+timestamp
        name: returnMerchantUid(price), //상품 이름
        amount: String(price),
        buyer_email: 'TestEmail@gmail.com',
        buyer_name: 'TEST_USER_NAME',
        buyer_tel: '010-4242-4242',
        buyer_addr: '서울특별시 강남구 어딘가',
    };

    const validationCheck = (imp_uid, merchant_uid) => {
        checkValidation({
            variables: {
                input: {
                    imp_uid: imp_uid,
                    merchant_uid: merchant_uid,
                },
            },
        }).then((result) => console.log(result));
    };
    const callPaymentModule = () => {
        IMP.request_pay(paymentInput, function (rsp) {
            console.log(rsp);

            validationCheck(rsp.imp_uid, rsp.merchant_uid);
        });
    };

    const renderTags = ({ item, index }) => {
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
                        horizontal={true}
                        style={{ marginVertical: 15, alignSelf: 'center' }}
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
                                style={[styles.inputFont, { color: price === 0 ? '#00000030' : '#FB8C00' }]}
                                textAlign="center"
                                onFocus={() => setPrice(0)}
                                clearTextOnFocus={true}
                                value={numberWithCommas(price)}
                                maxLength={10}
                                onChangeText={(text) => {
                                    setPrice(Number(text.replaceAll(/,/gi, '')));
                                }}
                            />
                            <Divider style={{ height: 1 }} />
                        </View>
                    )}
                </View>
            </Surface>
            <Button
                title="결제"
                disabled={price <= 0}
                titleStyle={{ color: 'white', fontWeight: '800' }}
                buttonStyle={{ width: 132, backgroundColor: '#FB8C00' }}
                onPress={() => callPaymentModule()}
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
        marginHorizontal: 5,
        borderRadius: 20,
        borderColor: '#00000010',
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
        textAlign: 'center',
        marginBottom: 10,
    },
});
