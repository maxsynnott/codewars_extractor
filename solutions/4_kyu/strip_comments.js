function solution(input, markers) {
  const regExp = new RegExp(`(\\${markers.join('|\\')}).*$`)
  return input.split('\n').map(s => s.replace(regExp, '').trim()).join('\n');
};
