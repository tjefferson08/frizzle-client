import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import StopCard from './StopCard';

test('should render a li', () => {
  const renderer = ReactTestUtils.createRenderer();
  const fakeStop = {
    stop_name: 'Stop 1',
    stop_id: '123',
    stop_distance: 1001.1234,
    route_names: [ 10, 20, 30 ]
  };

  renderer.render(<StopCard {...fakeStop} />)
  const result = renderer.getRenderOutput();

  expect(result.type).toBe('li');
  expect(result).toMatchSnapshot();
});

