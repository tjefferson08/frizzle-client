import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import NearbyStops from './NearbyStops';

test('should render a li', () => {
  const renderer = ReactTestUtils.createRenderer();
  renderer.render(<NearbyStops />)
  const result = renderer.getRenderOutput();

  expect(result.type).toBe('div');
  expect(result).toMatchSnapshot();
});

