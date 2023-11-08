import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { LanguagesSectionComponent } from '../../../components/sections/languages-section.component';

afterEach(cleanup);

jest.mock('../../../features/firebase/providers/firebase.hook', () => ({
  useFirebase: jest.fn(() => ({
    profile: {
      languages: [],
    },
  })),
}));

jest.mock('next-intl', () => {
  return {
    useTranslations: jest.fn((key) => jest.fn((key2) => `${key}.${key2}`)),
  };
});

describe('LanguagesSectionComponent', () => {
  it('show section', () => {
    const { container } = render(<LanguagesSectionComponent />);
    expect(container.querySelector('section')).toBeDefined();
  });
  it('show section title', () => {
    const { getByText } = render(<LanguagesSectionComponent />);
    expect(getByText('languages.title')).toBeDefined();
  });
});
