import ACTION_TYPES from '../actions';
import stops from './stops';

test('default state should be empty array', () => {
  expect(
    stops(undefined, { type: 'SOME TYPE' })
  ).toEqual([]);
});

test('fetch nearby stops success should return stops array', () => {
  const nearbyStops = [ 'nearby stop 1', 'nearby stop 2' ];
  const newState = stops(
    [],
    {
      type: ACTION_TYPES.FETCH_NEARBY_STOPS_SUCCESS,
      stops: nearbyStops
    }
  );

  expect(newState).toEqual(nearbyStops);
});

test('should leave stops array alone for other actions', () => {
  const fakeStops = ['hello', 'world'];
  expect(
    stops(fakeStops, { type: 'OTHER' })
  ).toEqual(
    fakeStops
  );
});
