import React, { useEffect, useState } from 'react';
import { Platform, ScrollView, StyleSheet, Text, TextInput, useWindowDimensions, View } from 'react-native';
import { SubscriptionData } from '../../../components/types';
import { Surface, Switch } from 'react-native-paper';
import { Button, Divider, Header, Icon } from 'react-native-elements';
import { SubscribeNavProps } from '../../../navigation/types/SubscribeStackParams';
import { returnDate } from '../../../utils/datetime';
import { numberWithCommas } from '../../../utils/money';

import jQuery from 'jquery';
import {
    useCheckValidationMutation,
    useInitPaymentMutation,
    useRoutinePaymentMutation,
} from '../../../graphql/generated';
import { returnMerchantUid } from '../point/functions';
window.$ = window.jQuery = jQuery;

// var IMP = window.IMP;
// IMP.init('imp10942072');

const PaySubscribe = ({ navigation, route }: SubscribeNavProps<'PaySubscribe'>) => {
    const [subscribeData, setSubscribeData] = useState<SubscriptionData>();
    const [numOfMember, setNumOfMember] = useState(0);
    const [toggle, setToggle] = useState(false);
    const [pricePerMember, setPricePerMember] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [startDate, setStartDate] = useState(new Date());
    const [dueDate, setDueDate] = useState(new Date());
    const [showDateInput, setShowDateInput] = useState(false);

    const [routinePay] = useRoutinePaymentMutation();
    const [checkValidation] = useCheckValidationMutation();
    const [initPayment] = useInitPaymentMutation();
    const windowDimensions = useWindowDimensions();

    const paymentInput = {
        pg: 'html5_inicis',
        pay_method: 'card',
        merchant_uid: 'hj' + `${new Date()}`, // 상품 고유번호 - userId+timestamp
        name: 'yearly', //상품 이름
        amount: String(totalPrice),
        buyer_email: 'TestEmail@gmail.com',
        buyer_name: 'hj',
        buyer_tel: '010-4242-4242',
        buyer_addr: '서울특별시 강남구 샘성동',
    };

    const validationCheck = (imp_uid: string, merchant_uid: string) => {
        checkValidation({
            variables: {
                input: {
                    imp_uid: imp_uid,
                    merchant_uid: merchant_uid,
                },
            },
        }).then((result) => console.log(result));
    };
    const callPaymentModule = (type: 'monthly' | 'yearly') => {
        if (type === 'monthly') {
            //Buyer의 UserName을 넣는다.
            setShowDateInput(false)((paymentInput.customer_uid = 'hj')), (paymentInput.name = type);
        }

        initPayment({
            variables: {
                input: {
                    user_name: 'hj',
                },
            },
        });

        if (Platform.OS !== 'web') {
            /* 5. 리액트 네이티브 환경에 대응하기 */
            const params = {
                userCode: 'imp10942072', // 가맹점 식별코드
                data: paymentInput, // 결제 데이터
                type: 'payment', // 결제와 본인인증 구분을 위한 필드
            };
            const paramsToString = JSON.stringify(params);
            window.ReactNativeWebView.postMessage(paramsToString);
        }

        IMP.request_pay(paymentInput, function (rsp) {
            console.log(rsp);
            validationCheck(rsp.imp_uid, rsp.merchant_uid);
        });
    };

    useEffect(() => {
        setStartDate(new Date());
        let newDueDate = startDate;

        if (toggle) {
            setPricePerMember(6000 * 0.9);
            newDueDate.setFullYear(startDate.getFullYear() + 1);
            setDueDate(newDueDate);
        } else {
            setPricePerMember(6000);
            newDueDate.setMonth(startDate.getMonth() + 1);
            setDueDate(newDueDate);
        }
    }, [toggle]);

    const calcTotalPrice = () => {
        let price = numOfMember * pricePerMember;
        //Yearly Plan
        if (toggle) {
            return price * 12;
            //Monthly Plan
        } else {
            return price;
        }
    };
    useEffect(() => {
        setTotalPrice(calcTotalPrice());
    }, [numOfMember, pricePerMember]);

    return (
        <>
            <Header
                containerStyle={{ borderBottomWidth: 1, backgroundColor: '#ffffff' }}
                rightComponent={
                    <Button
                        onPress={() => navigation.goBack()}
                        icon={<Icon size={30} name="close" color="black" />}
                        type="clear"
                    />
                }
                centerComponent={<Text style={{ fontSize: 20, fontWeight: '700', color: 'black' }}>구독</Text>}
            />
            <View
                style={{
                    marginBottom: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                    backgroundColor: '#ffffff',
                    width: windowDimensions.width,
                }}
            >
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{
                        paddingHorizontal: 10,
                        width: windowDimensions.width,
                    }}
                >
                    <Surface style={styles.bigSurface}>
                        <Text style={{ alignSelf: 'center', marginBottom: 30 }}>몇명의 인원이 사용하나요?</Text>
                        <TextInput
                            selectionColor="#000000"
                            placeholder="0"
                            placeholderTextColor="#5B667625"
                            style={[styles.inputFont, { color: numOfMember ? '#2fb5b5' : '#5B667625' }]}
                            keyboardType="number-pad"
                            textAlign="center"
                            clearTextOnFocus={true}
                            onFocus={() => setNumOfMember(0)}
                            value={numberWithCommas(numOfMember)}
                            maxLength={10}
                            onChangeText={(text) => {
                                setNumOfMember(Number(text.replaceAll(/,/gi, '')));
                            }}
                        />
                        <Divider style={{ height: 1, width: 189, marginTop: 20, alignSelf: 'center' }} />
                    </Surface>
                    <Surface style={styles.bigSurface}>
                        <View style={styles.otherPriceContainer}>
                            <Text style={{ marginBottom: 30, textAlign: 'center' }}>결제주기를 선택해주세요</Text>
                            <Text style={styles.inputFont}>{numberWithCommas(pricePerMember)}원</Text>
                            <Text style={styles.subtitle}>멤버당 한달요금</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: toggle ? '#ADB2BA' : 'black' }}>매달</Text>
                            <Switch
                                value={toggle}
                                onValueChange={setToggle}
                                color="#2fb5b5"
                                trackColor="#2fb5b580"
                                thumbColor="#2fb5b5"
                                style={{ marginHorizontal: 10 }}
                            />
                            <Text style={{ color: toggle ? 'black' : '#ADB2BA' }}>매년</Text>
                        </View>
                    </Surface>

                    <Surface style={styles.bigSurface}>
                        <View style={styles.otherPriceContainer}>
                            <Text style={{ marginBottom: 30, textAlign: 'center' }}>총 결제하실 금액(부가세 포함)</Text>
                            <Text style={styles.inputFont}>{numberWithCommas(totalPrice)}원</Text>
                            <Text style={styles.subtitle}>{`${returnDate(startDate)} ~ ${returnDate(dueDate)}`}</Text>
                        </View>
                    </Surface>

                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                        <Surface style={[styles.surface, { marginRight: 20 }]}>
                            <Button
                                title="수동결제"
                                type="clear"
                                titleStyle={styles.buttonTitleFont}
                                buttonStyle={{
                                    backgroundColor: '#ADB2BA',
                                    width: 130,
                                }}
                                onPress={() => {
                                    callPaymentModule('yearly');
                                }}
                                containerStyle={{ marginBottom: 20 }}
                            />
                            <Text>매월 청구된 금액을 수동으로 직접 결제</Text>
                        </Surface>
                        <Surface style={styles.surface}>
                            <Button
                                title="자동결제"
                                type="clear"
                                titleStyle={styles.buttonTitleFont}
                                buttonStyle={{
                                    backgroundColor: '#2fb5b5',
                                    width: 130,
                                }}
                                onPress={() => {
                                    callPaymentModule('monthly');
                                }}
                                containerStyle={{ marginBottom: 20 }}
                            />
                            <Text style={{ textAlign: 'center' }}>매월 청구된 금액을 지정된 결제방식으로 자동결제</Text>
                        </Surface>

                        {showDateInput && (
                            <Surface style={styles.bigSurface}>
                                <View style={styles.otherPriceContainer}>
                                    <Text style={{ marginBottom: 30, textAlign: 'center' }}>{`자동결제일\n${
                                        toggle ? '매년' : '매월'
                                    }`}</Text>
                                    <Text style={styles.inputFont}>1일</Text>
                                    <Text style={styles.subtitle}>{`${returnDate(startDate)} ~ ${returnDate(
                                        dueDate,
                                    )}`}</Text>
                                </View>
                            </Surface>
                        )}
                    </View>
                </ScrollView>
            </View>
        </>
    );
};

export default PaySubscribe;

const styles = StyleSheet.create({
    surface: {
        padding: 8,
        width: 280,
        height: 226,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
        borderRadius: 8,
        marginVertical: 25,
    },
    bigSurface: {
        padding: 8,
        width: 570,
        height: 226,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        // shadowColor: '#000',
        // shadowRadius: 4,
        // shadowOpacity: 0.3,
        // textShadowOffset: { width: 2, height: 4 },
        elevation: 8,
        borderRadius: 8,
        marginVertical: 25,
    },
    otherPriceContainer: {
        width: 300,
        height: 130,
        borderBottomColor: '#00000030',
    },
    inputFont: {
        fontWeight: '400',
        lineHeight: 36,
        letterSpacing: -0.3,
        fontSize: 34,
        color: '#2fb5b5',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#ADB2BA',
        lineHeight: 24,
        letterSpacing: 0.2,
        alignSelf: 'center',
    },
    buttonTitleFont: {
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 16,
        letterSpacing: 0.5,
        color: 'white',
    },
    buttonFont: {
        fontSize: 12,
        color: 'black',
    },
});
