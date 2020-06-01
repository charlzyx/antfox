import { Field, Form, useAffect } from 'antfox';
import React from 'react';

const init = {
  user: 'inituser',
  age: 'initage',
};

const App = () => {
  const act = useAffect<typeof init>(($) => {
    $.init().subscribe(({ data }) => {
      console.log('Init on Field and Form');
      console.log('expect', 'toEqual', data, { ...init, user: 'initbyfield' });
    });
  });
  return (
    <div>
      <p>Init on Field and Form</p>
      <Form act={act} init={init}>
        <Field
          role="user"
          init="initbyfield"
          as="Input"
          path="user"
          placeholder="user"
        ></Field>
        <Field role="age" as="Input" path="age" placeholder="age"></Field>
      </Form>
    </div>
  );
};

export default App;
