import React from 'react';

import GuessSection from './guess-section';

import {shallow, mount} from 'enzyme';

describe('<GuessSection />', () => {
	it('Renders without crashing', () => {
		shallow(<GuessSection />);
	});
});