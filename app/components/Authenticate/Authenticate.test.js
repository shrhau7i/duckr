import React from 'react';
import ReactDOM from 'react-dom';
import Authenticate from './Authenticate.js';

describe('Authenticate', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Authenticate/>, div);
    });
});