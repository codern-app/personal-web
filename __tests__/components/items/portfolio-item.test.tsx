import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Portfolio } from '../../../features/firebase/models/portfolio.model';
import { PortfolioItemComponent } from '../../../components/items/portfolio-item.component';
import '@testing-library/jest-dom';

afterEach(cleanup);

const portfolio: Portfolio = {
  id: 'test-id',
  title: 'Test app',
  description: 'It is a test app',
  link: 'https://localhost',
  icon: 'github',
  tags: ['js', 'css'],
};

describe('PortfolioItemComponent', () => {
  it('renders correctly', () => {
    const { getByText, getByRole } = render(<PortfolioItemComponent portfolio={portfolio} />);

    expect(getByText(portfolio.title)).toBeDefined();
    expect(getByText(portfolio.description)).toBeDefined();
    expect(getByRole('link')).toHaveAttribute('href', portfolio.link);
    expect(getByText(portfolio.tags[0])).toBeDefined();
    expect(getByText(portfolio.tags[1])).toBeDefined();
  });
});
