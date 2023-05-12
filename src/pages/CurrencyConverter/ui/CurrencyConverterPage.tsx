import cn from 'classnames';

import styles from './CurrencyConverterPage.module.scss';

import { ContentWrapper } from 'shared/ui/ContentWrapper';

export const CurrencyConverterPage = () => (
  <ContentWrapper className={cn(styles.content)}>
    <div>CurrencyConverter</div>
  </ContentWrapper>
);
