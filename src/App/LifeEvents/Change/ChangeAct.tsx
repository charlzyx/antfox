import { Field, Form, match, useAffect } from 'antfox';
import _ from 'lodash';
import React from 'react';

const init = {
  user: 'user',
  fllowuser: '',
  age: 'age',
  fllowage: '',
};

const App = () => {
  const act = useAffect<typeof init>(($) => {
    $.change('age').subscribe(({ value }) => {
      act.put((d) => {
        d.fllowage = value;
      });
    });
    $.change().subscribe(({ path, value, data }) => {
      console.log('expect', 'toEqual', value, _.get(data, path));
      console.log('path', path);
      if (match('user', path)) {
        act.put((d) => {
          d.fllowuser = value;
        });
      }
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
      <Form act={act} init={init}>
        <Field role="user" as="Input" path="user" placeholder="user"></Field>
        <Field role="age" as="Input" path="age" placeholder="age"></Field>
        <Field
          role="fllowuser"
          as="Input"
          path="fllowuser"
          placeholder="fllowuser"
        ></Field>
        <Field
          role="fllowage"
          as="Input"
          path="fllowage"
          placeholder="fllowage"
        ></Field>
      </Form>
    </div>
  );
};

export default App;
