import { FFC, Field } from 'antfox';
import moment, { Moment } from 'moment';
import React from 'react';

const CardBlock: FFC<{ title: string }> = ({ title }) => (
  <div>
    <h1>{title}</h1>
    <Field label="卡号" as="Input" path="card.no"></Field>
    <Field
      label="有效期"
      as="RangePicker"
      normalize={(x) => {
        return Array.isArray(x)
          ? [x[0] ? moment(x[0]) : x[0], x[1] ? moment(x[1]) : x[1]]
          : [];
      }}
      serialize={(v) => {
        return v ? v.map((x: Moment) => x.valueOf()) : v;
      }}
      path={`[["[0]","card.from"],["[1]","card.to"]]`}
    ></Field>
  </div>
);

export default CardBlock;
