import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  RecommendationItemComponent,
  RecommendationItemComponentProps,
} from '../components/items/recommendation-item.component';
import { Recommendation } from '../features/firebase/models/recommendation.model';

export default {
  title: 'Items/Recommendation',
  component: RecommendationItemComponent,
} as Meta<typeof RecommendationItemComponent>;

const defaultValue: Recommendation = {
  id: 'test',
  name: 'John Smith',
  image: 'https://via.placeholder.com/64x64',
  title: 'CTO',
  companyName: 'Google',
  recommendation: 'You are the best!\nI recommend you.',
};

export const Default: StoryObj<RecommendationItemComponentProps> = {
  args: {
    recommendation: defaultValue,
  },
  render: (args) => <RecommendationItemComponent {...args} />,
};
