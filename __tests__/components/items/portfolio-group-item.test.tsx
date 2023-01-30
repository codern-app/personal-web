import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { PortfolioGroupItemComponent } from '../../../components/items/portfolio-group-item.component';
import { PortfolioSection } from '../../../features/firebase/models/portfolio.model';

afterEach(cleanup);

const portfolioSection: PortfolioSection = {
  id: 'test',
  title: 'Android',
  description: 'list of apps',
  portfolio: [],
};

describe('PortfolioGroupItemComponent', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <PortfolioGroupItemComponent portfolioSection={portfolioSection} />,
    );

    expect(getByText(portfolioSection.title)).toBeDefined();
    expect(getByText(portfolioSection.description)).toBeDefined();
  });
});
