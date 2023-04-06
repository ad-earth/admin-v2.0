import { ID_REG, PHONE_REG, PWD_REG } from '../constants';

const useRegExp = () => {
  const isValidId = (id: string) => ID_REG.test(id);
  const isValidPassword = (password: string) => PWD_REG.test(password);
  const isValidPhone = (phone: string) => PHONE_REG.test(phone);

  return { isValidId, isValidPassword, isValidPhone };
};

export default useRegExp;
