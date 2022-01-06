import { ButtonHTMLAttributes, ReactNode } from 'react';

export type DashButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  color?: 'red' | 'green';
};
