import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import StopDetails from './StopDetails';

test('should render a UL of stops', () => {
  const renderer = ReactTestUtils.createRenderer();
  const fakeStops = [{ stop_name: 'Stop 1' }, { stop_name: 'Stop 2' }];
  renderer.render(<StopDetails stop_id="123" />);
  const result = renderer.getRenderOutput();

  expect(result.type).toBe('div');
  expect(result).toMatchSnapshot();
});

