export interface IIdResponse {
  a_Id: string;
}

export interface IPwdResponse {
  a_Idx: number;
}

export interface INewOrdersRes {
  newOrders: number;
}
export interface ILastSalesRes {
  lastSales: number;
}
export interface IOnProductRes {
  productsCnt: number;
}
export interface IKeywordsRes {
  keywords: string[];
}
interface ISummary {
  adCost: number;
  month: string;
  salesCost: number;
}
export interface IAdSummaryRes {
  data: ISummary[];
}
export interface IBizMoneyRes {
  a_Charge: number;
}
