import cn from 'classnames';

import styles from './Header.module.scss';

import { ContentWrapper } from 'shared/ui/ContentWrapper';
import { RouterLink } from 'shared/ui/RouterLink';

export const Header = () => (
  <nav className={cn(styles.wrapper)}>
    <ContentWrapper className={cn(styles.content)}>
      <RouterLink to='/'>Конвертер валют</RouterLink>
      <RouterLink to='/exchange-rates'>Курсы валют</RouterLink>
    </ContentWrapper>
  </nav>
);
