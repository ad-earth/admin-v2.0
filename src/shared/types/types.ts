export interface IIdResponse {
  a_Id: string;
}

export interface IPwdResponse {
  a_Idx: number;
}

export type TOptionList = {
  color: string | null;
  colorCode: string | null;
  option: string | null;
  optionPrice: number | null;
  optionCnt: number | null;
};
export interface IProdResponse {
  p_Category: string;
  p_Thumbnail: string[];
  p_Name: string;
  p_Cost: number;
  p_Sale: boolean;
  p_Discount: number;
  p_Option: TOptionList[];
  p_Desc: string;
  p_Content: string;
}

export type TError = { errorMessage: string };

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

