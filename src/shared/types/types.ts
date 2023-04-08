export interface IIdResponse {
  a_Id: string;
}

export interface IPwdResponse {
  a_Idx: number;
}

export interface IProductsResponse {
  productList: IProduct[];
}

export interface IProduct {
  p_No: number;
  p_Name: string;
}

export interface IReportResponse {
  cnt: number;
  list: IList[];
}

export interface IList {
  keyword: string;
  k_Click: number;
  k_Cost: number;
  k_Trans: number;
  p_Price: number;
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
