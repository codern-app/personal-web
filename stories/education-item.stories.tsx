import React from 'react';
import {
  EducationItemComponent,
  EducationItemComponentProps,
} from '../components/items/education-item.component';
import { Education } from '../features/firebase/models/profile.model';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Items/Education',
  component: EducationItemComponent,
} as Meta<typeof EducationItemComponent>;

const defaultValue: Education = {
  id: 'id',
  university: 'University Name',
  image: 'https://via.placeholder.com/64x64',
  level: 'Degree Level',
  duration: 'Degree Duration',
  location: 'Location',
  topic: 'Topic',
};

export const Default: StoryObj<EducationItemComponentProps> = {
  args: {
    education: defaultValue,
  },
  render: (args) => <EducationItemComponent {...args} />,
};
