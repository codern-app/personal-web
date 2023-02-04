import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { RecommendationSectionComponent } from '../../../components/sections/recommendation-section.component';

afterEach(cleanup);

jest.mock('../../../features/firebase/providers/firebase.hook', () => ({
  useFirebase: jest.fn(() => ({
    get recommendations() {
      return {};
    },
  })),
}));

jest.mock('next-intl', () => {
  return {
    useTranslations: jest.fn((key) => jest.fn((key2) => `${key}.${key2}`)),
  };
});

describe('RecommendationSectionComponent', () => {
  it('show section', () => {
    const { container } = render(<RecommendationSectionComponent />);
    expect(container.querySelector('section')).toBeDefined();
  });
  it('show section title', () => {
    const { getByText } = render(<RecommendationSectionComponent />);
    expect(getByText('recommendations.title')).toBeDefined();
  });
});
