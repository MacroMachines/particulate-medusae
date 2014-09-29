var Links = App.Links = {};

Links.loop = function (index, howMany, buffer) {
  for (var i = 0; i < howMany - 1; i ++) {
    buffer.push(index + i, index + i + 1);
  }
  buffer.push(index, index + howMany - 1);
  return buffer;
};

Links.rings = function (index0, index1, howMany, buffer) {
  for (var i = 0; i < howMany; i ++) {
    buffer.push(index0 + i, index1 + i);
  }
  return buffer;
};

Links.ringsAsym = function (index0, index1, step1, howMany, buffer) {
  for (var i = 0; i < howMany; i ++) {
    buffer.push(index0 + i, index1 + i * step1);
  }
  return buffer;
};

Links.radial = function (indexCenter, index, howMany, buffer) {
  for (var i = 0; i < howMany; i ++) {
    buffer.push(indexCenter, index + i);
  }
  return buffer;
};

Links.radial2 = function (indexCenter, index, howMany, buffer) {
  for (var i = 0; i < howMany - 1; i ++) {
    buffer.push(index + i, indexCenter, index + i + 1);
  }
  buffer.push(index + howMany - 1, indexCenter, index);
  return buffer;
};

Links.radial2(0, 1, 3, []);

Links.loop3 = function (index, howMany, buffer) {
  for (var i = 0; i < howMany - 2; i ++) {
    buffer.push(index + i, index + i + 1, index + i + 2);
  }
  buffer.push(index + howMany - 2, index + howMany - 1, index);
  buffer.push(index + howMany - 1, index, index + 1);
  return buffer;
};