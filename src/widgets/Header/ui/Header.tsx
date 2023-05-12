import cn from 'classnames';

import styles from './Header.module.scss';

import { RouterLink } from 'shared/ui/RouterLink';

export const Header = () => (
  <div className={cn(styles.header)}>
    <RouterLink to='/'>Конвертер валют</RouterLink>
    <RouterLink to='/exchange-rates'>Курсы валют</RouterLink>
  </div>
);
