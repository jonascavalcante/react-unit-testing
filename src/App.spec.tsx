import { render } from '@testing-library/react'

import App from './App'

test('Find "Hello world!"', () => {

  const { getByText } = render(<App />)

  expect(getByText('Hello world!')).toBeTruthy()
})