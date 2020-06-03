import { TEffect } from 'antfox';
import * as Yup from 'yup';

export type TSearch = {
  page: number;
  size: number;
  kw?: string;
  user?: string;
  date?: Date;
  total?: number;
};
export const api = {
  get(
    query: TSearch,
  ): Promise<{
    list: any[];
    total: number;
  }> {
    console.log('query', query);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const list = new Array(query.size).fill(0).map((x, i) => {
          return {
            id: query.page * query.size + i + 1,
            title: `at page: ${query.page}, index: ${i}`,
          };
        });
        resolve({
          list,
          total: 12,
        });
      }, 1000);
    });
  },
};

export const init = (): TSearch => {
  return {
    page: 1,
    size: 5,
    total: 5,
  };
};

type Keys = keyof ReturnType<typeof init>;
export const effects: {
  [K in Keys]?: TEffect;
} = {};
