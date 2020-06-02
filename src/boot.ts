import { settings, TValidator } from 'usefox';
const validtor: TValidator = ({ value, rule, path, rules, data, el }) => {
  console.log('validator:::' + path + '//', value, rule);
  if (rule) {
    const schema = rule;
    return schema
      .validate(value.current)
      .then(() => {
        console.log('validator::: WTFFF 通过' + path + '//', value, rule);
        return '验证通过';
      })
      .catch((err) => {
        console.log('validator::: WTFFF 不通过' + path + '//', value, rule);
        throw err.message;
      });
  } else {
    const schema = rules;
    if (!schema) {
      return Promise.resolve('不需要验证');
    }
    return schema
      .validateAt(path, data.current)
      .then(() => {
        return '验证通过';
      })
      .catch((err) => {
        throw err.message;
      });
  }
};

settings.set.validator(validtor);
