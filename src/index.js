export const norm2Store = (data, scheme) => {
  const calcValue = (v, d) =>
    v.split(".").reduce((resV, vv) => (resV = resV[vv]), d);

  return scheme.reduce((res, value) => {
    const resV = calcValue(value[0], data);
    const arrFields = (value[1] || value[0]).split(".");

    arrFields.reduce((resObj, vv, idx) => {
      if (idx === arrFields.length - 1) {
        resObj[vv] = resV === undefined ? value[2] : resV;
        return resObj;
      } else {
        resObj[vv] = {};
        return resObj[vv];
      }
    }, res);

    return res;
  }, {});
};

export const norm2Server = (data, scheme) =>
  norm2Store(
    data,
    scheme.map(value => (value[1] ? [value[1], value[0]] : [value[0]]))
  );
