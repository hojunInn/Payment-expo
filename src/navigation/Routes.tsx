import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PaymentStackScreens } from './PaymentStack';
import { SubscribeStackScreens } from './SubscribeStack';

const Routes: React.FC = () => {
    const query = window.location.search.split('=')[1];

    return (
        <NavigationContainer>
            {query === 'pay' ? <PaymentStackScreens /> : <SubscribeStackScreens />}
        </NavigationContainer>
    );
};

export default Routes;
