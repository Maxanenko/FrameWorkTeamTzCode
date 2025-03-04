import { useState, useEffect } from 'react';
import type { PaintingImgPropType } from '../types/PaintingImgPropType';
import { useGetImageQuery } from '../../../../../store/api/api';

export default function PaintingImg({
  imageUrl,
  alt,
  classes,
}: PaintingImgPropType) {
  const { data: image, isError } = useGetImageQuery(imageUrl);
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const placeholder =
    'https://astrotowing.ca/wp-content/uploads/2020/08/Horizontal-Placeholder-Image-13947_1080x675.jpg';

  useEffect(() => {
    if (!image || isError) {
      setImgSrc(placeholder);
      return;
    }

    const loadImage = async () => {
      try {
        const response = await fetch(image);
        if (!response.ok) throw new Error('Ошибка загрузки');
        const blob = await response.blob();
        setImgSrc(URL.createObjectURL(blob)); // Создаём локальный URL
      } catch {
        setImgSrc(placeholder);
      }
    };

    loadImage();
  }, [image, isError]);

  return (
    <img
      src={imgSrc ?? placeholder}
      alt={alt}
      className={classes.cardImage}
      width="392"
      height="260"
      loading="lazy"
    />
  );
}
