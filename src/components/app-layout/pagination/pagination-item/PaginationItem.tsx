import type { JSX } from 'react';
import paginationItem_s from './paginationItem.module.scss';
import type { PaginationItemPropsType } from '../types/PaginationItemPropsType';
import { setPage } from '../pagination-slice';

export default function PaginationItem({
  page,
  newPage,
  dispatch,
}: PaginationItemPropsType): JSX.Element {
  return (
    <li>
      <button
        className={`${paginationItem_s.button} ${page === newPage && paginationItem_s.isActive}`}
        type="button"
        onClick={() => dispatch(setPage(newPage))}
      >
        {newPage}
      </button>
    </li>
  );
}
