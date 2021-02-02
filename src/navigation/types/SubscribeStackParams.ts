import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export type SubscribeStackParams = {
    SubscribePlanHome: undefined;
    PaySubscribe: undefined;
};

export type SubscribeNavProps<T extends keyof SubscribeStackParams> = {
    navigation: StackNavigationProp<SubscribeStackParams, T>;
    route: RouteProp<SubscribeStackParams, T>;
};
