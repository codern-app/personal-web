import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PortfolioGroupItemComponent } from '../components/items/portfolio-group-item.component';
import { PortfolioSection } from '../features/firebase/models/portfolio.model';

export default {
  title: 'Items/PortfolioGroup',
  component: PortfolioGroupItemComponent,
} as ComponentMeta<typeof PortfolioGroupItemComponent>;

const Template: ComponentStory<typeof PortfolioGroupItemComponent> = (args) => (
  <PortfolioGroupItemComponent {...args} />
);

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

export const Example = Template.bind({});
Example.args = {
  portfolioSection: defaultValue,
};
