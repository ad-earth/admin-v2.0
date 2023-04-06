import axiosInstance from './instance';

export const getDashboard = (queryFnName: string) =>
  axiosInstance.get(`/admin-main/${queryFnName}`);
