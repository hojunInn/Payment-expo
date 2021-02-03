import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PaySubscribe from '../screens/payment/subscribe/PaySubscribe';
import SubscribePlanHome from '../screens/payment/subscribe';

const SubscribeStack = createStackNavigator();

export const SubscribeStackScreens: React.FC = () => (
    <SubscribeStack.Navigator headerMode="none">
        <SubscribeStack.Screen name="PaySubscribe" component={PaySubscribe} />
        <SubscribeStack.Screen name="SubscribePlanHome" component={SubscribePlanHome} />
    </SubscribeStack.Navigator>
);
