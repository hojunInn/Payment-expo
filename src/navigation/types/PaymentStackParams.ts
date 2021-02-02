import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export type PaymentStackParams = {
    PayPointHomeScreen: undefined;
};

export type PaymentNavProps<T extends keyof PaymentStackParams> = {
    navigation: StackNavigationProp<PaymentStackParams, T>;
    route: RouteProp<PaymentStackParams, T>;
};
