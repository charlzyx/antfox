import { Field, Form, match, useAffect } from 'foxantd';
import _ from 'lodash';
import React, { useState } from 'react';

const init = {
  user: 'inituser',
  age: 'initage',
  fllowage: '',
  fllowuser: '',
};

const App = () => {
  const [visible, setVisible] = useState(false);
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
      <button
        role="toggle"
        onClick={() => {
          setVisible((x) => !x);
        }}
      >
        toggle
      </button>
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
      {visible ? (
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
      ) : null}
    </div>
  );
};

export default App;
