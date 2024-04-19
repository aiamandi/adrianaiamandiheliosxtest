# Questionnaire Project

This project is a simple questionnaire application built with vite, React and Tailwind CSS.

# Running the project

In order to run the project locally, run npm run dev. I'm running localy node v18.17.1

# Notes

I have split out the questionnaire into different reusable components. If I had more time, I would have used different styling and split the project into even smaller components but since this is a small project and I won't be reusing the components anywhere else, I have only taken out the big ones.

I would have also added a basic unit test that would have been functional but here is an outline of a basic test.

import { render, fireEvent } from '@testing-library/react';
import Questionnaire from './Questionnaire';

test('renders questionnaire and handles user interaction', () => {
const handleAnswer = jest.fn();
const { getByText, getByLabelText } = render(
<Questionnaire handleAnswer={handleAnswer} />
);

// Check if the first question is rendered
expect(getByText('Question 1')).toBeInTheDocument();

// Simulate user selecting "Yes" for the first question
fireEvent.click(getByLabelText('Yes'));

// Check if the handleAnswer function was called with "Yes"
expect(handleAnswer).toHaveBeenCalledWith('Yes');

// Simulate user clicking the "Next" button
fireEvent.click(getByText('Next'));

// Check if the second question is rendered
expect(getByText('Question 2')).toBeInTheDocument();
});
