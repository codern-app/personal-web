import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { EducationSectionComponent } from '../../../components/sections/education-section.component';

afterEach(cleanup);

jest.mock('../../../features/firebase/providers/firebase.hook', () => ({
  useFirebase: jest.fn(() => ({})),
}));

jest.mock('next-intl', () => {
  return {
    useTranslations: jest.fn((key) => jest.fn((key2) => `${key}.${key2}`)),
  };
});

describe('EducationSectionComponent', () => {
  it('show section', () => {
    const { container } = render(<EducationSectionComponent />);
    expect(container.querySelector('section')).toBeDefined();
  });

  it('show section title', () => {
    const { getByText } = render(<EducationSectionComponent />);
    expect(getByText('education.title')).toBeDefined();
  });
});
