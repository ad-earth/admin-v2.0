import type { TOptionList } from './../types/types';
import axiosInstance from './instance';

export const login = (id: string, pwd: string) =>
  axiosInstance.post('/admins/login', { a_Id: id, a_Pw: pwd });

export const findId = (brand: string, bNumber: string) =>
  axiosInstance.get(`/admins/find-id?a_Brand=${brand}&a_Number=${bNumber}`);

export const findPwd = (id: string, bNumber: string) =>
  axiosInstance.get(`/admins/find-password?a_Id=${id}&a_Number=${bNumber}`);

export const resetPwd = (confirmId: number, newPassword: string) =>
  axiosInstance.put('/admins/reset-password', {
    a_Idx: confirmId,
    a_Pw: newPassword,
  });

export const postProd = (
  p_Category: string,
  p_Thumbnail: string[],
  p_Name: string,
  p_Cost: number,
  p_Sale: boolean,
  p_Discount: number,
  p_Option: TOptionList[],
  p_Desc: string,
  p_Content: string
) =>
  axiosInstance.post('/admin-products', {
    p_Category,
    p_Thumbnail,
    p_Name,
    p_Cost,
    p_Sale,
    p_Discount,
    p_Option,
    p_Desc,
    p_Content,
  });

export const editProd = (
  p_No: number,
  p_Category: string,
  p_Thumbnail: string[],
  p_Name: string,
  p_Cost: number,
  p_Sale: boolean,
  p_Discount: number,
  p_Option: TOptionList[],
  p_Desc: string,
  p_Content: string
) =>
  axiosInstance.put(`/admin-products/${p_No}`, {
    p_Category,
    p_Thumbnail,
    p_Name,
    p_Cost,
    p_Sale,
    p_Discount,
    p_Option,
    p_Desc,
    p_Content,
  });

export const deleteProd = (p_No: number[]) =>
  axiosInstance.delete('/admin-products', {
    data: { p_No: p_No },
  });

export const getProdInfo = (p_No: number) =>
  axiosInstance.get(`/admin-products/${p_No}`);
