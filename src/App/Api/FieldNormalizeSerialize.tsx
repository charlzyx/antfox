import { Button, Col, Row } from 'antd';
import { Field, Form, useAffect } from 'antfox';
import moment, { Moment } from 'moment';
import React, { useCallback } from 'react';

const init = {
  timestamp: undefined,
  antimestamp: undefined,
  range: [],
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
          normalize={(x) => (x ? moment(x).format('YYYY-MM-DD') : x)}
          serialize={(e) => {
            return +moment(e.target.value);
          }}
          as={(props) => <input {...props} type="date"></input>}
          path="timestamp"
          label="dom/timestamp <-> Date"
        ></Field>
        <Field
          normalize={(x) => (x ? moment(x) : x)}
          serialize={(v) => {
            return v ? v.valueOf() : v;
          }}
          as="DatePicker"
          path="antimestamp"
          label="antd/DataPicker/timestamp <-> Date"
        ></Field>
        <Field
          normalize={(x) => {
            return Array.isArray(x)
              ? [x[0] ? moment(x[0]) : x[0], x[1] ? moment(x[1]) : x[1]]
              : [];
          }}
          serialize={(v) => {
            return v ? v.map((x: Moment) => x.valueOf()) : v;
          }}
          as="RangePicker"
          path="range"
          label="antd/DataRangePicker/timestamp[] <-> Date[]"
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
