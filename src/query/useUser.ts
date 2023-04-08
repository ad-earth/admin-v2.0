import type { AxiosError, AxiosResponse } from 'axios';
import { useMutation } from 'react-query';
import { delUser } from '../shared/api/apis';

export interface ErrType {
  errorMessage: string;
}

export default function useUser() {
  const removeUser = useMutation<AxiosResponse, AxiosError<ErrType>>(delUser);
  return { removeUser };
}
