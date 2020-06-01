import { Field, Form } from 'foxantd';
import React from 'react';

const init = {
  input: '',
  number: 0,
  datepicker: '',
};

const App = () => {
  return (
    <div>
      <p>Build-Ins</p>
      <Form init={init}>
        <Field role="input" as="Input" path="input" placeholder="Input"></Field>
        <Field
          role="number"
          as="InputNumber"
          path="age"
          placeholder="age"
        ></Field>
        <Field
          role="datepicker"
          as="DatePicker"
          path="datepicker"
          placeholder="DatePicker"
        ></Field>
      </Form>
    </div>
  );
};

export default App;
