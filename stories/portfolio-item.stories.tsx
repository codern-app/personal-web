import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PortfolioItemComponent } from '../components/items/portfolio-item.component';
import { Portfolio } from '../features/firebase/models/portfolio.model';

export default {
  title: 'Items/Portfolio',
  component: PortfolioItemComponent,
} as ComponentMeta<typeof PortfolioItemComponent>;

const Template: ComponentStory<typeof PortfolioItemComponent> = (args) => (
  <PortfolioItemComponent {...args} />
);

const defaultValue: Portfolio = {
  id: 'test-id',
  title: 'Test app',
  description: 'It is a test app',
  link: 'https://localhost',
  icon: 'github',
  tags: ['js', 'css'],
};

export const Example = Template.bind({});
Example.args = {
  portfolio: defaultValue,
};
