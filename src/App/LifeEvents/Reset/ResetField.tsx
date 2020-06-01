import { Field, Form, useAffect } from 'foxantd';
import React from 'react';

const init = {
  user: 'inituser',
  fllowuser: '',
};

const App = () => {
  const act = useAffect<typeof init>(($) => {
    $.reset().subscribe(({ data }) => {
      console.log('reset', data);
    });
  });

  return (
    <div>
      <p>Init on Form</p>
      <button
        role="putuser"
        onClick={() => {
          act.put((d) => {
            d.user = 'userbyput';
          });
        }}
      >
        put user: userbyput
      </button>

      <button
        role="reset"
        onClick={() => {
          act.reset();
        }}
      >
        reset
      </button>

      <Form act={act} init={init}>
        <Field role="user" as="Input" path="user" placeholder="user"></Field>
        <Field
          role="fllowuser"
          as="Input"
          path="fllowuser"
          effect={({ listen, setup }) => {
            listen.reset<typeof init>().subscribe(({ data }) => {
              console.log('wtffff', data);
              setup((d) => {
                d.value = data.user;
              });
            });
          }}
          placeholder="fllowuser"
        ></Field>
      </Form>
    </div>
  );
};

export default App;
