import { settings, TValidator, VALIDSTATUS } from 'usefox';
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
      return Promise.resolve(VALIDSTATUS.CLEAR);
    }
    try {
      return schema
        .validateAt(path, data.current)
        .then(() => {
          return '验证通过';
        })
        .catch((err) => {
          throw err.message;
        });
    } catch (error) {
      const msg = error.message;
      if (/he schema does not contain the path:/.test(msg)) {
        return Promise.resolve(VALIDSTATUS.CLEAR);
      } else {
        return Promise.reject(error.message);
      }
    }
  }
};

settings.set.validator(validtor);
