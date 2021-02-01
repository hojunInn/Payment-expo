
export enum CardType{
    TYPE = "SelectType",
    AMOUNT = "SelectAmount",
    PLAN = "PlanInfo",
    CHARGE = "ChargeInfo",
}

export interface ListProps{
    date:Date
    description: String
    price:Number
}