import cn from 'classnames';
import { FC, SelectHTMLAttributes } from 'react';

import styles from './Select.module.scss';

interface Option {
  label: string;
  value: string;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[];
}

export const Select: FC<SelectProps> = ({ options, ...selectProps }) => (
  <div className={cn(styles.select)}>
    <select
      className='text-lg text-bold'
      {...selectProps}
    >
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  </div>
);
