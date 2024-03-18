import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  PortfolioGroupItemComponent,
  PortfolioGroupItemComponentProps,
} from '../components/items/portfolio-group-item.component';
import { PortfolioSection } from '../features/firebase/models/portfolio.model';

export default {
  title: 'Items/PortfolioGroup',
  component: PortfolioGroupItemComponent,
} as Meta<typeof PortfolioGroupItemComponent>;

const defaultValue: PortfolioSection = {
  id: 'test',
  title: 'Android',
  description: 'list of apps',
  portfolio: [
    {
      id: 'test-id',
      title: 'Test app',
      description: 'It is a test app',
      link: 'https://localhost',
      icon: 'github',
      tags: ['js', 'css'],
    },
  ],
};

export const Default: StoryObj<PortfolioGroupItemComponentProps> = {
  args: {
    portfolioSection: defaultValue,
  },
  render: (args) => <PortfolioGroupItemComponent {...args} />,
};
