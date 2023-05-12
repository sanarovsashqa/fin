import cn from 'classnames';

import styles from './CurrencyConverterForm.module.scss';

import { Arrows } from 'shared/assets/icons';
import { Card, Input, Select } from 'shared/ui/components';

const optionsMock = [
  { label: 'USD', value: 'USD' },
  { label: 'RUB', value: 'RUB' },
  { label: 'EUR', value: 'EUR' },
];

export const CurrencyConverterForm = () => (
  <Card className={cn(styles.card)}>
    <div className={cn(styles.currency)}>
      <Input
        defaultValue={0}
        label='Меняю'
      />
      <Select options={optionsMock} />
    </div>

    <Arrows className={cn(styles.arrows)} />

    <div className={cn(styles.currency)}>
      <Input
        defaultValue={0}
        label='Получаю'
        readOnly={true}
      />

      <Select options={optionsMock} />
    </div>
  </Card>
);
