import { Button, Col, Row } from 'antd';
import { Field, Form, useAffect } from 'antfox';
import React, { FC, useCallback } from 'react';
import * as Yup from 'yup';

const init = {
  username: '',
  customefc: '',
  customeclass: '',
  renderprops: '',
  arrayrender: [],
  arrayObjectRender: [],
  pager: {
    page: 1,
    size: 10,
    total: 100,
  },
};

class CustomeClassComp extends React.Component<{
  value?: string;
  onChange?: (x: string) => void;
  suffix?: string;
}> {
  render() {
    const { value, onChange, suffix } = this.props;
    return (
      <div>
        <input
          value={value}
          onInput={(e) => {
            if (onChange) {
              onChange(e.currentTarget.value);
            }
          }}
          type="text"
        />
        {suffix}
      </div>
    );
  }
}

const CustomeField: FC<{
  value?: string;
  onChange?: (x: string) => void;
  prefix?: string;
}> = ({ value, prefix, onChange }) => {
  return (
    <div>
      {prefix}
      <input
        value={value}
        onInput={(e) => {
          if (onChange) {
            onChange(e.currentTarget.value);
          }
        }}
        type="text"
      />
    </div>
  );
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
      <Form act={act} trigger="onChange" init={init}>
        <h2>as</h2>
        <h4>Build-Ins</h4>
        <Field
          as="Input"
          path="username"
          placeholder="这里填写用户名"
          label="用户名"
          rule={Yup.string().max(6).min(1)}
        ></Field>
        <Field as="Pager" path="pager" label="页码"></Field>
        <h4>Function Component</h4>
        <Field
          as={CustomeField}
          prefix="$: "
          path="customefc"
          label="customeFC"
          rule={Yup.number()}
        ></Field>
        <h4>Class Component</h4>
        <Field
          as={CustomeClassComp}
          suffix=".00$"
          path="customeclass"
          label="customeClass"
          rule={Yup.number()}
        ></Field>
        <h4>Render Props</h4>
        <Field
          as={(props) => {
            return (
              <input
                value={props.value}
                onBlur={props.onBlur}
                onFocus={props.onFocus}
                onChange={props.onChange}
              ></input>
            );
          }}
          path="renderprops"
          label="renderprops"
        ></Field>
        <h4>Array Render Props</h4>
        <Field
          as={({ value, arrays }) => {
            return Array.isArray(value) ? (
              <div>
                <button onClick={() => arrays?.push('')}>append</button>
                <div>
                  {value.map((x, idx) => (
                    <div key={idx}>
                      <input
                        value={x}
                        onChange={(e) => arrays?.update(idx, e.target.value)}
                      ></input>
                      <button onClick={() => arrays?.remove(idx)}>
                        delete
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ) : null;
          }}
          path="arrayrender"
          label="arrayrender"
        ></Field>
        <h4>Array Render Props #update object </h4>
        <Field
          trigger="onBlur"
          rule={Yup.array().of(
            Yup.object().shape({
              a: Yup.number().max(4),
              b: Yup.number().max(4),
            }),
          )}
          as={({ value, arrays, onBlur }) => {
            return Array.isArray(value) ? (
              <div onBlur={onBlur}>
                <button onClick={() => arrays?.push({ a: '', b: '' })}>
                  append
                </button>
                <div>
                  {value.map((x, idx) => (
                    <div key={idx}>
                      <input
                        value={x.a}
                        onChange={(e) =>
                          arrays?.update(idx, (draft: any) => {
                            draft.a = e.target.value;
                          })
                        }
                      ></input>
                      <input
                        value={x.b}
                        onChange={(e) => {
                          arrays?.update(idx, (draft: any) => {
                            draft.b = e.target.value;
                          });
                        }}
                      ></input>
                      <button onClick={() => arrays?.remove(idx)}>
                        delete
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ) : null;
          }}
          path="arrayObjectRender"
          label="arrayObjectRender"
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
