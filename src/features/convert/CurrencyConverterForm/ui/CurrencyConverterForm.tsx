import cn from 'classnames';
import debounce from 'lodash.debounce';
import { FC, useEffect, useMemo } from 'react';

import { useForm } from 'react-hook-form';

import styles from './CurrencyConverterForm.module.scss';

import { DEFAULT_VALUES } from '../model/defaultValues';
import { CurrencyConverterFormData } from '../model/types';

import { useLazyConvertCurrencyQuery } from 'entities/convert';
import { Currency, mapCurrenciesToSelectOptions } from 'entities/currency';

import { integerNumberMask } from 'shared/lib/masks';
import { Input, Select } from 'shared/ui/components';

export interface CurrencyConverterFormProps {
  currencies: Currency[];
}

export const CurrencyConverterForm: FC<CurrencyConverterFormProps> = ({ currencies }) => {
  const options = useMemo(() => mapCurrenciesToSelectOptions(currencies), [currencies]);

  const { handleSubmit, register, watch } = useForm<CurrencyConverterFormData>({
    defaultValues: DEFAULT_VALUES,
  });

  const [convertCurrency, amountResult] = useLazyConvertCurrencyQuery();

  const isLoading = amountResult.isFetching || amountResult.isLoading;

  useEffect(() => {
    const onSubmit = (data: CurrencyConverterFormData) => convertCurrency(data);
    const subscription = watch(debounce(() => handleSubmit(onSubmit)(), 1000));
    return () => subscription.unsubscribe();
  }, [convertCurrency, handleSubmit, watch]);

  return (
    <form className={cn(styles.form)}>
      <div className={cn(styles.field)}>
        <Input
          disabled={isLoading}
          label='Меняю'
          mask={integerNumberMask}
          placeholder='0'
          {...register('amount', { required: true })}
        />

        <Select
          disabled={isLoading}
          options={options}
          {...register('from')}
        />
      </div>

      <div className={cn(styles.field)}>
        <Input
          disabled={isLoading}
          isLoading={isLoading}
          label='Получаю'
          placeholder='0'
          readOnly={true}
          value={amountResult.data ?? ''}
        />

        <Select
          disabled={isLoading}
          options={options}
          {...register('to')}
        />
      </div>
    </form>
  );
};
