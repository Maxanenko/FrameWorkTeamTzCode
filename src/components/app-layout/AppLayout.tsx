import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import AppHeader from './header/AppHeader';
import SearchSection from './search/SearchSection.js';
import AppMain from './main/AppMain';
import PaginationSection from './pagination/PaginationSection';
import EmptyPaintings from '../empty-paintings/EmptyPaintings';
import { RootState } from '../../../store/store';
import { useGetPaintingsQuery } from '../../../store/api/api';
import { setPaintings } from './main/paintings-slice';
import { setPage, setTotalPages } from './pagination/pagination-slice';
import Loader from '../loader/Loader';

export default function AppLayout() {
  const dispatch = useDispatch();
  const { page, limit } = useSelector((state: RootState) => state.pagination);
  const { search } = useSelector((state: RootState) => state.search);

  const { data, isLoading, isFetching } = useGetPaintingsQuery({
    page,
    limit,
    search,
  });

  useEffect(() => {
    dispatch(setPage(1));
  }, [search, dispatch]);

  useEffect(() => {
    if (data) {
      dispatch(setPaintings(data.paintings)); // data - это массив, а не объект с ключом paintings
      dispatch(setTotalPages(Math.ceil(data.totalCount / limit))); // Используем длину массива для totalPages
    }
  }, [data, dispatch, limit]);

  const loading = isLoading || isFetching;

  return (
    <>
      <AppHeader />
      <SearchSection />
      {!data || data.paintings.length === 0 ? (
        <EmptyPaintings search={search} />
      ) : (
        <>
          {loading && <Loader />}
          {!loading && (
            <>
              <AppMain />
              <PaginationSection />
            </>
          )}
        </>
      )}
    </>
  );
}
