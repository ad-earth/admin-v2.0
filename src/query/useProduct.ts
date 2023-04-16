import type { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-hot-toast';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import queryKeys from '../constants/queryKeys';
import { deleteProd, editProd, postProd } from '../shared/api/apis';
import type { IProdResponse, TError } from '../shared/types/types';

interface IEditProduct extends IProdResponse {
  p_No: number;
}
interface IRemoveProduct {
  p_No: number[];
}

const useProduct = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const postProduct = useMutation<
    AxiosResponse,
    AxiosError<TError>,
    IProdResponse
  >(
    data =>
      postProd(
        data.p_Category,
        data.p_Thumbnail,
        data.p_Name,
        data.p_Cost,
        data.p_Sale,
        data.p_Discount,
        data.p_Option,
        data.p_Desc,
        data.p_Content
      ),
    {
      onSuccess: () => {
        toast.success('상품이 등록되었습니다.');
        navigate('/setProd?category=전체&page=1');
      },
    }
  );

  const editProduct = useMutation<
    AxiosResponse,
    AxiosError<TError>,
    IEditProduct
  >(
    data =>
      editProd(
        data.p_No,
        data.p_Category,
        data.p_Thumbnail,
        data.p_Name,
        data.p_Cost,
        data.p_Sale,
        data.p_Discount,
        data.p_Option,
        data.p_Desc,
        data.p_Content
      ),
    {
      onSuccess: () => {
        toast.success('상품이 수정되었습니다.');
        navigate('/setProd?category=전체&page=1');
      },
    }
  );

  const removeProduct = useMutation<
    AxiosResponse,
    AxiosError<TError>,
    IRemoveProduct
  >(data => deleteProd(data.p_No), {
    onSuccess: () => {
      queryClient.invalidateQueries(queryKeys.PRODUCTS_TABLE);
      toast.success('상품을 삭제하였습니다.');
    },
  });

  return {
    postProduct,
    editProduct,
    removeProduct,
  };
};

export default useProduct;
