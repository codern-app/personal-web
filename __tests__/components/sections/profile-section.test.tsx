import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { ProfileSectionComponent } from '../../../components/sections/profile-section.component';

afterEach(cleanup);

jest.mock('../../../features/firebase/providers/firebase.hook', () => ({
  useFirebase: jest.fn(() => ({
    get profile() {
      return {
        firstName: 'John',
        lastName: 'Smith',
      };
    },
  })),
}));

jest.mock('next-intl', () => {
  return {
    useTranslations: jest.fn((key) => jest.fn((key2) => `${key}.${key2}`)),
  };
});

describe('ProfileSectionComponent', () => {
  it('show section', () => {
    const { container } = render(<ProfileSectionComponent />);
    expect(container.querySelector('section')).toBeDefined();
  });
  it('show section title', () => {
    const { getByText } = render(<ProfileSectionComponent />);
    expect(getByText('John Smith')).toBeDefined();
  });
});
