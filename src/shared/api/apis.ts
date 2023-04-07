import axiosInstance from './instance';

export const getDashboard = (queryFnName: string) =>
  axiosInstance.get(`/admin-main/${queryFnName}`);

export const getBiz = () => axiosInstance.get('/admin-main/charge');
export const putBiz = () => axiosInstance.put('/admin-main/charge');
