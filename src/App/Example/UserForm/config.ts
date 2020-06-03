import { TEffect } from 'antfox';
import * as Yup from 'yup';

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
    affect.init().subscribe(({ data }) => {
      setup((s) => {
        s.visible = data.withGender;
      });
    });
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
      setup((s) => {
        s.visible = value;
      });
    });
  },
};
