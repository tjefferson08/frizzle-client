import ACTION_TYPES from '../actions';
import showMap from './showMap';

test('default state should be false', () => {
  expect(
    showMap(undefined, { type: 'SOME TYPE' })
  ).toBe(false);
});

test('toggle map should toggle map', () => {
  expect(
    showMap(false, { type: ACTION_TYPES.TOGGLE_MAP })
  ).toBe(true);

  expect(
    showMap(true, { type: ACTION_TYPES.TOGGLE_MAP })
  ).toBe(false);
});

test('should leave showMap alone for other actions', () => {
  expect(
    showMap(false, { type: 'OTHER' })
  ).toBe(false);

  expect(
    showMap(true, { type: 'OTHER' })
  ).toBe(true);
});
