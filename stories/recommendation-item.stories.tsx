import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RecommendationItemComponent } from '../components/items/recommendation-item.component';
import { Recommendation } from '../features/firebase/models/recommendation.model';

export default {
  title: 'Items/Recommendation',
  component: RecommendationItemComponent,
} as ComponentMeta<typeof RecommendationItemComponent>;

const Template: ComponentStory<typeof RecommendationItemComponent> = (args) => (
  <RecommendationItemComponent {...args} />
);

const defaultValue: Recommendation = {
  id: 'test',
  name: 'John Smith',
  image: 'https://via.placeholder.com/64x64',
  title: 'CTO',
  companyName: 'Google',
  recommendation: 'You are the best!\nI recommend you.',
};

export const Example = Template.bind({});
Example.args = {
  recommendation: defaultValue,
};
