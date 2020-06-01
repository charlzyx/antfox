import { Field, Form, useAffect } from 'foxantd';
import React from 'react';

const init = {
  user: 'user',
  fllowuser: '',
  age: 'age',
  fllowage: '',
};

const App = () => {
  const act = useAffect<typeof init>();

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
        role="putage"
        onClick={() => {
          act.put((d) => {
            d.age = 'agebyput';
          });
        }}
      >
        put age: age by put
      </button>
      <Form act={act} init={init}>
        <Field role="user" as="Input" path="user" placeholder="user"></Field>
        <Field role="age" as="Input" path="age" placeholder="age"></Field>
        <Field
          role="fllowuser"
          as="Input"
          path="fllowuser"
          placeholder="fllowuser"
          effect={({ listen, setup }) => {
            listen.change('user').subscribe(({ value }) => {
              setup((d) => {
                d.value = value;
              });
            });
          }}
        ></Field>
        <Field
          role="fllowage"
          as="Input"
          path="fllowage"
          effect={({ listen, setup }) => {
            listen.change('age').subscribe(({ value }) => {
              setup((d) => {
                d.value = value;
              });
            });
          }}
          placeholder="fllowage"
        ></Field>
      </Form>
    </div>
  );
};

export default App;
