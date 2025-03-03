import { ReactNode } from 'react';
import logo_s from './logo.module.scss';

export default function Logo({ children }: { children: ReactNode }) {
  return (
    <a href="/" className={logo_s.logo} aria-label="Home" title="Home">
      {children}
    </a>
  );
}
