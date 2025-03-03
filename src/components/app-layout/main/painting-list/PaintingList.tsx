import { useSelector } from 'react-redux';
import PaintingCard from '../painting-card/PaintingCard.js';
import paintingCard_s from './paintingList.module.scss';
import { RootState } from '../../../../../store/store';

export default function PaintingList() {
  const { paintings } = useSelector((state: RootState) => state.paintings);

  return (
    <ul className={paintingCard_s.list}>
      {paintings.map((painting) => {
        return (
          <li key={painting.id} className="paintings__item">
            <PaintingCard painting={painting} />
          </li>
        );
      })}
    </ul>
  );
}
