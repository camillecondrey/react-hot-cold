import React from 'react';

import Header from './header';

import {shallow, mount} from 'enzyme';

describe('<Header />', () => {
	it('Renders without crashing', () => {
		shallow(<Header />);
	});
});