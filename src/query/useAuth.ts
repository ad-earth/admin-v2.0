import type { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-hot-toast';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { postSingup } from '../shared/api/apis';
import type { TError } from '../shared/types/types';

export type TAuthDataType = {
  a_Id: string;
  a_Pw: string;
  a_Brand: string;
  a_Number: string;
  a_Phone: string;
};

export default function useAuth() {
  const navigate = useNavigate();

  const signup = useMutation<AxiosResponse, AxiosError<TError>, any, unknown>(
    (authData: TAuthDataType) => postSingup(authData),
    {
      onSuccess: () => {
        toast.success('가입을 축하합니다. 로그인 후 이용해주세요!');
        navigate('/login');
      },
    }
  );
  return { signup };
}
