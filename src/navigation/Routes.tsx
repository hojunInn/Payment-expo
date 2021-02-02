import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PaymentStackScreens } from './PaymentStack';
import { SubscribeStackScreens } from './SubscribeStack';

const Routes: React.FC = () => {
    return (
        <NavigationContainer>
            {/* <PaymentStackScreens /> */}
            <SubscribeStackScreens />
        </NavigationContainer>
    );
};

export default Routes;
