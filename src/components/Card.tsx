import React from 'react'
import { StyleSheet, Text, View, ViewProps } from 'react-native'
import PaySubscribe from '../screens/payment/subscribe/PaySubscribe'
import SelectButton from './SelectButton'
import SelectPoints from './SelectPoints'
import SubscribePlan from './SubscribePlan'
import { CardType, PaymentCardProps } from './types'


const Card: React.FC<PaymentCardProps> = (props) => {
    const {type, data} = props
     const renderButton = () => {
        switch (type) {
            case CardType.TYPE:
                return SelectButton(props)
            case CardType.AMOUNT:
                return SelectPoints(props)
            case CardType.PLAN:
                return SubscribePlan(props)
            case CardType.CHARGE:
                return PaySubscribe(props)
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
