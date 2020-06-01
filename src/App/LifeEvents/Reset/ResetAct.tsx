import { Field, Form, useAffect } from 'antfox';
import React from 'react';

const init = {
  user: 'inituser',
  age: 'initage',
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
        role="putage"
        onClick={() => {
          act.put((d) => {
            d.age = 'agebyput';
          });
        }}
      >
        put age: age by put
      </button>
      <button
        role="reset"
        onClick={() => {
          act.reset();
        }}
      >
        reset
      </button>
      <button
        role="resetTo"
        onClick={() => {
          act.reset({
            user: 'userbyresetto',
            age: 'agebyresetto',
          });
        }}
      >
        reset to
      </button>
      <Form act={act} init={init}>
        <Field role="user" as="Input" path="user" placeholder="user"></Field>
        <Field role="age" as="Input" path="age" placeholder="age"></Field>
      </Form>
    </div>
  );
};

export default App;
