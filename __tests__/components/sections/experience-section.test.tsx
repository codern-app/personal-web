import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { ExperienceSectionComponent } from '../../../components/sections/experience-section.component';

afterEach(cleanup);

jest.mock('../../../features/firebase/providers/firebase.hook', () => ({
  useFirebase: jest.fn(() => ({})),
}));

jest.mock('next-intl', () => {
  return {
    useTranslations: jest.fn((key) => jest.fn((key2) => `${key}.${key2}`)),
  };
});

describe('ExperienceSectionComponent', () => {
  it('show section', () => {
    const { container } = render(<ExperienceSectionComponent />);
    expect(container.querySelector('section')).toBeDefined();
  });
  it('show section title', () => {
    const { getByText } = render(<ExperienceSectionComponent />);
    expect(getByText('experience.title')).toBeDefined();
  });
});
