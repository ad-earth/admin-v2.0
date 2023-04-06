import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { login } from '../shared/api/apis';

const useLogin = (id: string, password: string) => {
  const navigate = useNavigate();
  const { mutate } = useMutation(() => login(id, password), {
    onSuccess: data => {
      localStorage.setItem('adminToken', data?.data.token);
      navigate('/');
    },
  });

  return { mutate };
};

export default useLogin;
