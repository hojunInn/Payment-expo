export interface PaymentPostInput {
    pg: string;
    pay_method: string;
    merchant_uid: string;
    name: string;
    amount: string;
    buyer_name?: string;
    buyer_tel?: string;
    buyer_email?: string;
    escrow?: boolean;
    display?: { card_quota: number[] };
    vbank_due?: string;
    biz_num?: string;
    digital?: boolean;
    customer_uid?: string;
}
