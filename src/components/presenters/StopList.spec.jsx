import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import StopList from './StopList';

test('should render a UL of stops', () => {
  const renderer = ReactTestUtils.createRenderer();
  const fakeStops = [{ stop_name: 'Stop 1' }, { stop_name: 'Stop 2' }];
  renderer.render(<StopList stops={fakeStops} />);
  const result = renderer.getRenderOutput();

  expect(result.type).toBe('ul');
  expect(result).toMatchSnapshot();
});

