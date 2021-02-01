import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { PaymentCardProps } from './types'

const SelectButton = (props: PaymentCardProps) => {
    return (
        <View style={styles.container}>
            <Button 
            title="포인트 구매" 
            type="clear" 
            titleStyle={{color: "white", fontWeight: '800'}} 
            buttonStyle={{backgroundColor: "#FB8C00"}}
            containerStyle={{width:200, alignSelf:'center', marginBottom: 20}}
            />
            <Text style={{alignSelf:"center"}}>일정의 금액을 구매하는 결제방식</Text>
        </View>
    )
}

export default SelectButton

const styles = StyleSheet.create({
    container:{
        width: 550,
        paddingHorizontal: 50,
        paddingVertical: 62
    }
})
