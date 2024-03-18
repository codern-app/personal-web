import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  PortfolioItemComponent,
  PortfolioItemComponentProps,
} from '../components/items/portfolio-item.component';
import { Portfolio } from '../features/firebase/models/portfolio.model';

export default {
  title: 'Items/Portfolio',
  component: PortfolioItemComponent,
} as Meta<typeof PortfolioItemComponent>;

const defaultValue: Portfolio = {
  id: 'test-id',
  title: 'Test app',
  description: 'It is a test app',
  link: 'https://localhost',
  icon: 'github',
  tags: ['js', 'css'],
};

export const Default: StoryObj<PortfolioItemComponentProps> = {
  args: {
    portfolio: defaultValue,
  },
  render: (args) => <PortfolioItemComponent {...args} />,
};
