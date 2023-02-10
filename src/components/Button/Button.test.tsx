import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from './Button';

describe('Button component', () => {
  test('renders the children', async () => {
    const text = 'Button';
    render(<Button size="big">{text}</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Button');
  });

  test('has the correct class for size `big`', () => {
    const text = 'Button';
    render(<Button size="big">{text}</Button>);
    expect(screen.getByRole('button')).toHaveClass('rounded-lg px-7 py-2 text-lg bg-amber-600 text-white');
  });

  test('has the correct class for size `middle`', () => {
    const text = 'Button';
    render(<Button size="middle">{text}</Button>);
    expect(screen.getByRole('button')).toHaveClass('rounded-lg px-5 py-1 bg-amber-600 text-white');
  });

  test('has the correct class for size `small`', () => {
    const text = 'Button';
    render(<Button size="small">{text}</Button>);
    expect(screen.getByRole('button')).toHaveClass('rounded-lg px-3 py-1 text-sm bg-amber-600 text-white');
  });

  test('has the correct class for outlined', () => {
    const text = 'Button';
    render(<Button outlined>{text}</Button>);
    expect(screen.getByRole('button')).toHaveClass('rounded-lg px-5 py-1 border border-amber-600 text-amber-600');
  });

  test('calls `onClick` when clicked', () => {
    const onClick = jest.fn();
    const text = 'Button';
    render(<Button onClick={onClick}>{text}</Button>);
    userEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });
});
