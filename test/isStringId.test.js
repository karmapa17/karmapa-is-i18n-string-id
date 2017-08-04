import test from 'ava';
import isStringId from './../src/isStringId';

test('isStringId should treat string123 as valid String ID', (t) => {
  t.is(isStringId('test123'), true);
});

test('isStringId should treat test123!@# as invalid String ID', (t) => {
  t.is(isStringId('test123!@#'), false);
});
