

export interface PaymentCardProps{
    title?:string
    subtitle?: string
    type:CardType
    data:PointData | SubscriptionData
}

export enum CardType{
    TYPE = "SelectType",
    AMOUNT = "SelectAmount",
    PLAN = "PlanInfo",
    CHARGE = "ChargeInfo",
    CHARGERENDER = "ChargeRendering"
}

export enum SubscribeType{
    Free = "Free Trial",
    Premium = "Premium",
}
export enum PaymentType{
    YEARLY = "Yearly",
    MONTHLY = "Monthly",
}
export interface ListProps{
    date:Date
    description: string
    price:number
}
export interface SubscriptionData{
    numOfUser: number
    paymentType: PaymentType
    startDate: Date
    endDate: Date
}
export interface PointData{
    point: number
    type?: string
}