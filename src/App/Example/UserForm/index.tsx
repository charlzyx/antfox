import { Button, Col, Row, message } from 'antd';
import { Field, Form, useAffect } from 'antfox';
import moment from 'moment';
import React, { useEffect } from 'react';
import * as Yup from 'yup';
import CardBlock from './comps/CardBlock';
import LinkEditor from './comps/LinkEditor';
import { effects, init, api } from './config';

type Data = ReturnType<typeof init>;
const App = () => {
  const act = useAffect<Data>();
  useEffect(() => {
    message.loading('数据装载中....');
    api.get().then((data: Data) => {
      message.destroy();
      act.reset({ ...init(), ...data });
    });
  }, [act]);

  return (
    <div>
      <Form
        rules={Yup.object({
          password: Yup.string()
            .max(16, '密码最多16个字')
            .min(2, '密码最少2个字')
            .required('请填写密码'),
          passwordConfirm: Yup.string()
            .oneOf([Yup.ref('password'), ''], '请确认密码填写一致')
            .required('请填写确认密码'),
        })}
        act={act}
        layout="vertical"
        init={init()}
      >
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
          trigger="onBlur"
          placeholder="在此输入密码"
        ></Field>
        <Field
          as="Password"
          path="passwordConfirm"
          label="重复密码"
          placeholder="请再次输入密码"
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
          as="Switch"
          path="withCard"
          remap={{
            value: 'checked',
          }}
          label="是否启用 Card"
        ></Field>
        <Field
          as="RadioGroup"
          label="性别"
          path="gender"
          effect={effects.gender}
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
          as={LinkEditor}
          label="联系我"
          path="links"
          init={[]}
          rule={Yup.array().max(3, '最多录入3条')}
        ></Field>
        <Field
          label="卡号信息, 注意没有 path"
          title="CardBolockTitle, 注意 CardBlock 内部的 keep"
          visible={false}
          as={CardBlock}
          effect={effects.card}
        ></Field>
        <Row justify="end" gutter={16}>
          <Col>
            <Button
              onClick={() => {
                act.reset({} as any);
              }}
            >
              清空
            </Button>
          </Col>
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
                  message.loading('保存中...');
                  api.put(data).then(() => {
                    message.destroy();
                  });
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
