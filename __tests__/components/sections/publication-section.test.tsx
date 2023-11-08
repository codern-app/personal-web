import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { PublicationSectionComponent } from '../../../components/sections/publication-section.component';

afterEach(cleanup);

jest.mock('../../../features/firebase/providers/firebase.hook', () => ({
  useFirebase: jest.fn(() => ({
    profile: {
      publications: [],
    },
  })),
}));

jest.mock('next-intl', () => {
  return {
    useTranslations: jest.fn((key) => jest.fn((key2) => `${key}.${key2}`)),
  };
});

describe('PublicationSectionComponent', () => {
  it('show section', () => {
    const { container } = render(<PublicationSectionComponent />);
    expect(container.querySelector('section')).toBeDefined();
  });
  it('show section title', () => {
    const { getByText } = render(<PublicationSectionComponent />);
    expect(getByText('publication.title')).toBeDefined();
  });
});
