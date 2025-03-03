import { Dispatch } from 'react';
import { UnknownAction } from '@reduxjs/toolkit';

export type PaginationItemPropsType = {
  page: number;
  newPage: number;
  dispatch: Dispatch<UnknownAction>;
};
