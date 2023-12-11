import { render, screen } from '@testing-library/react';
import Card from './Card';
import '@testing-library/jest-dom';

it("renders without crashing", function() {
  render(<Card />);
});

it("matches snapshot", function() {
const { asFragment } = render(<Card caption="Test Caption" src="test.jpg" currNum={1} totalNum={5} />);
expect(asFragment()).toMatchSnapshot();
});

it("has correct text content", function() {
render(<Card caption="Test Caption" src="test.jpg" currNum={1} totalNum={5} />);
expect(screen.getByText("Test Caption")).toHaveTextContent("Test Caption");
});