import { Field, Form, useAffect } from 'foxantd';
import _ from 'lodash';
import React from 'react';

const init = {
  user: 'inituser',
  age: 'initage',
};

const App = () => {
  const act = useAffect<typeof init>(($) => {
    let i = 0;
    $.mounted('user').subscribe(({ path, value }) => {
      i++;
      console.log('expect', 'toEqual', path, 'user');
      console.log('expect', 'toEqual', value, init.user);
    });
    $.mounted().subscribe(({ path, value }) => {
      i++;
      console.log('expect', 'toEqual', value, _.get(init, path));
    });
    $.init().subscribe(() => {
      console.log('init$ is after mounted$');
      console.log('expect', 'toBeGreaterThan', i, 0);
    });
  });
  return (
    <div>
      <Form act={act} init={init}>
        <Field role="user" as="Input" path="user" placeholder="user"></Field>
        <Field role="age" as="Input" path="age" placeholder="age"></Field>
      </Form>
    </div>
  );
};

export default App;
