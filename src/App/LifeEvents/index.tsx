import 'antd/dist/antd.css';
import React from 'react';

import InitOnField from './Init/InitOnField';
import InitOnForm from './Init/InitOnForm';
import InitOnMix from './Init/InitOnMix';
import MountedAct from './Mounted/MountedAct';
import MountedField from './Mounted/MountedField';
import UnmountAct from './Unmount/UnmountAct';
import UnmountField from './Unmount/UnmountField';
import ChangeAct from './Change/ChangeAct';
import ChangeField from './Change/ChangeField';
import ResetAct from './Reset/ResetAct';
import ResetField from './Reset/ResetField';
import LazyAffect from './LazyAffect/LazyAffect';
import Destroy from './Destroy/Destroy';

const App = () => {
  return (
    <div>
      <h1>LifyEvents</h1>
      <h2>InitOnField</h2>
      <InitOnField></InitOnField>
      <h2>InitOnForm</h2>
      <InitOnForm></InitOnForm>
      <h2>InitOnMix</h2>
      <InitOnMix></InitOnMix>
      <h2>MountedAct</h2>
      <MountedAct></MountedAct>
      <h2>MountedField</h2>
      <MountedField></MountedField>
      <h2>UnmountAct</h2>
      <UnmountAct></UnmountAct>
      <h2>UnmountField</h2>
      <UnmountField></UnmountField>
      <h2>ChangeAct</h2>
      <ChangeAct></ChangeAct>
      <h2>ChangeField</h2>
      <ChangeField></ChangeField>
      <h2>ResetAct</h2>
      <ResetAct></ResetAct>
      <h2>ResetField</h2>
      <ResetField></ResetField>
      <h2>LazyAffect</h2>
      <LazyAffect></LazyAffect>
      <h2>Destroy</h2>
      <Destroy></Destroy>
    </div>
  );
};

export default App;
