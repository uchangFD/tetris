const copyData = (data) => {
  if (typeof data !== "object") {
    // primitive type
    return data;
  }
  // reference type
  if (Array.isArray(data)) {
    return data.map((_data) => {
      return copyData(_data);
    });
  }
  const newObj = {};

  for (let prop in data) {
    if (data.hasOwnProperty(prop)) {
      newObj[prop] = copyData(data[prop]);
    }
  }

  return newObj;
};

function _(data) {
  if (!(this instanceof _)) {
    return new _(data);
  }

  this.data = copyData(data);
  this.newData = undefined;

  this.chain = (...funcs) => {
    let _copyData = copyData(this.data);
    const newData = funcs.reduce(
      (acc, func) => (func !== undefined ? func(acc, copyData(this.data)) : acc),
      _copyData,
    );

    this.newData = newData;
    return this;
  };

  this.value = () => {
    const value = copyData(this.newData);

    this.newData = undefined;

    return value;
  };
}

export default _;
