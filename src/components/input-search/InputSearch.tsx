import inputSearch from './inputSrarch.module.scss';
import { InputSearchPropType } from './InputSearchPropType';
import { setSearch } from '../app-layout/search/search-slice';

export default function InputSearch({ search, dispatch }: InputSearchPropType) {
  return (
    <div className={`${inputSearch.inputBox}`}>
      <input
        className={inputSearch.input}
        type="text"
        onChange={(e) => dispatch(setSearch(e.target.value))}
        value={search}
        placeholder="Painting title"
      />
      <button
        className={`${inputSearch.cross} ${search && inputSearch.active}`}
        onClick={() => dispatch(setSearch(''))}
        type="button"
        aria-label="clear search"
      >
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.963679 0.16834C0.743224 -0.0561134 0.385796 -0.0561134 0.165341 0.16834C-0.0551138 0.392794 -0.0551138 0.756705 0.165341 0.981158L3.20166 4.07255L0.307854 7.01884C0.0873987 7.2433 0.0873991 7.60721 0.307854 7.83166C0.528309 8.05611 0.885737 8.05611 1.10619 7.83166L4 4.88537L6.89381 7.83166C7.11426 8.05611 7.47169 8.05611 7.69215 7.83166C7.9126 7.60721 7.9126 7.2433 7.69215 7.01884L4.79834 4.07255L7.83466 0.981158C8.05511 0.756705 8.05511 0.392794 7.83466 0.16834C7.6142 -0.0561134 7.25678 -0.0561134 7.03632 0.16834L4 3.25973L0.963679 0.16834Z"
            fill="#DEDEDE"
          />
        </svg>
      </button>
    </div>
  );
}
