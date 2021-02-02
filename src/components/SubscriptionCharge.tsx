import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Divider, Input } from 'react-native-elements'
import { PaymentCardProps } from './types'

const SubscriptionCharge = (props: PaymentCardProps) => {
    const {title, type, data} = props
    return (
        <View style={styles.container}>
            <View style={styles.otherPriceContainer}>
                    <Text style={{alignSelf:"center", marginBottom: 30}}>몇명의 인원이 사용하나요?</Text>
                    <TextInput
                        placeholder="10"
                        placeholderTextColor="#5B667625"
                        style={styles.inputFont}
                        keyboardType='number-pad'
                        textAlign='center'
                        maxLength={5}
                    />
                    <Divider style={{height:1, width:189, marginTop:20}}/>
            </View>
        </View>
    )
}

export default SubscriptionCharge

const styles = StyleSheet.create({
    container:{
        width: 550,
        paddingHorizontal: 50,
        paddingVertical: 62,
        alignItems:"center",
    },
    otherPriceContainer:{
        width:190,
        height:90,
        borderBottomColor:"#00000030",
    },
    inputFont:{
        fontWeight:'400',
        lineHeight:36,
        letterSpacing:-0.3,
        fontSize:34,
        color:"#FB8C00",
        textAlign:'center'
    }
})
