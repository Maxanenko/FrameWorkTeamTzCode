import type { JSX } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import paginationList_s from './paginationList.module.scss';
import PaginationItem from '../pagination-item/PaginationItem.js';
import { RootState } from '../../../../../store/store';
import { useGetPaintingsQuery } from '../../../../../store/api/api';

export default function PaginationList(): JSX.Element {
  const dispatch = useDispatch();
  const { page, limit } = useSelector((state: RootState) => state.pagination);
  const { search } = useSelector((state: RootState) => state.search);

  const { data } = useGetPaintingsQuery({ page, limit, search });
  const totalPages = data ? Math.ceil(data.totalCount / limit) : 1;
  return (
    <ul className={paginationList_s.list}>
      {Array.from({ length: totalPages }, (_, index) => {
        return (
          <PaginationItem
            key={index}
            page={page}
            newPage={index + 1}
            dispatch={dispatch}
          />
        );
      })}
    </ul>
  );
}
