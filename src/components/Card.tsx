import React from 'react'
import { StyleSheet, Text, View, ViewProps } from 'react-native'
import SelectButton from './SelectButton'
import SelectPoints from './SelectPoints'
import SubscribePlan from './SubscribePlan'
import { CardType } from './types'

interface PaymentCardProps{
    type:CardType
}

const Card = (props: PaymentCardProps) => {
    const {type} = props
     const renderButton = () => {
        switch (type) {
            case CardType.TYPE:
                return SelectButton()
            case CardType.AMOUNT:
                return SelectPoints()
            case CardType.PLAN:
                return SubscribePlan()
                break;
            case CardType.CHARGE:
                break
            default:
                break;
        }
    }
    return (
        <View style={[styles.card]}>
            {renderButton()}
        </View>
    )
}


export default Card

const styles = StyleSheet.create({
    card:{
        shadowColor:"#000",
        shadowRadius:4,
        shadowOpacity:0.3,
        textShadowOffset:{ width:2, height:4},
        backgroundColor: "white",
        elevation: 8,
        marginVertical: 25,
        padding: 5,
        justifyContent: 'center',
        alignItems:'center'
    }
})
