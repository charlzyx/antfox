import { Button, Popconfirm, Row } from 'antd';
import { Field, Form, useAffect } from 'antfox';
import React, { FC } from 'react';

type Link = { type: string; value: string };
const Appender: FC<{
  onSubmit: (val: Link) => void;
}> = ({ onSubmit }) => {
  const act = useAffect<Link>();
  return (
    <Row justify="end">
      <Popconfirm
        onCancel={() => {
          act.reset();
        }}
        onConfirm={() => {
          act.trim();
          act.checking().then((next) => {
            onSubmit({ ...next });
            act.reset();
          });
        }}
        title={
          <Form act={act} layout="vertical">
            <Field
              as="RadioGroup"
              label="类型"
              path="type"
              options={[
                { label: '手机号', value: 'phone' },
                { label: '微信', value: 'wechat' },
                { label: 'QQ', value: 'qq' },
              ]}
            ></Field>
            <Field as="Input" path="value" label="值"></Field>
          </Form>
        }
      >
        <Button>添加联系方式</Button>
      </Popconfirm>
    </Row>
  );
};

export default Appender;
