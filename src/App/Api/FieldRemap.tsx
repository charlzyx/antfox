import { Button, Checkbox, Col, Row } from 'antd';
import { Field, Form, useAffect } from 'antfox';
import React, { useCallback } from 'react';

const init = {
  fntoggle: false,
  remaptoggle: false,
  remapdomtoggle: false,
};

const App = () => {
  const act = useAffect(($) => {
    $.change().subscribe((args) => {
      console.log('args', args);
    });
  });

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
          as={(props) => {
            return (
              <Checkbox
                checked={props.value}
                onChange={(e) => props.onChange!(e.target.checked)}
              ></Checkbox>
            );
          }}
          path="fntoggle"
          label="函数/checkbox"
        ></Field>
        <Field
          remap={{
            value: 'checked',
          }}
          as={Checkbox}
          path="remaptoggle"
          label="remap/checkbox"
        ></Field>
        <Field
          remap={{
            value: 'checked',
            onChange: 'onChecked',
          }}
          as={(props) => <input {...props} type="checkbox"></input>}
          path="remapdomtoggle"
          label="remap/dom/checkbox"
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
