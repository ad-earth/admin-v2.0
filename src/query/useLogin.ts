import type { AxiosError, AxiosResponse } from 'axios';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { login } from '../shared/api/apis';
import type { TError } from '../shared/types/types';

type TData = {
  id: string;
  pwd: string;
};

const useLogin = () => {
  const navigate = useNavigate();
  return useMutation<AxiosResponse, AxiosError<TError>, any, unknown>(
    ({ id, pwd }: TData) => login(id, pwd),
    {
      onSuccess: data => {
        localStorage.setItem('adminToken', data?.data.token);
        navigate('/');
      },
    }
  );
};

export default useLogin;
