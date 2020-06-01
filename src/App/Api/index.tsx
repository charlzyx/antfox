import 'antd/dist/antd.css';
import React from 'react';

import FormApi from './FormApi';
import ActionApi from './ActionApi';
import FieldAsApi from './FieldAsApi';
import FieldEffectApi from './FieldEffectApi';
import FieldRemap from './FieldRemap';
import FieldNormalizeSerialize from './FieldNormalizeSerialize';
import Yup from './Yup';

const App = () => {
  return (
    <div>
      <h1>Api</h1>
      <h2>FormApi</h2>
      <FormApi></FormApi>
      <h2>FieldAsApi</h2>
      <FieldAsApi></FieldAsApi>
      <h2>ActionApi</h2>
      <ActionApi></ActionApi>
      <h2>FieldEffectApi</h2>
      <FieldEffectApi></FieldEffectApi>
      <h2>Yup</h2>
      <Yup></Yup>
      <h2>FieldRemap</h2>
      <FieldRemap></FieldRemap>
      <h2>FieldNormalizeSerialize</h2>
      <FieldNormalizeSerialize></FieldNormalizeSerialize>
    </div>
  );
};

export default App;
