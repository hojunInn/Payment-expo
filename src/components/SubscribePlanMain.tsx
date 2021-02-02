import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { PaymentCardProps } from './types'

//TODO: SubscribeType과 이에따른 렌더링 차이를 정의해야 함 - buttontilte, buttonPressed, description
interface ContainerInputs{
    title: string, 
    description: string, 
    buttonTitle?:string, 
    buttonPressed?: () => void
}

const SubscribePlanMain = (props:PaymentCardProps) => {

    const container = (input: ContainerInputs) => {
      return(
          <View style={{marginHorizontal:15, marginVertical: 10}}>
            <Text style={styles.titleFont}>{input.title}</Text>
            <View style={styles.rowContainer}>
                <Text style={{}}>{input.description}</Text>
                {input.buttonTitle&&<Button buttonStyle={styles.Tag} type="clear" title={input.buttonTitle} onPress={input.buttonPressed} titleStyle={styles.buttonFont}/>}
            </View>
          </View>
      )
    }
    

    return (
        <View style={styles.container}>
            {container({title:"사용중인 요금제", description:"프리미엄 요금제", buttonTitle:"구독취소", buttonPressed:()=>{}})}
            <View style={{flexDirection:'row', justifyContent: 'space-between',}}>
                {container({title:"상태", description:"활성"})}
                {container({title:"라이선스", description:"17개", buttonTitle:"변경", buttonPressed: () => {}})}
                {container({title:"결제방법", description:"자동결제"})}
                {container({title:"예상 월간 청구액", description:"102,000원"})}

            </View>
        </View>
    )
}

export default SubscribePlanMain

const styles = StyleSheet.create({
    container:{
        width: 550,
        paddingHorizontal: 50,
        paddingVertical: 30
    },
    titleFont:{
        fontWeight:'700',
        fontSize:14,
        lineHeight:24,
        color:"#979797",
        textAlign:'left'
    },
    rowContainer:{
        flexDirection:'row',
        alignItems:"center"
    },
    Tag:{
        marginHorizontal:5,
        borderRadius: 20,
        borderColor:"#979797",
        height:25,
        borderWidth:0.1
    },
    buttonFont:{
        fontSize:12,
        color:"black"
    }

})
