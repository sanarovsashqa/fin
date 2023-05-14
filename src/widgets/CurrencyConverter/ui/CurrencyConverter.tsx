import cn from 'classnames';

import styles from './CurrencyConverter.module.scss';

import { useCurrenciesQuery } from 'entities/currency';
import { CurrencyConverterForm } from 'features/convert/CurrencyConverterForm';
import { Card, Loader } from 'shared/ui/components';

export const CurrencyConverter = () => {
  const { data: currencies, isLoading } = useCurrenciesQuery();

  return (
    <Card className={cn(styles.card)}>
      {isLoading ? <Loader /> : <CurrencyConverterForm currencies={currencies} />}
    </Card>
  );
};
