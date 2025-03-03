import card_s from './paintingCard.module.scss';
import PaintingImg from '../painting-img/PaintingImg';
import { Painting } from '../../../../../store/api/apiTypes';
import {
  useGetAuthorByIdQuery,
  useGetLocationByIdQuery,
} from '../../../../../store/api/api';

export default function PaintingCard({ painting }: { painting: Painting }) {
  const {
    data: location,
    isLoading: isLocationLoading,
    error: locationError,
  } = useGetLocationByIdQuery(painting.locationId);
  const {
    data: author,
    isLoading: isAuthorLoading,
    error: authorError,
  } = useGetAuthorByIdQuery(painting.authorId);

  if (isLocationLoading || isAuthorLoading) {
    return (
      <div className={card_s.card}>
        <PaintingImg
          imageUrl={painting.imageUrl}
          alt="alt"
          classes={{ cardImage: card_s.card__image }}
        />
        <div className={card_s.card__info}>
          <div className={card_s.card__infoHover}>
            <h2 className="card__info-title">{painting.name}</h2>
            <time dateTime={painting.created}>{painting.created}</time>
          </div>
          <div className={card_s.card__infoMain}>
            <h2 className="card__info-title">Автор еще не загружен</h2>
            <p>Локация еще не загружена</p>
          </div>
        </div>
      </div>
    );
  }

  if (locationError || authorError) {
    return (
      <div className={card_s.card}>
        <PaintingImg
          imageUrl={painting.imageUrl}
          alt="alt"
          classes={{ cardImage: card_s.card__image }}
        />
        <div className={card_s.card__info}>
          <div className={card_s.card__infoHover}>
            <h2 className="card__info-title">Автор не загружен</h2>
            <p>Локация не загружена</p>
          </div>
          <div className={card_s.card__infoMain}>
            <h2 className="card__info-title">{painting.name}</h2>
            <time dateTime="2024">{painting.created}</time>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={card_s.card}>
      <PaintingImg
        imageUrl={painting.imageUrl}
        alt={painting.name}
        classes={{ cardImage: card_s.card__image }}
      />
      <div className={card_s.card__info}>
        <div className={card_s.card__infoHover}>
          <h2 className="card__info-title">{painting.name}</h2>
          <time dateTime="2024">{painting.created}</time>
        </div>
        <div className={card_s.card__infoMain}>
          <h2 className="card__info-title">{author?.name}</h2>
          <p>{location?.location}</p>
        </div>
      </div>
    </div>
  );
}
