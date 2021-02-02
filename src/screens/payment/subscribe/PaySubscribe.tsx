import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { SubscriptionData } from '../../../components/types';
import { Surface, Switch } from 'react-native-paper';
import { Button, Divider } from 'react-native-elements';
import { SubscribeNavProps } from '../../../navigation/types/SubscribeStackParams';

const PaySubscribe = ({ navigation, route }: SubscribeNavProps<'PaySubscribe'>) => {
    const [subscribeData, setSubscribeData] = useState<SubscriptionData>();
    const [numOfMember, setNumOfMember] = useState(5);
    const [paymentType, setPaymentType] = useState('manual');
    const [toggle, setToggle] = useState(false);
    const [pricePerMember, setPricePerMember] = useState(0);

    useEffect(() => {
        toggle ? setPricePerMember(6000 * 0.9) : setPricePerMember(6000);
    }, [toggle]);

    return (
        <View style={{ marginBottom: 20 }}>
            <Surface style={styles.bigSurface}>
                <View style={styles.otherPriceContainer}>
                    <Text style={{ alignSelf: 'center', marginBottom: 30 }}>몇명의 인원이 사용하나요?</Text>
                    <TextInput
                        selectionColor="#000000"
                        placeholder="10"
                        placeholderTextColor="#5B667625"
                        style={[styles.inputFont]}
                        keyboardType="number-pad"
                        textAlign="center"
                        clearTextOnFocus={true}
                        maxLength={5}
                        onChangeText={(text) => setNumOfMember(Number(text))}
                    />
                    <Divider style={{ height: 1, width: 189, marginTop: 20, alignSelf: 'center' }} />
                </View>
            </Surface>
            <Surface style={styles.bigSurface}>
                <View style={styles.otherPriceContainer}>
                    <Text style={{ marginBottom: 30, textAlign: 'center' }}>결제주기를 선택해주세요</Text>
                    <Text style={styles.inputFont}>{pricePerMember}원</Text>
                    <Text style={styles.subtitle}>멤버당 한달요금</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: toggle ? '#ADB2BA' : 'black' }}>매달</Text>
                    <Switch
                        value={toggle}
                        onValueChange={setToggle}
                        color="#FB8C00"
                        trackColor="#FB8C0080"
                        thumbColor="#FB8C00"
                        style={{ marginHorizontal: 10 }}
                    />
                    <Text style={{ color: toggle ? 'black' : '#ADB2BA' }}>매년</Text>
                </View>
            </Surface>

            <Surface style={styles.bigSurface}>
                <View style={styles.otherPriceContainer}>
                    <Text style={{ marginBottom: 30, textAlign: 'center' }}>총 결제하실 금액(부가세 포함)</Text>
                    <Text style={styles.inputFont}>{numOfMember * pricePerMember}원</Text>
                    <Text style={styles.subtitle}>2021년 1월 1일 ~ 2022년 12월 31일</Text>
                </View>
            </Surface>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Surface style={styles.surface}>
                    <Button
                        title="수동결제"
                        type="clear"
                        titleStyle={styles.buttonTitleFont}
                        buttonStyle={{ backgroundColor: paymentType === 'manual' ? '#FB8C00' : '#ADB2BA', width: 130 }}
                        onPress={() => {
                            setPaymentType('manual');
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
                        buttonStyle={{ backgroundColor: paymentType === 'auto' ? '#FB8C00' : '#ADB2BA', width: 130 }}
                        onPress={() => {
                            setPaymentType('auto');
                        }}
                        containerStyle={{ marginBottom: 20 }}
                    />
                    <Text style={{ textAlign: 'center' }}>매월 청구된 금액을 지정된 결제방식으로 자동결제</Text>
                </Surface>
            </View>
        </View>
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
        elevation: 4,
        borderRadius: 8,
        marginVertical: 25,
    },
    bigSurface: {
        padding: 8,
        width: 600,
        height: 226,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
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
        color: '#FB8C00',
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
});
