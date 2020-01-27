import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// input validation tests
test('if not a string, should return error message', () => {
  const { getByText } = render(<App input={12}/>);
  const divText = getByText('We only flip pancakes. Please try again.');
  expect(divText).toBeInTheDocument();
});

test('if incorrect string, should return error message', () => {
  const { getByText } = render(<App input='Test'/>);
  const divText = getByText('We only flip pancakes. Please try again.');
  expect(divText).toBeInTheDocument();
});

test('if empty string, should return error messag', () => {
  const { getByText } = render(<App input=''/>);
  const divText = getByText('We only flip pancakes. Please try again.');
  expect(divText).toBeInTheDocument();
});

test('if null, should return error message', () => {
  const { getByText } = render(<App input={null}/>);
  const divText = getByText('We only flip pancakes. Please try again.');
  expect(divText).toBeInTheDocument();
});
// end input validation tests

// flip entire stack tests
test('if no pancakes are blank side up, return stack', () => {
  const { getByText } = render(<App input='+++'/>);
  const divText = getByText(`Case +++: flips 0`);
  const spanText = getByText(`Finished stack +++`)
  expect(divText).toBeInTheDocument();
  expect(spanText).toBeInTheDocument();
});

test('if all pancakes are blank side up, flip stack', () => {
  const { getByText } = render(<App input='---'/>);
  const divText = getByText(`Case ---: flips 1`);
  const spanText = getByText(`Finished stack +++`)
  expect(divText).toBeInTheDocument();
  expect(spanText).toBeInTheDocument();
});
// end flip entire stack tests

test('if stack is -+-+---, should have 5 flips', () => {
  const { getByText } = render(<App input='-+-+---'/>);
  const divText = getByText(`Case -+-+---: flips 5`);
  const spanText = getByText(`Finished stack +++++++`)
  expect(divText).toBeInTheDocument();
  expect(spanText).toBeInTheDocument();
});

test('if stack is -+-+-+-, should have 7 flips', () => {
  const { getByText } = render(<App input='-+-+-+-'/>);
  const divText = getByText(`Case -+-+-+-: flips 7`);
  const spanText = getByText(`Finished stack +++++++`)
  expect(divText).toBeInTheDocument();
  expect(spanText).toBeInTheDocument();
});

test('if stack is --+++++, should have 1 flip', () => {
  const { getByText } = render(<App input='--+++++'/>);
  const divText = getByText(`Case --+++++: flips 1`);
  const spanText = getByText(`Finished stack +++++++`)
  expect(divText).toBeInTheDocument();
  expect(spanText).toBeInTheDocument();
});

test('if stack is +---, should have 2 flips', () => {
  const { getByText } = render(<App input='+---'/>);
  const divText = getByText(`Case +---: flips 2`);
  const spanText = getByText(`Finished stack ++++`)
  expect(divText).toBeInTheDocument();
  expect(spanText).toBeInTheDocument();
});

test('if stack is ---+, should have 1 flip', () => {
  const { getByText } = render(<App input='---+'/>);
  const divText = getByText(`Case ---+: flips 1`);
  const spanText = getByText(`Finished stack ++++`)
  expect(divText).toBeInTheDocument();
  expect(spanText).toBeInTheDocument();
});

test('if stack is +++---, should have 2 flips', () => {
  const { getByText } = render(<App input='+++---'/>);
  const divText = getByText(`Case +++---: flips 2`);
  const spanText = getByText(`Finished stack ++++++`)
  expect(divText).toBeInTheDocument();
  expect(spanText).toBeInTheDocument();
});

test('if stack is -, should have 1 flips', () => {
  const { getByText } = render(<App input='-'/>);
  const divText = getByText(`Case -: flips 1`);
  const spanText = getByText(`Finished stack +`)
  expect(divText).toBeInTheDocument();
  expect(spanText).toBeInTheDocument();
});

test('if stack is -+, should have 1 flips', () => {
  const { getByText } = render(<App input='-+'/>);
  const divText = getByText(`Case -+: flips 1`);
  const spanText = getByText(`Finished stack ++`)
  expect(divText).toBeInTheDocument();
  expect(spanText).toBeInTheDocument();
});

test('if stack is +-, should have 2 flips', () => {
  const { getByText } = render(<App input='+-'/>);
  const divText = getByText(`Case +-: flips 2`);
  const spanText = getByText(`Finished stack ++`)
  expect(divText).toBeInTheDocument();
  expect(spanText).toBeInTheDocument();
});

test('if stack is --+-, should have 3 flips', () => {
  const { getByText } = render(<App input='--+-'/>);
  const divText = getByText(`Case --+-: flips 3`);
  const spanText = getByText(`Finished stack ++++`)
  expect(divText).toBeInTheDocument();
  expect(spanText).toBeInTheDocument();
});