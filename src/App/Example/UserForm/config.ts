import { TEffect } from 'antfox';
import * as Yup from 'yup';

export const api = {
  get(): any {
    return new Promise((resolve, reject) => {
      const s = window.localStorage.getItem('__USER_FORM__');
      setTimeout(() => {
        const v = s ? JSON.parse(s) : {};
        resolve(v);
      }, 1000);
    });
  },
  put(values: any) {
    return new Promise((resolve, reject) => {
      window.localStorage.setItem('__USER_FORM__', JSON.stringify(values));
      setTimeout(() => {
        resolve(values);
      }, 2000);
    });
  },
};

export const init = () => {
  return {
    username: '',
    password: '',
    passwordConfirm: '',
    withGender: false,
    withCard: false,
    gender: '',
    birthday: '',
    links: [],
    card: {
      no: '',
      from: '',
      to: '',
    },
  };
};

type Keys = keyof ReturnType<typeof init>;
export const effects: {
  [K in Keys]?: TEffect;
} = {
  gender: ({ affect, setup }) => {
    affect.change('withGender').subscribe(({ value }) => {
      setup((s) => {
        s.visible = value;
        if (value) {
          s.rule = Yup.string().min(1, '请选择性别').required('请选择性别');
        } else {
          s.rule = Yup.string();
        }
      });
    });
  },
  card: ({ affect, setup }) => {
    affect.change('withCard').subscribe(({ value }) => {
      console.log('affect card');
      setup((s) => {
        s.visible = value;
      });
    });
  },
};
