import { Button, Col, Row } from 'antd';
import { FFC, Field } from 'antfox';
import React from 'react';
import * as Yup from 'yup';
import Appender from './Appender';

const LinkEditor: FFC = ({ value, arrays }) => {
  return (
    <div>
      <div style={{ padding: '16px 0' }}>
        <Appender onSubmit={(v) => arrays?.push(v)}></Appender>
      </div>
      <div>
        {Array.isArray(value)
          ? value.map((x, idx) => {
              return (
                <Row
                  key={idx}
                  justify="space-between"
                  style={{ paddingRight: '32px' }}
                >
                  <Col>
                    <Field
                      noLabel
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
};

export default LinkEditor;
