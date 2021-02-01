import React,{useState} from 'react'
import { StyleSheet, View ,Text} from 'react-native'
import {Button,Icon} from 'react-native-elements'
import Card from '../../../components/Card'
import { CardType, PointData } from '../../../components/types'

const PayPointHomeScreen = () => {
  const [paymentData, setPaymentData] = useState<PointData>({point:0, type:'String'})
    return (
        <>
          <Card type={CardType.TYPE} data={paymentData}/>
          <Card type={CardType.AMOUNT} data = {paymentData}/>
          <Button title="결제" titleStyle={{color:'white', fontWeight:'800'}} buttonStyle={{width:132,backgroundColor: '#FB8C00',}}/>
        </>
    )
}

export default PayPointHomeScreen

