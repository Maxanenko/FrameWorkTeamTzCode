import { useDispatch, useSelector } from 'react-redux';
import InputSearch from '../../input-search/InputSearch.js';
import search_s from './search.module.scss';
import { RootState } from '../../../../store/store';

export default function SearchSection() {
  const dispatch = useDispatch();
  const { search } = useSelector((state: RootState) => state.search);
  return (
    <section
      className={`${search_s.search} container`}
      aria-labelledby="section-search"
    >
      <div className={`${search_s.search__inner}`}>
        <h2 className="visually-hidden" id="section-search">
          Gallery search
        </h2>
        <InputSearch search={search} dispatch={dispatch} />
      </div>
    </section>
  );
}
