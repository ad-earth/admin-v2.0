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

export const getDashboard = (queryFnName: string) =>
  axiosInstance.get(`/admin-main/${queryFnName}`);

export const getBiz = () => axiosInstance.get('/admin-main/charge');
export const putBiz = () => axiosInstance.put('/admin-main/charge');

export const delUser = () => axiosInstance.delete('/admins');
