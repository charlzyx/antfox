import { Button, Checkbox, Col, Row } from 'antd';
import { Field, Form, useAffect } from 'antfox';
import React, { useCallback, useEffect } from 'react';

import * as Yup from 'yup';

const init = {
  username: '',
  toggle: true,
  password: '',
};

const App = () => {
  const act = useAffect<typeof init>(($) => {
    $.change().subscribe((args) => {
      console.log('$change#args', args);
    });
    $.change('username').subscribe((args) => {
      console.log('username$change#args', args);
    });
    $.init().subscribe((args) => {
      console.log('$init#args', args);
    });
    $.mounted('password').subscribe((args) => {
      console.log('password.$mounted#args', args);
    });
    $.unmount('password').subscribe((args) => {
      console.log('password.$unmount#args', args);
    });
    $.mounted().subscribe((args) => {
      console.log('$mounted#args', args);
    });
    $.unmount().subscribe((args) => {
      console.log('$unmount#args', args);
    });
    $.reset().subscribe((args) => {
      console.log('$reset#args', args);
    });
    $.destroy().subscribe((args) => {
      console.log('$destory#args', args);
    });
  });

  useEffect(() => {
    // 并不建议单独使用, 不如直接useAffect
    act.watch$.change().subscribe((args) => {
      console.log('act.watch$change#args', args);
    });
    act.watch$.init().subscribe((args) => {
      console.log('act.watch$init#args', args);
    });
    act.watch$.mounted().subscribe((args) => {
      console.log('act.watch$mounted#args', args);
    });
    act.watch$.unmount().subscribe((args) => {
      console.log('act.watch$unmount#args', args);
    });
    act.watch$.reset().subscribe((args) => {
      console.log('act.watch$reset#args', args);
    });
    act.watch$.destroy().subscribe((args) => {
      console.log('act.watch$destory#args', args);
    });
  }, [act]);

  const checking = useCallback(() => {
    act.checking().then((data) => {
      console.log('checking.then ', data);
    });
  }, [act]);

  const trimThenChecking = useCallback(() => {
    act.trim();
    act.checking().then((data) => {
      console.log('after trim checking.then ', data);
    });
  }, [act]);

  const reset = useCallback(() => {
    act.reset();
  }, [act]);

  const put = useCallback(() => {
    act.put((draft) => {
      draft.username = 'byput';
    });
  }, [act]);

  const got = useCallback(() => {
    console.log(act.got());
  }, [act]);

  return (
    <div>
      <div></div>
      <Form act={act} trigger="onChange" init={init}>
        <Field
          as="Input"
          path="username"
          placeholder="这里填写用户名"
          label="用户名"
          rule={Yup.string().max(6).min(1)}
        ></Field>
        <Field
          path="toggle"
          label="toggle password"
          as={({ value, onChange }) => {
            return (
              <Checkbox
                value={value}
                onChange={(e) => onChange!(e.target.checked)}
              ></Checkbox>
            );
          }}
        ></Field>
        <Field
          as="Input"
          path="password"
          placeholder="这里填写密码"
          label="密码"
          effect={({ affect, setup }) => {
            affect.change('toggle').subscribe(({ value }) => {
              setup((s) => {
                s.visible = !!value;
              });
            });
          }}
          rule={Yup.string().max(6).min(1)}
        ></Field>
      </Form>
      <Row gutter={8}>
        <Col>
          <Button onClick={put}>act.put</Button>
        </Col>
        <Col>
          <Button onClick={got}>act.got</Button>
        </Col>
        <Col>
          <Button onClick={reset}>act.reset</Button>
        </Col>
        <Col>
          <Button onClick={checking}>act.checking</Button>
        </Col>
        <Col>
          <Button onClick={trimThenChecking}>act.trim & act.checking</Button>
        </Col>
      </Row>
    </div>
  );
};

export default App;
