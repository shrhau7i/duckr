import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home.js';
import renderer from 'react-test-renderer';

describe('Authenticate', () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Home/>, div);
  });

  it('renders a snapshot', () => {
    const tree = renderer.create(<Home/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});