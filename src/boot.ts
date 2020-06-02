import { settings, TValidator } from 'usefox';
const validtor: TValidator = ({ value, rule, path, rules, data, el }) => {
  if (rule) {
    const schema = rule;
    return schema
      .validate(value.current)
      .then(() => {
        return '验证通过';
      })
      .catch((err) => {
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
