import React from 'react';

import GuessCount from './guess-count';

import {shallow, mount} from 'enzyme';

describe('<GuessCount />', () => {
	it('Render without crashing', () => {
		shallow(<GuessCount />);
	});


	it('renders the count', () => {
		const text = 'Guess #!';
		const wrapper = shallow(<GuessCount text={text} />);
		expect(wrapper.text()).toEqual(text);
	});
});