import { Button, Table, Col, Row } from 'antd';
import { Field, Form, useAffect } from 'antfox';
import React, { useState, useEffect, useCallback } from 'react';
import { api, TItem, TSearch, init } from './config';

const App = () => {
  const [list, setList] = useState<TItem[]>([]);
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

  useEffect(() => {
    trigger();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Form act={act} init={init()}>
        <Row gutter={8}>
          <Col span={8}>
            <Field as="Input" label="Kw" path="kw"></Field>
          </Col>
          <Col span={8}>
            <Field as="Input" label="User" path="user"></Field>
          </Col>
          <Col span={8}>
            <Field
              style={{ width: '100%' }}
              as="DatePicker"
              label="Date"
              path="date"
            ></Field>
          </Col>
        </Row>
        <Row justify="end" gutter={16}>
          <Col>
            <Button onClick={() => act.reset()}>重置</Button>
          </Col>
          <Col>
            <Button type="primary" onClick={trigger}>
              查询
            </Button>
          </Col>
        </Row>
        <Field
          as={({ value }) => {
            return <div>共有 {value} 条数据</div>;
          }}
          path="total"
        ></Field>
        <Field
          noLabel
          as="Pager"
          loading={loading}
          effect={({ on }) => {
            on.change$().subscribe(() => {
              trigger();
            });
          }}
          path={`[["size","size"],["page","page"], ["total","total"]]`}
        ></Field>
        <Table
          rowKey="id"
          loading={loading}
          dataSource={list}
          columns={[
            {
              title: 'ID',
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
          noLabel
          style={{ padding: '8px 0' }}
          loading={loading}
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
