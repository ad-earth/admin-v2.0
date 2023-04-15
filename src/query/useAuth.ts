import type { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-hot-toast';
import { QueryCache, useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import useModal from '../hooks/useModal';
import { delUser, postSingup } from '../shared/api/apis';
import type { TError } from '../shared/types/types';

export type TAuthDataType = {
  a_Id: string;
  a_Pw: string;
  a_Brand: string;
  a_Number: string;
  a_Phone: string;
};
export interface ErrType {
  errorMessage: string;
}

export default function useAuth() {
  const navigate = useNavigate();
  const { hideModal } = useModal();
  const queryCache = new QueryCache();

  const signup = useMutation<AxiosResponse, AxiosError<TError>, any, unknown>(
    (authData: TAuthDataType) => postSingup(authData),
    {
      onSuccess: () => {
        toast.success('가입을 축하합니다. 로그인 후 이용해주세요!');
        navigate('/login');
      },
    }
  );
  const removeUser = useMutation<AxiosResponse, AxiosError<ErrType>>(delUser, {
    onSuccess: () => {
      toast.success('탈퇴 되었습니다.');
      localStorage.clear();
      queryCache.clear();
      hideModal();
      navigate('/login', { replace: true });
    },
  });

  return { signup, removeUser };
}
