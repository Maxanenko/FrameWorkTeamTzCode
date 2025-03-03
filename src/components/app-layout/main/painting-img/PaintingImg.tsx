import { useState } from 'react';
import type { PaintingImgPropType } from '../types/PaintingImgPropType';
import { useGetImageQuery } from '../../../../../store/api/api';

export default function PaintingImg({
  imageUrl,
  alt,
  classes,
}: PaintingImgPropType) {
  const { data: image, isError } = useGetImageQuery(imageUrl);
  const [imgSrc, setImgSrc] = useState(image || imageUrl);

  return (
    <img
      src={
        isError
          ? 'https://astrotowing.ca/wp-content/uploads/2020/08/Horizontal-Placeholder-Image-13947_1080x675.jpg'
          : imgSrc
      }
      alt={alt}
      className={classes.cardImage}
      width="392"
      height="260"
      loading="lazy"
      onError={() =>
        setImgSrc(
          'https://astrotowing.ca/wp-content/uploads/2020/08/Horizontal-Placeholder-Image-13947_1080x675.jpg',
        )
      }
    />
  );
}
