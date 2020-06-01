import { Field, Form, useAffect } from 'antfox';
import React from 'react';

const init = {
  user: 'inituser',
  age: 'initage',
};

const App = () => {
  const act = useAffect<typeof init>(($) => {
    $.init().subscribe(({ data }) => {
      console.log('Init on Field');
      console.log('expect', 'toEqual', data, init);
    });
  });
  return (
    <div>
      <p>Init on Field</p>
      <Form act={act}>
        <Field
          role="user"
          init="inituser"
          as="Input"
          path="user"
          placeholder="user"
        ></Field>
        <Field
          role="age"
          init="initage"
          as="Input"
          path="age"
          placeholder="age"
        ></Field>
      </Form>
    </div>
  );
};

export default App;
