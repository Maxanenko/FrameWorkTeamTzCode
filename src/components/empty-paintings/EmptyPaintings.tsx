import empty_s from './emptyPaintings.module.scss';

export default function EmptyPaintings({ search }: { search: string }) {
  return (
    <section
      className={`${empty_s.empty} container`}
      aria-labelledby="gallery-empty"
    >
      <h2 className={empty_s.emptyTitle} id="gallery-empty">
        No matches for <span className={empty_s.emptyBold}>{search}</span>
      </h2>
      <p>Please try again with a different spelling or keywords.</p>
    </section>
  );
}
