import React, { FC } from 'react';
import { Form, Field, useAffect } from 'antfox';
import * as Yup from 'yup';
import { CloseOutlined, PlusOutlined } from '@ant-design/icons';
import moment from 'moment';

import { Row, Col, Button, Popconfirm } from 'antd';

const init = () => {
  return {
    username: '',
    password: '',
    withGender: false,
    gender: '',
    birthday: '',
    links: [],
  };
};

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
        <Button>
          <PlusOutlined></PlusOutlined>
          添加联系方式
        </Button>
      </Popconfirm>
    </Row>
  );
};

const App = () => {
  const act = useAffect<ReturnType<typeof init>>();

  return (
    <div>
      <Form act={act} layout="vertical" init={init()}>
        <Field
          as="Input"
          path="username"
          label="用户名"
          placeholder="在此输入用户名"
          rule={Yup.string().max(16, '最多16个字').required('请输入用户名')}
        ></Field>
        <Field
          as="Password"
          path="password"
          label="密码"
          placeholder="在此输入密码"
          rule={Yup.string().max(16, '最多16个字符').min(4, '最少4个字符')}
        ></Field>
        <Field
          as="Switch"
          path="withGender"
          remap={{
            value: 'checked',
          }}
          label="是否启用性别"
        ></Field>
        <Field
          as="RadioGroup"
          label="性别"
          effect={({ listen, setup }) => {
            listen.init().subscribe(({ data }) => {
              setup((s) => {
                s.visible = data.withGender;
              });
            });
            listen.change('withGender').subscribe(({ value }) => {
              setup((s) => {
                s.visible = value;
              });
            });
          }}
          options={[
            { label: 'man', value: 'man' },
            { label: 'woman', value: 'woman' },
            { label: 'unknown', value: 'unknown' },
            {
              label: 'People who post helpful response on Stack Overflow',
              value: 'god',
            },
          ]}
        ></Field>
        <Field
          as="DatePicker"
          style={{ width: '100%' }}
          label="出生日期"
          path="birthday"
          normalize={(x) => (x ? moment(x) : x)}
          serialize={(v) => {
            return v ? v.valueOf() : v;
          }}
        ></Field>
        <Field
          label="联系我"
          path="links"
          withoutLabel
          rule={Yup.array().max(3, '最多录入3条')}
          as={({ value, arrays }) => {
            return (
              <div>
                <div style={{ padding: '16px 0' }}>
                  <Appender onSubmit={(v) => arrays?.push(v)}></Appender>
                </div>
                <div>
                  {Array.isArray(value)
                    ? value.map((x, idx) => {
                        return (
                          <Row key={idx} justify="space-between">
                            <Col>
                              <Field
                                withoutLabel
                                as="RadioGroup"
                                path={`links[${idx}].type`}
                                options={[
                                  { label: '手机号', value: 'phone' },
                                  { label: '微信', value: 'wechat' },
                                  { label: 'QQ', value: 'qq' },
                                ]}
                              ></Field>
                            </Col>
                            <Col>
                              <Field
                                as="Input"
                                path={`links[${idx}].value`}
                                rule={Yup.string().required('此字段为必填')}
                              ></Field>
                            </Col>
                            <Col>
                              <Button
                                onClick={() => {
                                  arrays?.remove(idx);
                                }}
                              >
                                <CloseOutlined />
                                删除
                              </Button>
                            </Col>
                          </Row>
                        );
                      })
                    : 'no data'}
                </div>
              </div>
            );
          }}
        ></Field>
        <Row justify="end" gutter={16}>
          <Col>
            <Button
              onClick={() => {
                act.reset();
              }}
            >
              重置
            </Button>
          </Col>
          <Col>
            <Button
              type="primary"
              onClick={() => {
                act.trim();
                act.checking().then((data) => {
                  console.log('save....', data);
                });
              }}
            >
              提交
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default App;
