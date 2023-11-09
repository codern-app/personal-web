import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { PortfolioSectionComponent } from '../../../components/sections/portfolio-section.component';

afterEach(cleanup);

jest.mock('../../../features/firebase/providers/firebase.hook', () => ({
  useFirebase: jest.fn(() => ({
    portfolios: [],
  })),
}));

jest.mock('next-intl', () => {
  return {
    useTranslations: jest.fn((key) => jest.fn((key2) => `${key}.${key2}`)),
  };
});

describe('PortfolioSectionComponent', () => {
  it('show section', () => {
    const { container } = render(<PortfolioSectionComponent />);
    expect(container.querySelector('section')).toBeDefined();
  });
  it('show section title', () => {
    const { getByText } = render(<PortfolioSectionComponent />);
    expect(getByText('portfolio.title')).toBeDefined();
  });
});
