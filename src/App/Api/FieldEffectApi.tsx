import { Button, Checkbox, Col, Row } from 'antd';
import { Field, Form, useAffect } from 'antfox';
import React, { useCallback } from 'react';
import * as Yup from 'yup';

const init = {
  username: '',
  dynamic: '',
};

const App = () => {
  const act = useAffect();

  const toSubmit = useCallback(() => {
    act.checking().then((data) => {
      console.log('saving...', data);
    });
  }, [act]);

  const toReset = useCallback(() => {
    act.reset();
  }, [act]);

  return (
    <div>
      <div></div>
      <Form act={act} init={init}>
        <Field
          as="Input"
          path="username"
          placeholder="这里填写用户名"
          label="用户名"
        ></Field>
        <Field
          as={(props) => {
            return (
              <Checkbox
                checked={props.value}
                onChange={(e) => props.onChange!(e.target.checked)}
              ></Checkbox>
            );
          }}
          path="toggle"
          label="是否启用密码"
        ></Field>
        <Field
          as="Input"
          path="password"
          placeholder="密码"
          visible={false}
          label="密码"
          effect={({ affect, setup }) => {
            let prev = '';
            affect.change('toggle').subscribe(({ value }) => {
              setup((s) => {
                s.visible = !!value;
                if (s.visible) {
                  console.log('prev', prev);
                  s.value = prev;
                } else {
                  prev = s.value;
                }
              });
            });
          }}
        ></Field>
        <Field
          as="Input"
          path="dynamic"
          placeholder="Effect 动态规则"
          label="动态规则"
          effect={({ on, setup }) => {
            on.change$().subscribe((v) => {
              if (v === 'dd') {
                setup((o) => {
                  o.rule = Yup.string();
                });
              } else {
                setup((o) => {
                  o.rule = Yup.number().max(100, '最大值 100 ');
                });
              }
            });
          }}
        ></Field>
      </Form>
      <Row gutter={8}>
        <Col>
          <Button onClick={toReset}>重 置</Button>
        </Col>
        <Col>
          <Button type="primary" onClick={toSubmit}>
            保 存
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default App;
