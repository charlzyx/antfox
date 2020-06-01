import { Field, Form, useAffect } from 'foxantd';
import React, { useState } from 'react';

const init = {
  user: 'inituser',
};

const App = () => {
  const [visible, setVisible] = useState(false);
  const [destroyed, setDestroyed] = useState(false);
  const act = useAffect<typeof init>(($) => {
    $.init().subscribe(() => {
      console.log('init$');
      setDestroyed(false);
    });
    $.destroy().subscribe(() => {
      setDestroyed(true);
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
      <div role="screen">{destroyed ? 'true' : 'false'}</div>
      <p>Form Destroy</p>
      {visible ? (
        <Form act={act} init={init}>
          <Field role="user" as="Input" path="user" placeholder="user"></Field>
        </Form>
      ) : null}
    </div>
  );
};

export default App;
