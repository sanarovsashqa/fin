import cn from 'classnames';
import { FC, InputHTMLAttributes } from 'react';

import styles from './Input.module.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: FC<InputProps> = ({ label, ...inputProps }) => (
  <label className={cn(styles.label)}>
    <span className='text-sm'>{label}</span>
    <input
      className={cn(styles.input, 'text-xl', 'text-bold')}
      {...inputProps}
    ></input>
  </label>
);
