import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  ExperienceItemComponent,
  ExperienceItemComponentProps,
} from '../components/items/experience-item.component';
import { Experience } from '../features/firebase/models/experience.model';

export default {
  title: 'Items/Experience',
  component: ExperienceItemComponent,
} as Meta<typeof ExperienceItemComponent>;

const defaultValue: Experience = {
  id: 'exp1',
  title: 'Software Engineer',
  duration: 'Jan 2019 - Present',
  location: 'San Francisco, CA',
  company: {
    id: 'test',
    title: 'Google',
    image: 'https://via.placeholder.com/64x64',
    link: 'https://example.com/google.png',
  },
  description: 'Developed and maintained company website\n' + 'Worked on project X and project Y',
};

export const Default: StoryObj<ExperienceItemComponentProps> = {
  args: {
    experience: defaultValue,
  },
  render: (args) => <ExperienceItemComponent {...args} />,
};
