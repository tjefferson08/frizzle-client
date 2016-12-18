import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import Stop from './Stop';

test('should render a li', () => {
  const renderer = ReactTestUtils.createRenderer();
  const fakeStop = {
    stop_name: 'Stop 1',
    stop_id: '123',
    stop_distance: 1001.1234
  };

  renderer.render(<Stop {...fakeStop} />)
  const result = renderer.getRenderOutput();

  expect(result.type).toBe('li');
  expect(result).toMatchSnapshot();
});

