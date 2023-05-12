import cn from 'classnames';

import styles from './CurrencyConverterPage.module.scss';

import { ContentWrapper } from 'shared/ui/components';
import { CurrencyConverterForm } from 'widgets/CurrencyConverterForm';

export const CurrencyConverterPage = () => (
  <ContentWrapper className={cn(styles.content)}>
    <CurrencyConverterForm />
  </ContentWrapper>
);
