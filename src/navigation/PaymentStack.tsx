import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PayPointHomeScreen from '../screens/payment/point';
import SubscribePlanHome from '../screens/payment/subscribe';
import PaySubscribe from '../screens/payment/subscribe/PaySubscribe';
import { NavigationContainer } from '@react-navigation/native';

const paymentStack = createStackNavigator();

export const PaymentStackScreens: React.FC = () => (
    <paymentStack.Navigator headerMode="none">
        <paymentStack.Screen name="PayPointHomeScreen" component={PayPointHomeScreen} />
    </paymentStack.Navigator>
);
