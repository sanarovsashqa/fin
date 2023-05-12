import cn from 'classnames';

import styles from './ExchangeRatesPage.module.scss';

import { ContentWrapper } from 'shared/ui/ContentWrapper';

export const ExchangeRatesPage = () => (
  <ContentWrapper className={cn(styles.content)}>
    <div>ExchangeRates</div>
  </ContentWrapper>
);
