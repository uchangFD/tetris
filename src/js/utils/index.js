export default {
  chain: (data) => {
    return (...args) => {
      return args.reduce((prevData, func) => {
        return func(prevData);
      }, data);
    };
  },
};
