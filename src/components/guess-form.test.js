import React from 'react';

import GuessForm from './guess-form';

import {shallow, mount} from 'enzyme';

describe('<GuessForm />', () => {
	it('Renders without crashing', () => {
		shallow(<GuessForm />);
	});


	it('should fire the onGuess callback when the form is submitted', () => {
		const callback = jest.fn();
		const wrapper = mount(<GuessForm onGuess={callback} />);
			const value = '';
			wrapper.find('input[type="text"]').node.value = value;
	        wrapper.simulate('submit');
	        expect(callback).toHaveBeenCalledWith(value);
	})

}) 

