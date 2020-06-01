import { Field, Form, useAffect } from 'foxantd';
import React from 'react';

const init = {
  user: 'inituser',
  age: '233',
  has: '',
};

const App = () => {
  const act = useAffect<typeof init>();
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
          effect={({ on, listen, setup }) => {
            // 默认 keep = false 卸载之后重新挂载, 值被清空为 undefined, 同时字段被删掉
            let flag = false;
            on.mounted$().subscribe((v) => {
              if (flag) {
                console.log('expect', 'toEqual', v, undefined);
              }
            });
            on.unmount$().subscribe(() => {
              flag = true;
            });
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
          effect={({ on, listen, setup }) => {
            // 默认 keep = false 卸载之后重新挂载, 值被清空为 undefined,
            // 重新挂载之后, 因为有 keep 的存在, 字段被重新赋值为 init
            let flag = false;
            on.mounted$().subscribe((v) => {
              if (flag) {
                console.log('expect', 'toEqual', v, 'userwithInit');
              }
            });
            on.unmount$().subscribe(() => {
              flag = true;
            });
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
          effect={({ on, listen, setup }) => {
            // keep = true 卸载之后重新挂载,  那么, 不会
            // 触发 unmount$
            on.unmount$().subscribe(() => {
              console.log('never');
            });
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
