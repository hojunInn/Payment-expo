import React, {useState} from 'react'
import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native'
import {Button, Icon, Input} from 'react-native-elements'

const SelectPoints = (props: PaymentCardProps) => {
    const [price, setPrice] = useState(0)
    const [showOtherPrice, setShowOtherPrice] = useState(false)
    
    const renderTags = ({item, index}: {item: number, index: number}) => {
        return <>
            <Button 
                type="clear" 
                title={`${item}만원`} 
                titleStyle={{color:'black',fontSize: 12}} 
                onPress={() => setPrice(item)} 
                containerStyle={styles.priceTag} />
            </>
        
    }

    return (
        <View style={styles.container}>
            <Text style={{alignSelf:"center"}}>구매하실 포인트를 선택해주세요</Text>
            <FlatList
                data={[10,20,30,50,100,300]}
                renderItem={renderTags}
                contentContainerStyle={styles.rowContainer}
            />
            <View style={{flexDirection:'row', justifyContent: 'center', alignItems:'center'}}>

            <Button 
                type='clear' 
                title="다른금액" 
                titleStyle={{alignSelf:"center" ,textDecorationLine:'underline', color: showOtherPrice ? "#FB8C00"
                :"#00000060" }}
                onPress={()=>setShowOtherPrice(!showOtherPrice)}
                />
            <Icon name="check-circle" color={showOtherPrice ? "#FB8C00":"#00000060" }/>
                </View>
            {
                showOtherPrice&&
                <View style={styles.otherPriceContainer}>
                    <Text style={{alignSelf:"center"}}>구매하실 포인트를 입력해주세요</Text>
                    <Input
                        placeholder="10"
                        style={{alignSelf:'center'}}
                        keyboardType='number-pad'
                    />
                </View>
            }
        </View>
    )
}

export default SelectPoints

const styles = StyleSheet.create({
    container:{
        width: 550,
        paddingHorizontal: 50,
        paddingVertical: 62
    },
    rowContainer:{
        flexDirection:'row',
        marginVertical: 15
    },
    priceTag:{
        flexDirection:'row',
        padding: 5,
        marginHorizontal:5,
        borderRadius: 20,
        borderColor:"#00000030",
        borderWidth:0.5
    },
    otherPriceContainer:{
        width:190,
        height:90,
        borderBottomColor:"#00000030",
        justifyContent: 'center',
        alignItems:'center',
        alignSelf:'center'
    }
})
