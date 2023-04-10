import { Pagination as MuiPagination, PaginationItem } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

type IProps = {
  pageCnt: number;
};

export default function Pagination({ pageCnt }: IProps) {
  const pageCount = Math.ceil(pageCnt / 10);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page');

  const handleChange = (e: React.ChangeEvent<unknown>, value: number) => {
    searchParams.set('page', String(value));
    setSearchParams(searchParams);
  };

  return (
    <MuiPagination
      count={pageCount ? pageCount : 1}
      defaultPage={1}
      page={Number(page)}
      variant="outlined"
      shape="rounded"
      sx={{ marginTop: '20px' }}
      onChange={handleChange}
      renderItem={item => <PaginationItem {...item} />}
    />
  );
}
