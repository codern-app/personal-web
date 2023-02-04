import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { HighlightSectionComponent } from '../../../components/sections/highlight-section.component';

afterEach(cleanup);

jest.mock('../../../features/firebase/providers/firebase.hook', () => ({
  useFirebase: jest.fn(() => ({
    get highlights() {
      return [];
    },
  })),
}));

jest.mock('next-intl', () => {
  return {
    useTranslations: jest.fn((key) => jest.fn((key2) => `${key}.${key2}`)),
  };
});

describe('HighlightSectionComponent', () => {
  it('show section', () => {
    const { container } = render(<HighlightSectionComponent />);
    expect(container.querySelector('section')).toBeDefined();
  });
});
