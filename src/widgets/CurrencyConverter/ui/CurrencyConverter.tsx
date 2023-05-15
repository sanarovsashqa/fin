import cn from 'classnames';

import { useMemo } from 'react';

import styles from './CurrencyConverter.module.scss';

import { mapCurrenciesToSelectOptions, useCurrenciesQuery } from 'entities/currency';
import { CurrencyConverterForm } from 'features/convert/CurrencyConverterForm';
import { rtkErrorToMessage } from 'shared/lib/rtkErrorToMessage';
import { Card, Loader } from 'shared/ui/components';

export const CurrencyConverter = () => {
  const { data: currencies, isLoading, error } = useCurrenciesQuery();
  const options = useMemo(() => mapCurrenciesToSelectOptions(currencies), [currencies]);

  return (
    <Card className={cn(styles.card)}>
      {error ? (
        <p>{rtkErrorToMessage(error)}</p>
      ) : (
        <>{isLoading ? <Loader /> : <CurrencyConverterForm options={options} />}</>
      )}
    </Card>
  );
};
