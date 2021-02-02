import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Divider, Input } from 'react-native-elements'
import { Switch } from 'react-native-paper';

import { PaymentCardProps } from './types'

const SubscriptionChargeRender = (props: PaymentCardProps) => {
    const [toggle, setToggle] = useState(false)
    const {title, subtitle, type, data} = props
    return (
        <View style={styles.container}>
            <View style={styles.otherPriceContainer}>
                    <Text style={{ marginBottom: 30, textAlign:'center'}}>{title}</Text>
                    <Text style={styles.inputFont}>50,000</Text>
                    <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
            {<View style={{flexDirection:'row'}}>
                <Text style={{ color:toggle ? "#ADB2BA" :"black" }}>매달</Text>
                <Switch
                    value={toggle}
                    onValueChange={setToggle}
                    color="#FB8C00"
                    trackColor="#FB8C0080"
                    thumbColor="#FB8C00"
                    style={{marginHorizontal: 10}}
                />
                <Text style={{ color:toggle? "black": "#ADB2BA"}}>매년</Text>
            </View>}
        </View>
    )
}

export default SubscriptionChargeRender

const styles = StyleSheet.create({
    container:{
        width: 550,
        paddingHorizontal: 25,
        paddingVertical: 32,
        alignItems:"center",
    },
    otherPriceContainer:{
        width:300,
        height:130,
        borderBottomColor:"#00000030",
    },
    inputFont:{
        fontWeight:'400',
        lineHeight:36,
        letterSpacing:-0.3,
        fontSize:34,
        color:"#FB8C00",
        textAlign:'center'
    },
    subtitle:{
        fontSize:16,
        color: "#ADB2BA",
        lineHeight:24,
        letterSpacing:0.2,
        alignSelf:'center'
    }
})
