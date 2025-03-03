import { Dispatch } from 'react';
import { UnknownAction } from '@reduxjs/toolkit';

export type InputSearchPropType = {
  search: string;
  dispatch: Dispatch<UnknownAction>;
};
