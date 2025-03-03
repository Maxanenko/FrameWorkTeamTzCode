import theme_s from './theme.module.scss';
import { ButtonThemePropsType } from './ButtonThemePropsType';

export default function ButtonTheme({ theme, onClick }: ButtonThemePropsType) {
  return (
    <button
      type="button"
      className={theme_s.theme}
      onClick={onClick}
      aria-label="Toggle Theme"
    >
      <span
        className={`${theme_s.icon} ${theme === 'dark' ? theme_s.sun : theme_s.moon}`}
      />
    </button>
  );
}
