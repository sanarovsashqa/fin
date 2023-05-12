import cn from 'classnames';

import styles from './ExchangeRatesPage.module.scss';

import { ContentWrapper } from 'shared/ui/components';

export const ExchangeRatesPage = () => (
  <ContentWrapper className={cn(styles.content)}>
    <div>ExchangeRates</div>
  </ContentWrapper>
);
