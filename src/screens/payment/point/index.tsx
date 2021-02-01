import React from 'react'
import { StyleSheet, View ,Text} from 'react-native'
import {Button,Icon} from 'react-native-elements'
import Card from '../../../components/Card'
import { CardType } from '../../../components/types'

const PayPointHomeScreen = () => {
    return (
        <>
          <Card type={CardType.TYPE}/>
          <Card type={CardType.AMOUNT}/>
          <Button title="결제" titleStyle={{color:'white', fontWeight:'800'}} buttonStyle={{width:132,backgroundColor: '#FB8C00',}}/>
        </>
    )
}

export default PayPointHomeScreen

