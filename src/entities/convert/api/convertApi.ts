import { ConvertCurrencyDto, ConvertCurrencyParams } from './types';

import { mapConvertCurrency } from '../lib/mapConvertCurrency';
import { ConvertCurrencyResult } from '../model/types';

import { baseApi } from 'shared/api';
import { CONVERT_TAG } from 'shared/api/tags';

export const convertApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    convertCurrency: build.query<ConvertCurrencyResult, ConvertCurrencyParams>({
      query: (params) => ({
        url: `/convert?to=${params.to}&from=${params.from}&amount=${params.amount}`,
      }),
      transformResponse: (response: ConvertCurrencyDto) => mapConvertCurrency(response),
      providesTags: [CONVERT_TAG],
    }),
  }),
});

export const { useLazyConvertCurrencyQuery } = convertApi;
