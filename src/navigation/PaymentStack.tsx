import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PayPointHomeScreen from '../screens/payment/point';
import SubscribePlanHome from '../screens/payment/subscribe';
import PaySubscribe from '../screens/payment/subscribe/PaySubscribe';

const paymentStack = createStackNavigator();

export const PaymentStackScreens: React.FC = () => (
    <paymentStack.Navigator headerMode="none">
        <paymentStack.Screen name="SubscribePlanHome" component={SubscribePlanHome} />
        <paymentStack.Screen name="PaySubscribe" component={PaySubscribe} />
    </paymentStack.Navigator>
);
