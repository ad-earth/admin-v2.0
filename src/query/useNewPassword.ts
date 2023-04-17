import { toast } from 'react-hot-toast';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import queryKeys from '../constants/queryKeys';
import { resetPwd } from '../shared/api/apis';

const useNewPassword = (confirmId: number, newPassword: string) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate } = useMutation(() => resetPwd(confirmId, newPassword), {
    onSuccess: () => {
      toast.success('비밀번호가 변경되었습니다.');
      navigate('/login');
      queryClient.invalidateQueries(queryKeys.FIND_PWD);
    },
  });

  return { mutate };
};

export default useNewPassword;
