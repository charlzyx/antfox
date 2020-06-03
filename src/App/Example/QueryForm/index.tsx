import { Button, Table, Col, Row, message } from 'antd';
import { Field, Form, useAffect } from 'antfox';
import moment from 'moment';
import React, { useState, useEffect, useCallback } from 'react';
import * as Yup from 'yup';
import { api, TSearch, init } from './config';

const App = () => {
  const [list, setList] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const act = useAffect<TSearch>();
  const trigger = useCallback(() => {
    const s = act.got();
    setLoading(true);
    api
      .get(s)
      .then((resp) => {
        setList(resp.list);
        setLoading(false);
        act.put((d) => {
          d.total = resp.total;
        });
      })
      .catch(() => {
        setLoading(false);
      });
  }, [act]);

  return (
    <div>
      <Form act={act} init={init()}>
        <Field as="Input" label="KW" path="kw"></Field>
        <Field as="Input" label="User" path="user"></Field>
        <Field as="DatePicker" label="Date" path="date"></Field>
        <Row justify="end" gutter={16}>
          <Col>
            <Button
              onClick={() => {
                act.reset();
              }}
            >
              重置
            </Button>
            <Button type="primary" onClick={trigger}>
              查询
            </Button>
          </Col>
        </Row>
        <Field
          as={({ value }) => {
            return <div>{value}</div>;
          }}
          path="total"
        ></Field>
        <Table
          loading={loading}
          dataSource={list}
          columns={[
            {
              title: 'id',
              key: 'id',
              dataIndex: 'id',
            },
            {
              title: 'title',
              key: 'title',
              dataIndex: 'title',
            },
          ]}
          pagination={false}
        ></Table>

        <Field
          as="Pager"
          effect={({ on }) => {
            on.change$().subscribe(() => {
              trigger();
            });
          }}
          path={`[["size","size"],["page","page"], ["total","total"]]`}
        ></Field>
      </Form>
    </div>
  );
};

export default App;
