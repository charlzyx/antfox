import { Button, Radio } from 'antd';
import { Field, Form, useAffect } from 'foxantd';
import React, { useCallback, useState } from 'react';
import * as Yup from 'yup';

const init = {
  username: '',
  password: '',
  desc: '',
};

const { Group } = Radio;

const App = () => {
  const act = useAffect();
  const [disabled, setDisabled] = useState(false);
  const [trigger, setTrigger] = useState<'both' | 'onChange' | 'onBlur'>(
    'onChange',
  );

  const toSubmit = useCallback(() => {
    act.checking().then((data) => {
      console.log('saving...', data);
    });
  }, [act]);

  const toReset = useCallback(() => {
    act.reset();
  }, [act]);

  const toggleDisable = useCallback(() => {
    setDisabled((x) => !x);
  }, []);

  return (
    <div>
      <div>
        <label>
          <div>disabled:</div>
          <Button type="primary" onClick={toggleDisable}>
            toggle disabled
          </Button>
        </label>
        <label>
          <div>trigger:</div>
          <Group
            value={trigger}
            onChange={(x) => {
              setTrigger(x.target.value);
            }}
          >
            <Radio value={'both'}>both</Radio>
            <Radio value={'onChange'}>onChange</Radio>
            <Radio value={'onBlur'}>onBlur</Radio>
          </Group>
        </label>
      </div>
      <Form trigger={trigger} act={act} disabled={disabled} init={init}>
        <Field
          as="Input"
          path="username"
          placeholder="这里填写用户名"
          label="用户名"
          rule={Yup.string().max(6).min(1)}
        ></Field>
        <Field
          as="Password"
          path="password"
          placeholder="这里填写密码"
          label="密码"
          rule={Yup.string().min(1).max(6)}
        ></Field>
        <Field
          as="Input"
          path="desc"
          placeholder="优先级更高的 trigger on Field"
          label="个人介绍"
          trigger="onBlur"
          rule={Yup.string().max(6).min(1)}
        ></Field>
        <Field
          as="Input"
          path="desc"
          placeholder="优先级更高的 disabled on Field"
          disabled
          label="神秘代码"
          rule={Yup.string().max(6).min(1)}
        ></Field>
      </Form>
      <Button onClick={toReset}>重 置</Button>
      <Button onClick={toSubmit}>保 存</Button>
    </div>
  );
};

export default App;
