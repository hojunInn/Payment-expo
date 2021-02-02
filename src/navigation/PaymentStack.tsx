import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PayPointHomeScreen from '../screens/payment/point';

const paymentStack = createStackNavigator();

export const PaymentStackScreens: React.FC = () => (
    <paymentStack.Navigator headerMode="none">
        <paymentStack.Screen name="PayPointHomeScreen" component={PayPointHomeScreen} />
    </paymentStack.Navigator>
);
