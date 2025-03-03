import type { JSX } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import paginationBtn_s from './paginationBtn.module.scss';
import { PaginationBtnPropsType } from '../types/PaginationBtnPropsType';
import { RootState } from '../../../../../store/store';
import { useGetPaintingsQuery } from '../../../../../store/api/api';
import { setPage } from '../pagination-slice';

export default function PaginationBtn({
  children,
  flag,
}: PaginationBtnPropsType): JSX.Element {
  const dispatch = useDispatch();
  const { page, limit } = useSelector((state: RootState) => state.pagination);
  const { search } = useSelector((state: RootState) => state.search);

  const { data } = useGetPaintingsQuery({ page, limit, search });
  const totalPages = data ? Math.ceil(data.totalCount / limit) : 1;

  const nextOrPrevPage = (direction: 'next' | 'prev') => {
    if (direction === 'prev' && page !== 1) {
      dispatch(setPage(page - 1));
    } else if (direction === 'next' && page !== totalPages) {
      dispatch(setPage(page + 1));
    }
  };

  return (
    <button
      type="button"
      className={paginationBtn_s.buttonArrow}
      onClick={() => {
        nextOrPrevPage(flag);
      }}
    >
      {children}
    </button>
  );
}
