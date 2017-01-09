import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import StopDetails from './StopDetails';

test('should render a UL of stops', () => {
  const renderer = ReactTestUtils.createRenderer();
  renderer.render(<StopDetails params={ { stop_id: "123" } } />);
  const result = renderer.getRenderOutput();

  expect(result.type).toBe('div');
  expect(result).toMatchSnapshot();
});

