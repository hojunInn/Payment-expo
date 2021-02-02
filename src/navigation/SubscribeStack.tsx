import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PayPointHomeScreen from '../screens/payment/point';

const subscribeStack = createStackNavigator();

export const PaymentStackScreens: React.FC = () => (
    <subscribeStack.Navigator headerMode="none">
        <subscribeStack.Screen name="PayPointHomeScreen" component={PayPointHomeScreen} />
    </subscribeStack.Navigator>
);
