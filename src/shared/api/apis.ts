import axiosInstance from './instance';

export const login = (id: string, pwd: string) =>
  axiosInstance.post('/admins/login', { a_Id: id, a_Pw: pwd });

export const findId = (brand: string, bNumber: string) =>
  axiosInstance.get(`/admins/find-id?a_Brand=${brand}&a_Number=${bNumber}`);
