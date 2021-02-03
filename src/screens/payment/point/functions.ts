import { merchant } from '../../../merchant';

export const returnMerchantUid = (price: number) => {
    let foundMerchant = merchant.other;
    switch (price) {
        case 100000:
            foundMerchant = merchant.point_100000;
            break;
        case 200000:
            foundMerchant = merchant.point_200000;
            break;
        case 300000:
            foundMerchant = merchant.point_300000;
            break;
        case 500000:
            foundMerchant = merchant.point_500000;
            break;
        case 1000000:
            foundMerchant = merchant.point_1000000;
            break;
        case 3000000:
            foundMerchant = merchant.point_3000000;
            break;
        default:
            break;
    }

    return foundMerchant;
};
