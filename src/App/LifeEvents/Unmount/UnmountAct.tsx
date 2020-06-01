import { Field, Form, useAffect } from 'antfox';
import React from 'react';

const init = {
  user: 'inituser',
  age: '233',
  has: '',
};

const App = () => {
  const act = useAffect<typeof init>(($) => {
    let flag = false;
    $.unmount('user').subscribe(({ path, data }) => {
      flag = true;
      console.log('expect', 'toEqual', path, 'user');
      console.log('expect', 'toEqual', data, {
        has: 'false',
        age: '233',
        userwithInit: 'userwithInit',
      });
    });
    $.mounted('user').subscribe(({ value }) => {
      // 卸载之后重新挂载, 值被清空为 undefined
      if (flag) {
        console.log('expect', 'toEqual', value, undefined);
      }
    });
    $.mounted('userwithInit').subscribe(({ value }) => {
      // 卸载之后重新挂载, 值被清空为 undefined, 如果 Field 上有init, 则被重置为
      // init
      console.log('expect', 'toEqual', value, 'userwithInit');
    });
    $.unmount('age').subscribe(() => {
      // 这里不会执行, keep = true 的情况下 visible 不会触发 unmount
      // 同时不会删除数据上对应的字段
      console.log('never');
    });
  });
  return (
    <div>
      <Form act={act} init={init}>
        <button
          role="toggle"
          onClick={() => {
            act.put((d) => {
              d.has = d.has === 'false' ? '' : 'false';
            });
          }}
        >
          toggle
        </button>

        <Field path="has" as="Input"></Field>

        <Field
          role="user"
          effect={({ listen, setup }) => {
            listen.change('has').subscribe(({ value }) => {
              setup((draft) => {
                draft.visible = value !== 'false';
              });
            });
          }}
          as="Input"
          path="user"
          placeholder="user"
        ></Field>

        <Field
          role="userwithInit"
          init="userwithInit"
          effect={({ listen, setup }) => {
            listen.change('has').subscribe(({ value }) => {
              setup((draft) => {
                draft.visible = value !== 'false';
              });
            });
          }}
          as="Input"
          path="userwithInit"
          placeholder="userwithInit"
        ></Field>

        <Field
          role="age"
          keep
          effect={({ listen, setup }) => {
            listen.change('has').subscribe(({ value }) => {
              setup((draft) => {
                draft.visible = value !== 'false';
              });
            });
          }}
          as="Input"
          path="age"
          placeholder="age"
        ></Field>
      </Form>
    </div>
  );
};

export default App;
