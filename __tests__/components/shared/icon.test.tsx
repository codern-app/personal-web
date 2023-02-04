import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { IconComponent } from '../../../components/shared/icon.component';

afterEach(cleanup);

describe('IconComponent', () => {
  it('github icon', () => {
    const { container } = render(<IconComponent icon="github" />);
    expect(container.querySelector('svg')).toBeDefined();
  });
  it('github icon', () => {
    const { container } = render(<IconComponent icon="linkedin" />);
    expect(container.querySelector('svg')).toBeDefined();
  });
  it('github icon', () => {
    const { container } = render(<IconComponent icon="medium" />);
    expect(container.querySelector('svg')).toBeDefined();
  });
});
