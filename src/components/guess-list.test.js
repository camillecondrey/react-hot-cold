import React from 'react';

import GuessList from './guess-list';

import {shallow, mount} from 'enzyme';

describe('<GuessList />', () => {
	it('Renders without crashing', () => {
		shallow(<GuessList guesses={[]} />);
	});


	
});


