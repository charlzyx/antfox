import { Field, Form } from 'antfox';
import React from 'react';

const init = {
  user: 'inituser',
  age: 'initage',
};

const App = () => {
  return (
    <div>
      <Form init={init}>
        <Field
          effect={({ on }) => {
            console.log('user#effect');
            on.mounted$().subscribe((v) => {
              console.log('expect', 'toEqual', v, init.user, 'user#effect');
            });
          }}
          role="user"
          as="Input"
          path="user"
          placeholder="user"
        ></Field>
        <Field
          effect={({ on }) => {
            console.log('age#effect');
            on.mounted$().subscribe((v) => {
              console.log('expect', 'toEqual', v, init.age, 'age#effect');
            });
          }}
          role="age"
          as="Input"
          path="age"
          placeholder="age"
        ></Field>
      </Form>
    </div>
  );
};

export default App;
